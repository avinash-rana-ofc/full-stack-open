import { useState } from 'react'

const Statistics = (props) => {

  return(
    <div>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.all}</p>
      <p>Average: {props.average}</p>
      <p>Positive: {props.positivity}%</p>
    </div>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positivity={positivity} />
    </div>
  )
}

export default App