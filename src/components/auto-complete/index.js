import React from 'react'
import useAutoComplete from '../../hooks/use-auto-complete'
import './auto-complete.css'

const AutoComplete = ({ itemList }) => {
  const { inputEvent, items, index, viewFlag, handleClick, handleBlur } = useAutoComplete(itemList)

  return (
    <div className="input_container" style={{ background: 'blue' }} onBlur={handleBlur}>
      <input className="input_box" {...inputEvent} />
      <ul>
        {viewFlag &&
          items.map((item, idx) => (
            <li
              key={item}
              className={`input_item ${idx === index ? 'blue' : ''}`}
              onClick={() => {
                handleClick(item)
              }}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default AutoComplete
