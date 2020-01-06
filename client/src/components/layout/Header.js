import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import Container from '../common/Container';
import Nav from './Nav';

const Header = (props) => {
  console.log(props)
  return (
    <Fragment>
      <header className="header">
        <Container>
          <h1 className="header__title">React Crud App</h1>
          <h2 className="header__subtitle">Take notes and never forget</h2>
        </Container>
      </header>
      <Nav />
    </Fragment>
  )
}

export default withRouter(Header);