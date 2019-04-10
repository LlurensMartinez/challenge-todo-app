import React, { Component } from 'react';

class CreateForm extends Component {

  state = {
    title: '',
    body: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      title: '',
      body: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.title} onChange={this.handleChange} placeholder="title" name="title" type="text"/>
        <input value={this.state.body} onChange={this.handleChange} placeholder="body" name="body" type="text"/>
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default CreateForm;