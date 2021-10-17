import React from 'react'

interface InputInterface {
  name: string,
  label: string,
  type: string
}

export const TextField = (props: InputInterface) => {
  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <input name={props.name} type={props.type}/>
    </div>
  )
}