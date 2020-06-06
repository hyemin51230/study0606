import React from 'react'
import Form from './form'

import PropTypes from 'prop-types'

function Body({ onAddUser }) {
  return (
    <div>
      <Form onAddUser={onAddUser} />
    </div>
  )
}

Body.protoTypes = {
  onAddUser: PropTypes.func,
}
export default Body
