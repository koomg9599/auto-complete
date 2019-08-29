import { useState } from 'react'

const useInput = itemList => {
  const [value, setValue] = useState('')
  const [items, setItems] = useState(itemList)

  const inputEvent = {
    value: value,
    onChange: ({ target }) => {
      setValue(target.value)
    },
    onKeyPress: ({ target }) => {},
  }

  return { inputEvent }
}

export default useInput
