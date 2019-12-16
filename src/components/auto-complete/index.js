import React from 'react'
import useAutoComplete from '../../hooks/use-auto-complete'
import './auto-complete.css'

const AutoComplete = ({ itemList }) => {
  const { inputEvent, items, index, viewFlag, handleClick, handleBlur } = useAutoComplete(itemList)

  return (
    <div className="auto-complete">
      <div className="search-bx">
        <div className="search-group">
          <div className="input_container" onBlur={handleBlur}>
            <input className="input_box" {...inputEvent} />
            {viewFlag && (
              <div className="search-result clearfix">
                <div className="result-list-box">
                  <div className="result-count">
                    <span>총 {items.length}개</span>의 검색결과
                  </div>
                  <ul>
                    {items.map((item, idx) => (
                      <li
                        key={item}
                        className={`input_item ${idx === index ? 'blue' : ''}`}
                        onClick={() => {
                          handleClick(item)
                        }}
                      >
                        <span className="search-badge number">사건번호</span>
                        <div className="result-txt number-txt">{item}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutoComplete
