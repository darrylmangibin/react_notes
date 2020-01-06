import React from 'react';

const TextArea = (props) => {
  return (
    <textarea 
      className={props.className ? `body-input ${props.className}` : 'body-input'}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      placeholder={props.placeholder}
    />
  )
}

export default TextArea;