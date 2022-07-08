import React from 'react';
import {Container, Row, Col, Card, Form, InputGroup, Button, Spinner} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
const axios = require('axios').default;

const Subscription = () => {
    const {
      register, 
      handleSubmit,
      formState: { isDirty, isSubmitting, isSubmitSuccessful }
    } = useForm();
    const validEmailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const onSubmit = ({name, email}) => {
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_SERVER}/newUser`,
        data: {
          name: name,
          email: email
        }
      }).then(r => console.log("success"));
    };
    return (
      <>
        <Container as="header" className="mb-5">
            <Row>
                <Col>
                    <h2 className="text-center">Sign up for the whitelist</h2>
                </Col>
            </Row>
        </Container >
        <Container className='bg-hl-primary'>
            <Row className="d-flex flex-row align-items-center">
              <Col lg="8" className="mx-auto">
                <Card className="rounded-lg">
                    <Card.Body className="bg-hl-primary p-4 p-lg-5 rounded-lg">
                      <Form onSubmit={handleSubmit(onSubmit)}>
                          <Row className="items-align-center justify-content-center gy-3">
                            <Col lg="7">
                                <InputGroup className="shadow-sm bg-body rounded align-items-center mb-2">
                                  <i className="text-primary las la-user-circle mx-2"></i>
                                  
                                  <Form.Control className="border-0 bg-none shadow-0" type="text" autoComplete="off" placeholder="Whats your name..." {...register("name", { required: true })} />
                                </InputGroup>
                                <InputGroup className="shadow-sm bg-body rounded align-items-center">
                                  <i className="text-primary las la-envelope mx-2"></i>
                                  <Form.Control className="border-0 bg-none shadow-0" type="email" autoComplete="off" placeholder="Enter your email address..." {...register("email", {required: true, pattern: validEmailRegex})} />
                                </InputGroup>
                            </Col>
                            <Col lg="5" className="align-self-end">
                                {
                                  isDirty ? <Button type="submit" className="btn-gradient-primary" style={{width: "100%"}}>{ isSubmitting ? <Spinner animation="border" variant="light" /> : isSubmitSuccessful ? "Success" : "Sign Up" }</Button> : <Button type="submit" className="btn-gradient-primary" style={{width: "100%", height: "100%"}} disabled>Sign Up</Button>
                                }
                            </Col>
                          </Row>
                      </Form>
                    </Card.Body>
                </Card>
              </Col>          
            </Row>
        </Container>
    </>
    )
  }

export  default Subscription;