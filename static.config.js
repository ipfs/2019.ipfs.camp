import axios from 'axios'
import path from 'path'

export default {
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-styled-components',
    'react-static-plugin-mdx',
  ],
  // siteRoot: 'https://camp.ipfs.io',
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
    },
  }),
}
