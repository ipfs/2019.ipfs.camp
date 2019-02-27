import React from 'react'
import { Head } from '@components/Meta'
import { RouteComponentProps } from '@reach/router'
import 'element-closest'

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
    const { gtag } = window
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
    const self = this

    // add outbound tracking
    document.addEventListener(
      'click',
      function(e) {
        var href =
          e.target.closest('a') && e.target.closest('a').getAttribute('href')

        if (href && href.indexOf('http') === 0) {
          self.trackOutbound(href)
          window.open(href)
          e.preventDefault()
        }
      },
      false,
    )
  }

  trackOutbound(href) {
    const { gtag } = window
    if (typeof gtag === 'function') {
      gtag('event', 'click', {
        event_category: 'outbound',
        event_label: href,
        transport_type: 'beacon',
      })
    }
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
