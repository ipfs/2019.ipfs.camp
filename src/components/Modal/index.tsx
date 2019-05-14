import React, { useState, useEffect } from 'react'
import RModal from 'react-modal'
import './modal.css'

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
RModal.setAppElement('#root')

type ModalProps = RModal.Props & {
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = props => {
  const {
    children,
    closeTimeoutMS = 300,
    isOpen,
    onRequestClose,
    ...modalProps
  } = props
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  const onRequestCloseFn = () => {
    setModalOpen(false)
    onRequestClose && setTimeout(onRequestClose, closeTimeoutMS || 10)
  }
  return (
    <>
      <RModal
        closeTimeoutMS={closeTimeoutMS}
        isOpen={isModalOpen}
        onRequestClose={onRequestCloseFn}
        contentLabel="RS Modal"
        {...modalProps}
      >
        {children}
      </RModal>
    </>
  )
}
