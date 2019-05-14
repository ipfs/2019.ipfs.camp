import React, { useState, useEffect } from 'react'
import RModal from 'react-modal'
import './modal.css'

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
RModal.setAppElement('#root')

type ModalProps = RModal.Props & {
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = props => {
  const { children, isOpen, ...modalProps } = props
  const [isModalOpen, setModalOpen] = useState(false)
  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])
  console.log('Estado2: ', isModalOpen)
  return (
    <>
      <RModal
        closeTimeoutMS={300}
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="RS Modal"
        {...modalProps}
      >
        {children}
      </RModal>
    </>
  )
}
