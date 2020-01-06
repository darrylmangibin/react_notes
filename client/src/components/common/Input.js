import React from 'react';

const Input = (props) => {
  return (
    <input 
      className={props.className ? `title-input ${props.className}` : 'title-input'}
      style={props.style}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      placeholder={props.placeholder}
    />
  )
}

export default Input;