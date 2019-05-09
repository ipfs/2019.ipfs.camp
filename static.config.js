import axios from 'axios'
import path from 'path'
import chokidar from 'chokidar'
import fs from 'fs'
import util from 'util'
import { reloadClientData } from 'react-static/node'

// promisify readFile
const readFile = util.promisify(fs.readFile)

// hot reload routeData when files change in dev mode
if (process.env.REACT_STATIC_ENV === 'development') {
  chokidar.watch('./data').on('all', () => reloadClientData())
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
    process.env.CONTEXT === 'production' ? 'https://camp.ipfs.io' : undefined,
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: () => ({
    title: 'IPFS Camp, June 27-30 2019 🏕',
    gtagId: 'UA-96910779-12',
    meta: {
      url: 'https://camp.ipfs.io',
      title: '',
      keywords: 'IPFS, IPFS Camp, IPFS Conf, dweb, libp2p, multiformats',
      twitter: 'ipfsbot',
      desc:
        'IPFS Camp is a 3 day hacker retreat designed for the builders of the Distributed Web.',
      lastBuilt: Date.now(),
    },
  }),
  getRoutes: async ({ dev }) => [
    {
      path: 'schedule',
      getData: async () => ({
        schedule: await readJSON('./data/schedule.json'),
      }),
    },
  ],
}
