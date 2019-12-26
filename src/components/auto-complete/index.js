import React, { useEffect } from 'react'
import useAutoComplete from '../../hooks/use-auto-complete'
import './auto-complete.css'

const AutoComplete = ({ itemList }) => {
  const { inputEvent, items, index, viewFlag, handleClick, windowCloseHandler } = useAutoComplete(
    itemList,
  )

  useEffect(() => {
    window.addEventListener('click', windowCloseHandler)
  }, [])
  return (
    <div className="auto-complete search-bx">
      <div className="search-group">
        <input className="input_box" {...inputEvent} />
        <div className="search-result clearfix">
          {viewFlag && (
            <div className="result-list-box">
              <div className="result-count">
                <span>총 {items.length}개</span>의 검색결과
              </div>
              <ul>
                {items.map((item, idx) => (
                  <li
                    key={item}
                    className={`input_item ${idx === index ? 'keyboard-item' : ''}`}
                    onClick={() => {
                      handleClick(item)
                    }}
                  >
                    <div className="result-txt number-txt">{item}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AutoComplete
