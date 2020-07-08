import React, {Component, useState} from 'react'
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
    Container,
    Collapse
} from 'reactstrap';
import './R.css'

const RegistrationC = props => {

    const [isOpen,
        setIsOpen] = useState(false);

    const rtoggle = () => setIsOpen(true);
    const ctoggle = () => setIsOpen(false)

    return (
        <div>
            <Container className="fcontainer">

                <h1 >Registration Form</h1>

                <Form>
                    <FormGroup row>

                        <Label for="name" className="label" sm={2}>Name</Label>
                        <Col sm={6}>
                            <Input
                                type="text"
                                name="username"
                                id="exampleName"
                                placeholder="Enter Your Username"/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>

                        <Label for="name" className="label" sm={2}>Email</Label>
                        <Col sm={6}>
                            <Input
                                type="password"
                                name="username"
                                id="exampleName"
                                placeholder="Enter Your password"/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>

                        <Label for="name" sm={2} className="label">Password</Label>
                        <Col sm={6}>
                            <Input
                                type="text"
                                name="username"
                                id="exampleName"
                                placeholder="Enter Your Password"/>
                        </Col>
                    </FormGroup>

                    <FormGroup check row>
                        <Label sm={2} className="label shift">User Type</Label>
                        <Label check className="label">
                            <Col sm={6}>
                                <Input type="radio" name="radio2" onClick={ctoggle}/>

                                Customer
                            </Col>
                        </Label>
                        <Label className="label">
                            <Col sm={10}>
                                <Input type="radio" name="radio2" onClick={rtoggle}/>

                                Retailer
                            </Col>
                        </Label>
                        <Collapse isOpen={isOpen}>

                            <FormGroup row>
                                <Label
                                    sm="3"
                                    md={{
                                    offset: 2
                                }}className="label">Shop Type</Label>
                                <Col
                                    sm="4"
                                    md={{
                                    size: 4,
                                    offset: 1
                                }}>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option className="option">Wedding halls</option>
                                        <option className="option">Decorator</option>
                                        <option className="option">Flourists</option>
                                        <option className="option">MakeUp Artist</option>
                                        <option className="option">Musicians</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>

                                <Label
                                    for="name"
                                    sm={3}
                                    md={{
                                    offset: 2
                                }}
                                    className="label">Address</Label>
                                <Col
                                    sm={4}
                                    md={{
                                    size: 4,
                                    offset: 1
                                }}>
                                    <Input
                                        type="text"
                                        name="username"
                                        id="exampleName"
                                        placeholder="Enter Your Shop's Address"/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>

                                <Label
                                    for="name"
                                    sm={3}
                                    md={{
                                    offset: 2
                                }}
                                    className="label">Contact No</Label>
                                <Col
                                    sm={4}
                                    md={{
                                    size: 4,
                                    offset: 1
                                }}>
                                    <Input
                                        type="text"
                                        name="username"
                                        id="exampleName"
                                        placeholder="Enter Your Contact Number"/>
                                </Col>
                            </FormGroup>

                        </Collapse>

                    </FormGroup>

                    <Col
                        sm={{
                        size: 10,
                        offset: 5
                    }}>
                        <Button color="info" className="button">Sign Up</Button>
                    </Col>

                </Form>

            </Container>
        </div>
    )

}

export default RegistrationC;