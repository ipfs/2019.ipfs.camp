import axios from 'axios'
import path from 'path'
import chokidar from 'chokidar'
import fs from 'fs'
import util from 'util'
import { reloadClientData } from 'react-static/node'

// promisify readFile
const readFile = util.promisify(fs.readFile)

// hot reload routeData when files change
chokidar.watch('./data').on('all', () => reloadClientData())

// util to fetch JSON from the filesystem
const readJSON = async file => {
  try {
    const data = await readFile(file, 'utf8')
    return JSON.parse(data)
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
