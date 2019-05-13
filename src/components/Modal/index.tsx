import React from 'react'
import RModal from 'react-modal'
import './modal.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
RModal.setAppElement('#root')

type ModalProps = {
  url?: string
  children: React.ReactNode
  isOpen?: boolean
  onRequestClose?: () => void
}

type ModalState = {
  modalIsOpen: boolean
}

export class Modal extends React.Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props)

    this.state = {
      modalIsOpen: props.isOpen || false,
    }

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {}

  closeModal() {
    this.setState({ modalIsOpen: false })
    this.props.onRequestClose && this.props.onRequestClose()
  }

  render() {
    return (
      <>
        <RModal
          isOpen={this.props.isOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          closeTimeoutMS={100}
          contentLabel="RS Modal"
        >
          <div className="lh-copy mw7">{this.props.children}</div>
        </RModal>
      </>
    )
  }
}
