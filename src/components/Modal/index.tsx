import React from 'react'
import RModal from 'react-modal'
import './modal.css'

const customStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
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

type ModalProps = RModal.Props & {
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = props => {
  const { children, ...modalProps } = props
  return (
    <>
      <RModal
        style={customStyles}
        closeTimeoutMS={100}
        contentLabel="RS Modal"
        {...modalProps}
      >
        <div className="lh-copy mw7">{children}</div>
      </RModal>
    </>
  )
}
