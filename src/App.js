import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Container fluid className="container">
        <Header as='h2'>My beautiful plants &#60;3</Header>
        <Form className="form">
          <Form.Field>
            <label>Scientific Name</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label>Popular Name</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label>Bright light</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label>Watering</label>
            <input />
          </Form.Field>

          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}