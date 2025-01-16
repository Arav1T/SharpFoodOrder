import React from 'react'

export default function Card({children}) {
  return (
    <div className='p-4 shadow-md rounded-lg bg-white'>
      {children}
    </div>
  )
}
