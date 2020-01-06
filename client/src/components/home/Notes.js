import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from '../common/Container';
import Button from '../common/Button';
import NotesList from './NotesList';

const Notes = (props) => {
  const { loading, notes } = props;
  const renderLoading = () => {
    return (
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <p className="empty-message">Loading</p>
      </div>
    )
  }
  return (
    <Container>
      {
        loading 
          ? renderLoading() 
          : (
            <Fragment>
              {
                notes.length <= 0
                  ? (<p className="empty-message">No notes to show</p>)
                  : notes.map(note => (
                    <NotesList 
                      key={note._id}
                      note={note}
                    />
                  ))
              }
              <Button
                onClick={() => props.history.push('/create')}
              >
                Create Note
              </Button>
            </Fragment>
          )
      }
    </Container>
  )
}

const mapStateToProps = state => ({
  loading: state.notes.loading,
  notes: state.notes.notes
})

export default connect(mapStateToProps)(withRouter(Notes));