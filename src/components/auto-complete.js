import React from 'react'
import useInput from '../hooks/use-input'

const AutoComplete = ({ itemList }) => {
  const { inputEvent } = useInput(itemList)

  return (
    <div className="input_container">
      <input className="input_box" {...inputEvent} />
    </div>
  )
}

export default AutoComplete
