import React from 'react';
import './ExerciseRoutine.css';


const exercises = [
  {
    name: "Push-Ups",
    image: require('../assets/pushups.jpg'), // Replace with your image path
    description: "A classic upper-body exercise to strengthen chest, shoulders, and triceps.",
  },
  {
    name: "Squats",
   image: require('../assets/squat.jpg'), // Replace with your image path
    description: "Targets your quadriceps, hamstrings, and glutes. Perfect for lower-body strength.",
  },
  {
    name: "Plank",
    image: require('../assets/plank.jpeg'), // Replace with your image path
    description: "An excellent core exercise to build stability and endurance.",
  },
  {
    name: "Lunges",
   image: require('../assets/lunges.jpg'), // Replace with your image path
    description: "Improves balance and targets your legs and glutes.",
  },
  {
    name: "Pull-Ups",
    image: require('../assets/pullups.jpg'), // Replace with your image path
    description: "Great for building back and bicep strength.",
  },
];

function ExerciseRoutine() {
  return (
    <div className="exercise-routine">
      <h2 className="center">Exercise Routine</h2>
      <div className="exercise-list">
        {exercises.map((exercise, index) => (
          <div className="exercise-card" key={index}>
            <img src={exercise.image} alt={exercise.name} className="exercise-image" />
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExerciseRoutine;
