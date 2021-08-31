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
    if (window.confirm('Are you sure you want to delete?')) {
      axios
        .delete(`http://localhost:5000/exercises/${id}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
      setExercises(exercises.filter((exercise) => exercise._id !== id))
    }
  }

  return (
    <div>
      <h3 className='text-xl'>Exercises List</h3>
      {exercises.map((exercise) => {
        const { _id, username, description, duration, date } = exercise
        return (
          <div className='mt-3' key={_id}>
            <h4>{date.substring(0, 10)}</h4>
            <h5>
              {description} for {duration} min
            </h5>
            <p> {username}</p>
            <button>
              <Link to={`/edit/${_id}`}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                  />
                </svg>
              </Link>
            </button>
            <button onClick={() => deleteExercise(_id)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                />
              </svg>
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default ExercisesList
