import React from 'react';

const Actions = (props) => {
  return (
    <div className={props.className ? `actions ${props.className}` : 'actions'}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

export default Actions