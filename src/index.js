import React, { useState } from 'react'

import styles from './useModal.styles'

const useModal = Element => {
  const [showModal, setShowModal] = useState(false)

  const toggle = () => setShowModal(!showModal)

  const Modal = props => {
    return (
      <div style={styles}>
        <Element {...props} />
      </div>
    )
  }

  return [Modal, showModal, toggle]
}

export default useModal
