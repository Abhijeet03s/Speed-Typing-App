import useWordCount from "./Hooks/useWordCount"

export default function App() {

  const {
    textChange,
    isTimeRunning,
    text,
    input_text,
    startGame,
    wordCount,
    isTimeRemaining
  } = useWordCount(5)

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


