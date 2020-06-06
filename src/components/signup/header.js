import React from 'react'
import PropTypes from 'prop-types'
import Text from '../shared/text'
import Container from '../shared/container'

function Header({ title = '기본타이틀' }) {
  return (
    <Container padding="20px 0">
      <Text size="24" bold>
        {title}
      </Text>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
