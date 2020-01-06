import React from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';

const NotesList = (props) => {
  const { note } = props;
  const getFromNow = (ts) => {
    return `Last edited ${moment(ts).fromNow()}`
  }
  return (
    <Link to={`/edit/${note._id}`} className="list-item">
      <p className="list-item__title">
        {note.title.length <= 0 ? 'Unnamed note' : note.title}
      </p>
      <p className="list-item__subtitle">{getFromNow(note.updatedAt)}</p>
    </Link>
  )
}

export default NotesList;