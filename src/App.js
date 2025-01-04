import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ExerciseRoutine from './components/ExerciseRoutine';

import './index.css';

function App() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
      setBmi(bmi);

      if (bmi < 18.5) {
        setMessage('You are underweight');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are a normal weight');
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage('You are overweight');
      } else {
        setMessage('You are obese');
      }
    }
  };

  let imgSrc;
  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 18.5) {
      imgSrc = require('../src/assets/underweight.png');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      imgSrc = require('../src/assets/normal.png');
    } else if (bmi >= 25 && bmi < 29.9) {
      imgSrc = require('../src/assets/overweight.png');
    } else {
      imgSrc = require('../src/assets/obese.png');
    }
  }

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
    <Navbar />
    <div className="app">
    
      <div className="card">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div className="input-group">
            <label>Height (cm)</label>
            <input
              value={height}
              type="number"
              placeholder="Enter height"
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Weight (kg)</label>
            <input
              value={weight}
              type="number"
              placeholder="Enter weight"
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div className="button-group">
            <button className="btn" type="submit">
              Calculate
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reset
            </button>
          </div>
        </form>
        {bmi && (
          <div className="result">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        )}
        {imgSrc && (
          <div className="img-container">
            <img src={imgSrc} alt={message} />
          </div>
        )}
      </div>
      
    </div>
    <ExerciseRoutine />
    </>
  );
}

export default App;
