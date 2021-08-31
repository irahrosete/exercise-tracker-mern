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
              <svg
                className='inline-block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
              Exercises
            </Link>
          </li>
          <li>
            <Link to='/create' className='uppercase'>
              <svg
                className='inline-block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              Create Exercise
            </Link>
          </li>
          <li>
            <Link to='/user' className='uppercase'>
              <svg
                className='inline-block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
                />
              </svg>
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
