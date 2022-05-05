import axios from 'axios'
import jdown from 'jdown'
import path from 'path'
import chokidar from 'chokidar'
import fs from 'fs'
import util from 'util'
import {
  reloadClientData,
  rebuildRoutes,
  createSharedData,
} from 'react-static/node'

import masterSchedule from './data/schedule.json'

import slug from 'slug'

// promisify readFile
const readFile = util.promisify(fs.readFile)

// hot reload routeData when files change in dev mode
if (process.env.REACT_STATIC_ENV === 'development') {
  chokidar
    .watch('data', { ignoreInitial: true })
    .on('all', () => reloadClientData())
  chokidar
    .watch('content', { ignoreInitial: true })
    .on('all', () => rebuildRoutes())
}

// util to fetch JSON from the filesystem
const readJSON = async file => {
  try {
    const data = await readFile(file, 'utf8')
    return JSON.parse(data)
  } catch (e) {
    throw new Error(e)
  }
}

// loads any contentURL to the content field
const fetchContent = async item => {
  if (item.contentURL) {
    const res = await axios.get(item.contentURL)
    item.content = res.data
  }
  return item
}

// map and resolve all content links
const getContent = async data => {
  return await Promise.all(data.map(item => fetchContent(item)))
}

const resolveContent = async file => {
  try {
    const data = await readJSON(file)
    const content = await getContent(data)
    return content
  } catch (e) {
    throw new Error(e)
  }
}

// setup url safe ids to use for slugs and item ident with manual override
Array.prototype.mapIds = function(cb) {
  return this.map(obj => {
    obj.id = slug(obj.id ? obj.id : obj.fileInfo.name)
    return obj
  })
}

// return one
const findById = (collection, index, key = 'id') =>
  collection.find(item => item[key] === index)

// return all
const filterById = (collection, index, key = 'id') =>
  collection.filter(item => item[key] === index)

const getEventsBySession = (collection, id, key = 'sessionId') => {
  return collection.reduce((all, day) => {
    const events = filterById(day.events, id, key)
    if (events.length) {
      all.push({ ...day, events })
    }
    return all
  }, [])
}

// events.map(day =>
//   day.events.map(event => filterById(locations, event.locationId, 'id')),
// )

function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
  })
}

// TODO
const getLocationsByEvents = (collection, id, key = 'locationId') => {
  return collection.reduce((all, day) => {
    const locations = day.events.map(event => findById())
    if (locations.length) {
      all.push({ ...day, events })
    }
    return all
  }, [])
}

const getFormatBySession = (sessions, formats, id, formatId) => {
  return sessions.find(s => s.formatId === formatId)
}

const getEventsByFormat = (schedule, sessions, id, key = 'formatId') => {
  return schedule.flatMap(day => {
    return {
      ...day,
      events: day.events.filter(event => {
        const session = event.sessionId && findById(sessions, event.sessionId)
        return !!session && session.formatId === id
      }),
    }
  })
}

const hasEvents = days => days.some(day => day.events.length >= 1)

const getEventsBySpeaker = ''
const getEventsByLocation = ''
const getSpeakersBySession = ''
const getLocationsByVenue = ''
const getVenueByLocation = (venues, id) =>
  venues && venues.find(venue => venue.id === id)

export default {
  // tweaks for CI
  maxThreads: process.env.CI ? 1 : Infinity,
  outputFileRate: process.env.CI ? 10 : 100,
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-styled-components',
    'react-static-plugin-mdx',
    'react-static-plugin-sitemap',
    [
      'react-static-plugin-source-filesystem',
      {
        location: path.resolve('./src/pages'),
      },
    ],
  ],
  siteRoot:
    process.env.CONTEXT === 'production' ? 'https://2022.camp.ipfs' : undefined,
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: () => ({
    title: 'IPFS Camp, July 14-17 2022 🏕',
    gtagId: '',
    archived: false,
    tickets: {
      waitlist: true,
      waitlistCta: 'Tickets',
      waitlistLink: 'Waitlist',
      regCta: 'Apply',
      regLink: 'Register',
      onSale: true,
      viewSchedule: false,
    },
    meta: {
      url: 'https://2022.camp.ipfs',
      title: '',
      keywords: 'IPFS, IPFS Camp, IPFS Conf, dweb, libp2p, multiformats',
      twitter: 'ipfsbot',
      desc:
        'IPFS Camp is a 3 day hacker retreat designed for the builders of the Distributed Web.',
      lastBuilt: Date.now(),
    },
  }),
  getRoutes: async ({ dev }) => {
    const content = await jdown('content', {
      fileInfo: true,
      assets: { output: 'public', path: '/' },
    })

    const schedule = masterSchedule

    const formats = content.formats
      .sort((a, b) => (a.title > b.title ? 1 : -1))
      .mapIds()
    const humans = content.humans.mapIds()
    const sessions = content.sessions.mapIds()
    const venues = content.venues.mapIds()
    const locations = content.locations.mapIds()

    const scheduleShared = createSharedData({
      schedule,
      formats,
    })

    return [
      {
        path: 'team',
        template: 'src/containers/Team',
        getData: async () => ({ humans, title: '🏕 Team' }),
      },
      {
        path: 'schedule',
        template: 'src/containers/Schedule.mdx',
        sharedData: {
          schedule: scheduleShared,
        },
        getData: async () => ({}),
        children: [
          ...formats.map(item => ({
            path: `format/${item.id}`,
            template: 'src/containers/Schedule.mdx',
            sharedData: {
              schedule: scheduleShared,
            },
            getData: () => {
              const events = getEventsByFormat(schedule, sessions, item.id)
              return {
                title: item.title,
                back: {
                  to: '/schedule',
                  title: 'Schedule',
                },
                meta: {
                  title: `${item.title} | Formats`,
                },
                contents: item.contents,
                events: hasEvents(events) && events,
              }
            },
          })),
          ...sessions.map(item => ({
            path: `session/${item.id}`,
            template: 'src/containers/Schedule.mdx',
            sharedData: {
              schedule: scheduleShared,
            },
            getData: () => {
              // get all events for this session
              const events = getEventsBySession(schedule, item.id, 'sessionId')

              // get all locations for this session
              const loc = events.flatMap(day =>
                day.events.flatMap(event =>
                  filterById(locations, event.locationId, 'id'),
                ),
              )

              return {
                title: item.title,
                back: {
                  to: '/schedule',
                  title: 'Schedule',
                },
                meta: {
                  title: `${item.title} | Sessions`,
                },
                contents: item.contents,
                locations: removeDuplicates(loc, 'id'),
                events,
              }
            },
          })),
          ...locations.map(item => ({
            path: `location/${item.id}`,
            template: 'src/containers/Schedule.mdx',
            sharedData: {
              schedule: scheduleShared,
            },
            getData: () => {
              const selectedVenue = getVenueByLocation(venues, item.venueId)
              return {
                title: item.title,
                back: {
                  to: '/schedule',
                  title: 'Schedule',
                },
                meta: {
                  title: `${item.title} | Locations`,
                },
                contents: item.contents,
                // locations: item,
                venues: [selectedVenue],
              }
            },
          })),
        ],
      },
    ]
  },
}
