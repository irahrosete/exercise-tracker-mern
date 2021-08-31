import React, { useState } from 'react'
import axios from 'axios'

const CreateUser = () => {
  const [username, setUsername] = useState('')

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = { username }
    setUsername('')
    console.log(newUser)

    axios
      .post('http://localhost:5000/users/add', newUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <h3 className='text-xl'>Create User</h3>
      <form className='mt-3' onSubmit={handleSubmit}>
        <div>
          <label className='block' htmlFor='username'>
            Username:{' '}
          </label>
          <input
            className='rounded'
            type='text'
            name='username'
            id='username'
            required
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className='btn'>Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateUser
