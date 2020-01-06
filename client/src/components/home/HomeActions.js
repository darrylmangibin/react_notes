import React from 'react';

import Container from '../common/Container';
import Actions from '../common/Actions';

const HomeActions = () => {
  return (
    <Actions>
      <Container className="actions__container">
        <input 
          type="text" 
          className="input" 
          placeholder="Filter notes"
        />
        <select id="filter-by" className="dropdown">
          <option value="byEdited">Sort by last edited</option>
          <option value="byCreated">Sort by recently created</option>
          <option value="alphabetical">Sort alphabetically</option>
        </select>
      </Container>
    </Actions>
  )
}

export default HomeActions;