import React, { Component } from 'react';
import CreateForm from '../components/CreateForm';
import PizzaService from '../services/PizzaService';

class NewPizza extends Component {

  handleSubmit = (data) => {
    PizzaService.createPizza(data)
      .then((result) => {
        console.log(result);
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <p>Create form</p>
        <CreateForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default NewPizza;