import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CreateExercise = () => {
  const [exercise, setExercise] = useState({
    username: '',
    description: '',
    duration: 0,
    date: new Date(),
  })

  const [date, setDate] = useState(new Date())
  const [exercises, setExercises] = useState([])

  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(['test user', 'irah'])
  }, [])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setExercise({ ...exercise, [name]: value })
  }

  const handleDateChange = (date) => {
    setDate(date)
    setExercise({ ...exercise, date })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newExercise = { ...exercise }
    setExercises([...exercises, newExercise])
    setExercise({
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
    })
    console.log(newExercise)
    // window.location = '/'
  }

  return (
    <>
      <h3>Create New Exercise</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username: </label>
          <select
            name='username'
            id='username'
            required
            value={exercise.username}
            onChange={handleChange}
          >
            {users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              )
            })}
          </select>
        </div>
        <div>
          <label>Description: </label>
          <input
            type='text'
            name='description'
            required
            value={exercise.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Duration (in minutes): </label>
          <input
            type='text'
            name='duration'
            required
            value={exercise.duration}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={handleDateChange} />
          </div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  )
}

export default CreateExercise
