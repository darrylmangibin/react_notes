import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterData, sortData } from '../../actions/filter';

import Container from '../common/Container';
import Actions from '../common/Actions';

class HomeActions extends Component {
  state = {
    filterText: '',
    sortBy: ''
  }

  onChangeFilterText = e => {
    this.setState({
      filterText: e.target.value
    }, () => {
      this.props.filterData(this.state.filterText)
    })
  }

  onChangeSortBy = e => {
    this.setState({
      sortBy: e.target.value
    }, () => {
      this.props.sortData(this.state.sortBy)
    })
  }

  render() {
    return (
      <Actions>
        <Container className="actions__container">
          <input
            type="text"
            className="input"
            placeholder="Filter notes"
            value={this.state.filterText}
            onChange={this.onChangeFilterText}
          />
          <select id="filter-by" className="dropdown"
            value={this.state.sortBy}
            onChange={this.onChangeSortBy}
          >
            <option value="byEdited">Sort by last edited</option>
            <option value="byCreated">Sort by recently created</option>
            <option value="alphabetical">Sort alphabetically</option>
          </select>
        </Container>
      </Actions>
    )
  }
}

export default connect(null, {
  filterData,
  sortData
})(HomeActions);