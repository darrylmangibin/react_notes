import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNote, removeData, editData } from '../../actions/notes';
import { withRouter } from 'react-router-dom';

import Container from '../common/Container';
import Button from '../common/Button';
import Input from '../common/Input';
import TextArea from '../common/TextArea';

class EditFields extends Component {
  state = {
    title: '',
    body: ''
  }
  componentDidMount(){
    this.props.getNote(this.props.match.params.id, this.props.history)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps.note !== undefined) {
      this.setState({
        title: nextProps.note.title,
        body: nextProps.note.body,
      })
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitData = () => {
    const { title, body } = this.state;
    const newData = {
      title,
      body,
      updatedAt: Date.now()
    }
    this.props.editData(this.props.note._id, newData, this.props.history)
  }

  render() {
    const { removeData, history, match } = this.props
    return (
      <Container>
        <Input
          placeholder="Title"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <TextArea
          placeholder="Body"
          name="body"
          value={this.state.body}
          onChange={this.onChange}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            onClick={this.onSubmitData}
          >
            Save note
        </Button>
          <Button className="button--secondary"
            onClick={() => removeData(match.params.id, history)}
          >
            Remove Note
        </Button>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  note: state.notes.note
})

export default connect(mapStateToProps, {
  getNote,
  removeData,
  editData
})(withRouter(EditFields));