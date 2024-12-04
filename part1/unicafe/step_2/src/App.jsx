import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positivity, setPositivity] = useState(0)

  const handleGoodClick = () => {
    const updateGood = good + 1;
    setGood(updateGood);
    const updatedAll = updateGood + neutral + bad;
    setAll(updateGood + neutral + bad);
    setAverage((updateGood - bad) / updatedAll);
    setPositivity((updateGood / updatedAll)*100);

  }

  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral);
    const updatedAll = good + updateNeutral + bad;
    setAll(good + updateNeutral + bad);
    setAverage((good - bad) / updatedAll);
    setPositivity((good / updatedAll)*100);
          
  }

  const handleBadClick = () => {
    const updateBad = bad + 1;
    setBad(updateBad);
    const updatedAll = good + neutral + updateBad;
    setAll(good + neutral + updateBad);
    setAverage((good - updateBad) / updatedAll);
    setPositivity((good / updatedAll)*100);

  }
  

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={handleGoodClick}>Good</button>
        <button onClick={handleNeutralClick}>Neutral</button>
        <button onClick={handleBadClick}>Bad</button>
      </div>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Postivie: {positivity}%</p>
    </div>
  )
}

export default App