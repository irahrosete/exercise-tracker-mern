import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='text-gray-800'>
      <Link to='/' className='text-3xl font-body'>
        Exercise Tracker
      </Link>
      <div>
        <ul>
          <li>
            <Link to='/' className='uppercase'>
              Exercises
            </Link>
          </li>
          <li>
            <Link to='/create' className='uppercase'>
              Create Exercise
            </Link>
          </li>
          <li>
            <Link to='/user' className='uppercase'>
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
