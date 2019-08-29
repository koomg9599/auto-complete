import React from 'react'
import AutoComplete from './components/auto-complete'

function App() {
  const itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="App">
      <AutoComplete itemList={itemList} />
    </div>
  )
}

export default App
