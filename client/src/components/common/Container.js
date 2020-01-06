import React from 'react';

const Container = (props) => {
  return (
    <div className={props.className ? `container ${props.className}` : 'container'}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

export default Container;