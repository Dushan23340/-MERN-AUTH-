import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='flex w-full max-w-5xl bg-white rounded-lg shadow-lg'>
        {/* Left side div */}
        <div className='w-1/2 p-8 flex flex-col items-center bg-gray-200'>
          <img src="src/assets/images/logo.png" alt="Logo" className="h-45 w-auto" />
          <p className="text-center text-lg font-bold text-gray-700 mt-8">
            JOIN US TO GET PURIFIED WATER DELIVERED TO YOUR DOORSTEP AND ENJOY YOUR FAVORITE WATER.
          </p>
        </div>

        {/* Right side form div */}
        <div className='w-1/2 p-8 flex flex-col justify-center pl-10'>
          <h1 className='text-3xl text-center font-semibold mb-8 font-serif'>Sign Up</h1>
          <form className='flex flex-col gap-4'>
            <input
              type='text'
              placeholder='Username'
              id='username'
              className='bg-gray-100 p-3 rounded-lg border border-gray-300'
            />
            <input
              type='email'
              placeholder='Email'
              id='email'
              className='bg-gray-100 p-3 rounded-lg border border-gray-300'
            />
            <input
              type='password'
              placeholder='Password'
              id='password'
              className='bg-gray-100 p-3 rounded-lg border border-gray-300'
            />
            <input
              type='password'
              placeholder='Re-enter Password'
              id='re-enter-password'
              className='bg-gray-100 p-3 rounded-lg border border-gray-300'
            />
            <button
              type='submit'
              className='bg-gradient-to-r from-[#4778F5] to-[#0056D2] text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
            >
              Sign up
            </button>
          </form>
          <div className='flex justify-center gap-2 mt-6'>
            <p>Have an account?</p>
            <Link to='/sign-in'>
              <span className='text-blue-500 cursor-pointer'>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
