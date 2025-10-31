import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }
  return (
    <>
      <div className="bg-lime-700 w-full h-screen text-2xl flex items-center justify-center text-white">
        <button onClick={increaseCount}>increase count {count}</button>
      </div>
    </>
  )
}

export default App
