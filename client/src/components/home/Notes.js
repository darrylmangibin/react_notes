import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from '../common/Container';
import Button from '../common/Button';
import NotesList from './NotesList';

const Notes = (props) => {
  const { loading, notes, filterText, sortBy } = props;
  console.log(sortBy)
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
                  )).filter(list => {
                    const filtered = list.props.note.title.toLowerCase().includes(filterText.toLowerCase());
                    return filtered
                  }).sort((a, b) => {
                    if (sortBy === 'byEdited') {
                      return a.props.note.updatedAt > b.props.note.updatedAt ? -1 : 1
                    } else if (sortBy === 'byCreated') {
                      return a.props.note.createdAt > b.props.note.createdAt ? -1 : 1
                    } else if (sortBy === 'alphabetical') {
                      return a.props.note.title.toLowerCase() < b.props.note.title.toLowerCase() ? -1 : 1
                    }
                  })
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
  notes: state.notes.notes,
  filterText: state.filter.filterText,
  sortBy: state.filter.sortBy
})

export default connect(mapStateToProps)(withRouter(Notes));