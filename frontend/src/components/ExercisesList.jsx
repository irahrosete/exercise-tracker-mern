import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ExercisesList = () => {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/exercises')
      .then((res) => {
        if (res.data.length > 0) {
          setExercises(res.data)
          console.log(res.data)
        }
      })
      .catch((err) => console.log(err))
  }, [])

  const deleteExercise = (id) => {
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
    setExercises(exercises.filter((exercise) => exercise._id !== id))
  }

  return (
    <div>
      <h3 className='text-xl'>Exercises List</h3>
      {exercises.map((exercise) => {
        const { _id, username, description, duration, date } = exercise
        return (
          <div key={_id}>
            <h5>
              {description} for {duration} min on {date.substring(0, 10)}
            </h5>
            <p>by {username}</p>
            <button>
              <Link to={`/edit/${_id}`}>edit</Link>
            </button>
            <button onClick={() => deleteExercise(_id)}>delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default ExercisesList
