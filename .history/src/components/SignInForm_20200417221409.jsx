import React from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';


const SignInForm =() =>{
  return (
    <Container className="App">
    <h2>Sign In</h2>
    <Form className="form">
    <Col lg='3'><//
      <Col lg='3'>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="myemail@email.com"
          />
        </FormGroup>
      </Col>
      <Col lg='3'>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
          />
        </FormGroup>
      </Col>
      <Button>Submit</Button>
    </Form>
  </Container>
  )
}


export default  SignInForm;