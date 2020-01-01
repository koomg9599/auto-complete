import { useState } from 'react'

const useAutoComplete = itemList => {
  const totalItems = itemList
  const [search, setSearch] = useState('')
  const [items, setItems] = useState([])
  const [index, setIndex] = useState(null)
  const [viewFlag, setViewFlag] = useState(false)

  const handleClick = item => {
    setSearch(item)
    setViewFlag(false)
  }
  function closeWindow() {
    setViewFlag(false)
    setIndex(null)
    setItems([])
  }
  const inputEvent = {
    value: search,
    onChange: ({ target }) => {
      const nextSearch = target.value
      if (!viewFlag) {
        setViewFlag(true)
      } else if (viewFlag && !nextSearch) {
        closeWindow()
      }
      if (value === '') {
        setItems(totalItems)
        setIndex(null)
      }
      setSearch(nextValue)

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
          setSearch(items[index])
          closeWindow()
          break
        case 'Escape':
          closeWindow()
          break
        default:
          break
      }
    },
    onClick: () => {
      if (search === '') {
        closeWindow()
      } else if (!viewFlag) {
        setViewFlag(true)
      }
      setSearch(search)
      const nextItems = totalItems.filter(item => item.includes(value))
      setItems(nextItems)
    },
  }
  const handleClickOthers = e => {
    const { className } = e.target
    if (className !== 'input_item' || className !== 'input_box') {
      closeWindow()
    }
  }

  return { inputEvent, items, index, viewFlag, handleClick, handleClickOthers }
}

export default useAutoComplete
