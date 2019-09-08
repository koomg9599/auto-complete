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
  const inputEvent = {
    value: value,
    onChange: ({ target }) => {
      if (!viewFlag) {
        setViewFlag(true)
      }
      if (value === '') {
        setItems(totalItems)
        setIndex(null)
      }
      setValue(target.value)
      const nextItems = totalItems.filter(item => item.includes(target.value))
      setItems(nextItems)
    },
    onKeyDown: ({ key }) => {
      switch (key) {
        case 'ArrowUp':
          if (index > 0) {
            setIndex(index - 1)
          }
          break
        case 'ArrowDown':
          if (index === null) {
            setIndex(0)
          } else if (index < items.length - 1) {
            setIndex(index + 1)
          }
          break
        case 'Enter':
          setValue(items[index])
          setViewFlag(false)
          setIndex(null)
          break
        case 'Escape':
          setViewFlag(false)
          setIndex(null)
          setItems([])
          break
        default:
          break
      }
    },
    onClick: () => {
      if (!viewFlag) {
        setViewFlag(true)
      }
      if (value === '') {
        setItems(totalItems)
        setIndex(null)
      }
      setValue(value)
      const nextItems = totalItems.filter(item => item.includes(value))
      setItems(nextItems)
    },
  }
  const handleBlur = e => {
    // for (let a in e) {
    //   console.log(e[a])
    // }
  }
  return { inputEvent, items, index, viewFlag, handleClick, handleBlur }
}

export default useAutoComplete
