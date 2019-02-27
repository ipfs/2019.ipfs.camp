import axios from 'axios'
import path from 'path'

export default {
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-styled-components',
    'react-static-plugin-mdx',
  ],
  // siteRoot: 'https://camp.ipfs.io/',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: () => ({
    title: 'IPFS Camp 2019 🏕',
    gtagId: '',
  }),
}
