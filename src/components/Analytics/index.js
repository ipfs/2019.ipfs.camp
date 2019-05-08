import React from 'react'
import { Head } from '@components/Meta'
import { RouteComponentProps } from '@reach/router'

export class Analytics extends React.Component {
  constructor(props) {
    super(props)
    this.GA_TRACKING_ID = props.id
  }

  gtag() {
    if (window.location.hostname == 'localhost' || !window.dataLayer) return
    window.dataLayer.push(arguments)
  }

  trackOutbound(href) {
    this.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: href,
      transport_type: 'beacon',
    })
  }

  startGtag() {
    const self = this

    if (window.location.hostname !== 'localhost') {
      window.dataLayer = window.dataLayer || []
      this.gtag('js', new Date())
      this.track()
    }

    // add outbound tracking
    document.addEventListener(
      'click',
      function(e) {
        var href =
          e.target.closest('a') && e.target.closest('a').getAttribute('href')

        if (
          href &&
          href.indexOf('http') === 0 &&
          href.indexOf(window.location.href) === -1
        ) {
          self.trackOutbound(href)
          window.open(href)
          e.preventDefault()
        }
      },
      false,
    )
  }

  track() {
    this.gtag('config', this.GA_TRACKING_ID)
  }

  scrollTo = offsetTop => {
    if ('scrollBehavior' in document.documentElement.style) {
      return window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    } else {
      return window.scrollTo(0, offsetTop)
    }
  }

  scroll = async location => {
    const findEl = async (hash, x) => {
      return (
        document.querySelector(hash) ||
        new Promise((resolve, reject) => {
          if (x > 50) {
            return resolve()
          }
          setTimeout(() => {
            resolve(findEl(hash, ++x || 1))
          }, 100)
        })
      )
    }

    if (location.hash) {
      let el = await findEl(location.hash)
      this.scrollTo(el.offsetTop)
    } else {
      return this.scrollTo(0)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname === this.props.location.pathname) return
    this.track()
    this.scroll(window.location)
  }

  componentDidMount() {
    /**
     * Element.closest() polyfill
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
     */
    if (!Element.prototype.closest) {
      if (!Element.prototype.matches) {
        Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector
      }
      Element.prototype.closest = function(s) {
        var el = this
        var ancestor = this
        if (!document.documentElement.contains(el)) return null
        do {
          if (ancestor.matches(s)) return ancestor
          ancestor = ancestor.parentElement
        } while (ancestor !== null)
        return null
      }
    }
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
