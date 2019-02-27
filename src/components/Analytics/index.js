import React from 'react'
import { Head } from 'react-static'
import { RouteComponentProps } from '@reach/router'

export class Analytics extends React.Component {
  constructor(props) {
    super(props)
    this.GA_TRACKING_ID = props.id
  }
  startGtag() {
    if (window.location.hostname !== 'localhost') {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())
      this.track()
    }
  }

  track() {
    const gtag = window.gtag
    if (typeof gtag === 'function') {
      gtag('config', this.GA_TRACKING_ID)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname === this.props.location.pathname) return
    this.track()
  }

  componentDidMount() {
    this.startGtag()
  }

  render() {
    return (
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${
            this.GA_TRACKING_ID
          }`}
        />
      </Head>
    )
  }
}
