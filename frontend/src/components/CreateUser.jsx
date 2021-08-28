import React, { useState } from 'react'

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
    // window.location = '/'
  }

  return (
    <div>
      <h3>Create User</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username: </label>
          <input
            type='text'
            name='username'
            id='username'
            required
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateUser
