import { useState } from 'react'
import classes from './app.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={classes.root}>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  )
}

export default App
