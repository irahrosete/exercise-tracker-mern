import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
    axios
      .get('http://localhost:5000/users')
      .then((res) => {
        if (res.data.length > 0) {
          setUsers(res.data.map((user) => user.username))
        }
      })
      .catch((err) => console.log(err))
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

    axios
      .post('http://localhost:5000/exercises/add', newExercise)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
    // window.location = '/'
  }

  return (
    <>
      <h3 className='text-xl'>Create New Exercise</h3>
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
          <label htmlFor='description'>Description: </label>
          <input
            type='text'
            name='description'
            id='description'
            required
            value={exercise.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='duration'>Duration (in minutes): </label>
          <input
            type='text'
            name='duration'
            id='duration'
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
