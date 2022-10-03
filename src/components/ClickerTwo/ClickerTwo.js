import { useState } from "react"

const ClickerTwo = () => {

  let [currentCount, setCurrentCount] = useState(0);

  // console.log(currentCount);

  const increaseCount = () => {
    setCurrentCount(currentCount + 1)
  }

  return (
    <button onClick={increaseCount}>Clicked {currentCount} times</button>
  )
}

export default ClickerTwo;