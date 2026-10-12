import React from 'react'

const Button = ({ onClick, children, type="button", add, ghost, danger }) => {
  return (
    <button className='bg-indigo-600 text-white p-2 rounded-md hover:bg-blue-600 flex items-center gap-2 px-4'
        onClick={onClick}
        type={type}>
        {children} Button
    </button>
  )
}

export default Button