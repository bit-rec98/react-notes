import React from 'react'

const Button = ({color, texto}) => {
  return (
    <button className={`btn btn-${color} mx-1`}>{texto}</button>
  )
}

export default Button