import { useState } from 'react'

const useAutoComplete = itemList => {
  const totalItems = itemList
  const [value, setValue] = useState('')
  const [items, setItems] = useState([])
  const [index, setIndex] = useState(null)
  const [viewFlag, setViewFlag] = useState(false)

  const handleClick = item => {
    setValue(item)
    setViewFlag(false)
  }
  function windowInvisible() {
    setViewFlag(false)
    setIndex(null)
    setItems([])
  }
  const inputEvent = {
    value: value,
    onChange: ({ target }) => {
      const nextValue = target.value
      if (!viewFlag) {
        setViewFlag(true)
      } else if (viewFlag && !nextValue) {
        windowInvisible()
      }
      if (value === '') {
        setItems(totalItems)
        setIndex(null)
      }
      setValue(nextValue)

      const nextItems = totalItems.filter(item => item.includes(target.value))
      setItems(nextItems)
    },
    onKeyDown: ({ key }) => {
      switch (key) {
        case 'ArrowUp':
          if (index > 0) {
            setIndex((index - 1) % items.length)
          }
          break
        case 'ArrowDown':
          if (index === null) {
            setIndex(0)
          } else {
            setIndex((index + 1) % items.length)
          }
          break
        case 'Enter':
          setValue(items[index])
          windowInvisible()
          break
        case 'Escape':
          windowInvisible()
          break
        default:
          break
      }
    },
    onClick: () => {
      if (value === '') {
        windowInvisible()
      } else if (!viewFlag) {
        setViewFlag(true)
      }
      setValue(value)
      const nextItems = totalItems.filter(item => item.includes(value))
      setItems(nextItems)
    },
  }
  const handleBlur = e => {
    windowInvisible()
  }
  return { inputEvent, items, index, viewFlag, handleClick, handleBlur }
}

export default useAutoComplete
