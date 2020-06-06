import React from 'react'
import { text, boolean, number, select } from '@storybook/addon-knobs'
import Button from '.'
export default {
  title: 'Button',
  components: Button,
}

export const BasicButton = () => {
  return (
    <Button
      margin={text('margin')}
      full={boolean('full', false)}
      fontSize={number('fontSize', 16)}
      color={select('color', ['blue', 'mint', 'red'], 'blue')}
    >
      버튼
    </Button>
  )
}
BasicButton.story = {
  name: '기본버튼',
}
