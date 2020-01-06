import React from 'react';
import { withRouter } from 'react-router-dom';

import Container from '../common/Container';
import Button from '../common/Button';
import NotesList from './NotesList';

const Notes = (props) => {
  console.log(props)
  return (
    <Container>
      <p className="empty-message">No notes to show</p>
      <NotesList />
      <Button
        onClick={() => props.history.push('/create')}
      >
        Create Note
      </Button>
    </Container>
  )
}

export default withRouter(Notes);