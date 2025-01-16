import React from 'react'

export default function Input(props) {
  return (
    <div className="flex items-center mb-2">
      <label htmlFor={props.input.id} className="font-bold mr-4">{props.label}</label>
      <input {...props.input} className="w-12 rounded border border-gray-300 font-inherit pl-2"  />
    </div>
  )
}
