import React from 'react';
import { Provider } from 'react-redux';

const Root = (props) => {
  return (
    <Provider>
      {props.children}
    </Provider>
  )
}

export default Root;