import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addData } from '../../actions/notes';
import { withRouter } from 'react-router-dom';

import Input from '../common/Input';
import Container from '../common/Container';
import TextArea from '../common/TextArea';
import Button from '../common/Button';

class CreateFields extends Component {
  state = {
    title: '',
    body: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    const { title, body } = this.state;
    const newData = {
      title,
      body
    }
    this.props.addData(newData, this.props.history)
  }

  render() {
    return (
      <Container>
        <Input
          placeholder="Title"
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <TextArea
          placeholder="Body"
          name="body"
          value={this.state.body}
          onChange={this.onChange}
        />
        <Button
          onClick={this.onSubmit}
        >
          Save note
      </Button>
      </Container>
    )
  }
}

export default connect(null, {
  addData
})(withRouter(CreateFields));