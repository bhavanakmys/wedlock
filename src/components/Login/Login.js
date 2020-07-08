import React, {Component} from 'react'
import {
    Col,
    Row,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Jumbotron,
    Container
} from 'reactstrap';
import './Login.css'

const Login = props => {

    return (
        <div>
            <Container className="fcontainer">

                <h1 >Login Form</h1>

                <Form>
                    
                    <FormGroup row>

                        <Label for="name" sm={2}>Email</Label>
                        <Col sm={6}>
                            <Input
                                type="text"
                                name="username"
                                id="exampleName"
                                placeholder="Enter Your Email"/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>

                        <Label for="name" sm={2}>Password</Label>
                        <Col sm={6}>
                            <Input
                                type="password"
                                name="username"
                                id="exampleName"
                                placeholder="Enter Your password"/>
                        </Col>
                    </FormGroup>

                    <div className="row justify-content-center">
                        <div className="col-4">
                            <Button color="info">Login</Button>
                        </div>
                    </div>
                </Form>

            </Container>
        </div>
    )

}

export default Login;