import React from 'react';
import { Link } from 'react-router-dom';

import Actions from '../common/Actions';
import Container from '../common/Container';

const Nav = () => {
  return (
    <Actions>
      <Container className="actions__container actions__container--spaced">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Container>
    </Actions>
  )
}

export default Nav