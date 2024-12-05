import { useState } from 'react'

const Statistics = (props) => {

  if(props.all === 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  
  return(
    <table>
      <tbody>
        <StatisticLine text="Good" value={props.good} />
        <StatisticLine text="Neutral" value={props.neutral} />
        <StatisticLine text="Bad" value={props.bad} />
        <StatisticLine text="Total" value={props.all} />
        <StatisticLine text="Average" value={props.average} />
        <StatisticLine text="Positive" value={props.positivity} />
      </tbody>
    </table>
  )
}


const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
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
        <Button handleClick={handleGoodClick} text="Good" />
        <Button handleClick={handleNeutralClick} text="Neutral" />
        <Button handleClick={handleBadClick} text="Bad" />
      </div>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positivity={positivity} />
    </div>
  )
}

export default App