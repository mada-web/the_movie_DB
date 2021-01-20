import React from 'react'
import { Input as SemanticInput } from 'semantic-ui-react'

export const Input = ({ setValue }) => {
  const getInputValue = (_event, data) => {
    setValue(data.value)
  }

  return (
    <SemanticInput
      placeholder="Search..."
      size="small"
      onChange={getInputValue}
    />
  )
}
