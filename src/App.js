import React, { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scientificName: '',
      popularName: '',
      brightLight: '',
      watering: ''
    }
  }

  changeHandler = (e) => { this.setState({ [e.target.name]: e.target.value }) }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { scientificName, popularName, brightLight, watering } = this.state;
    return (
      <Container fluid className="container">
        <Header as='h2'>My beautiful plants &#60;3</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Scientific Name</label>
            <input type="text" name="scientificName" value={scientificName} onChange={this.changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Popular Name</label>
            <input type="text" name="popularName" value={popularName} onChange={this.changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Bright Light</label>
            <input type="text" name="brightLight" value={brightLight} onChange={this.changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Watering</label>
            <input type="text" name="watering" value={watering} onChange={this.changeHandler} />
          </Form.Field>

          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}