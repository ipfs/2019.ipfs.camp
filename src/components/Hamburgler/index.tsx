import React from 'react'
import './Hamburgler.css'

type HamburglerProps = {}

type HamburglerState = {
  open: boolean
  body?: HTMLElement
}

export class Hamburgler extends React.Component<
  HamburglerProps,
  HamburglerState
> {
  constructor(props: HamburglerProps) {
    super(props)
    this.state = { open: false }
  }
  componentDidMount() {
    window.addEventListener('keyup', this.escListen.bind(this))
    this.setState({ body: document.body })
  }
  escListen(e: KeyboardEvent) {
    if (e.keyCode === 27) this.closeNav()
    return false
  }
  closeNav() {
    this.setState({
      open: false,
    })
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.escListen)
    this.toggleClass(false)
  }
  toggleClass(open: boolean) {
    const body = this.state.body
    open ? body.classList.add('noscroll') : body.classList.remove('noscroll')
  }
  toggleNav() {
    this.setState({ open: !this.state.open })
    this.toggleClass(!this.state.open)
  }
  render() {
    const props = this.props
    return (
      <div
        ref="hamburgler"
        className={[
          this.state.open ? 'hamburgler-active' : null,
          'hamburgler-hit',
        ]
          .filter(e => e)
          .join(' ')}
        onClick={this.toggleNav.bind(this)}
      >
        <div className="hamburgler-icon-wrapper sm-show">
          <span className="hamburgler-icon" />
        </div>
        <div className="hamburgler-menu">
          <div
            {...props}
            className="hamburgler-menu-list"
            onClick={this.closeNav.bind(this)}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
