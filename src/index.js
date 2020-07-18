import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  );
}

const Feedback = () => {
  return (
    <Header text="give feedback" />
  );
}

const Statistics = ({ good, neutral, bad }) => {

  const StatisticLine = ({ text, value }) => {
    return (
      <p>{text} {value}</p>
    );
  }

  let total = (good + bad + neutral);
  let count = good - bad;

  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <div>

        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="average" value={count / total} />
        <p>positive {(good / total) * 100} %</p>
      </div>
    );
  }

  return (
    <div>
      <p>No feedback given</p>
    </div>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <Feedback />

      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

ReactDOM.render(<App />,
  document.getElementById('root')
);