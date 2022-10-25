import React, { useState, useEffect, useRef } from "react";

export default function App() {

  const Start_Time = 5
  const [text, setText] = useState("")
  const [isTimeRemaining, setIsTimeRemaining] = useState(Start_Time)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const input_text = useRef(0)

  function textChange(e) {
    // console.log(e.target.value)
    setText(e.target.value)
  }

  function noOfWords(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  function startGame() {
    setIsTimeRunning(true)
    setIsTimeRemaining(Start_Time)
    setText("")
    input_text.current.disabled = false
    input_text.current.focus()
  }

  function endGame() {
    setIsTimeRunning(false)
    setWordCount(noOfWords(text))
  }

  useEffect(() => {
    if (isTimeRunning && isTimeRemaining > 0) {
      setTimeout(() => {
        setIsTimeRemaining((time) => time - 1)
      }, 1000);
    } else if (isTimeRemaining === 0) {
      endGame()
    }
  }, [isTimeRemaining, isTimeRunning])


  return (
    <>
      <div className="container">
        <h1>How fast do you type?</h1>
        <textarea
          onChange={textChange}
          value={text}
          disabled={!isTimeRunning}
          ref={input_text}
        />
        <h4>Time remaining: {isTimeRemaining}</h4>
        <button
          onClick={startGame}
          disabled={isTimeRunning}
        >Start Game</button>
        <h1>Word Count: {wordCount}</h1>
      </div>
    </>
  )
}


