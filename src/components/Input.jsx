import React from 'react'
import { Input as SemanticInput } from 'semantic-ui-react'

export const Input = (props) => {
  const { setValue, size, placeholder, icon } = props
  const getInputValue = (_event, data) => {
    setValue(data.value)
  }

  return (
    <SemanticInput
      placeholder={placeholder}
      size={size}
      onChange={getInputValue}
      icon={icon}
      iconPosition="left"
    />
  )
}
