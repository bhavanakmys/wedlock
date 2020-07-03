import React, { Component } from 'react'
import {Col,Row,Button, Form, FormGroup, Label, Input, FormText, Jumbotron, Container} from 'reactstrap';

const Login=props=>{
    
    return(
        <div>
            <Container>
        <Jumbotron style={{marginTop:'60px',backgroundColor:'lavenderblush'}}>
      
            <h1 style={{fontFamily:'sanserif',textAlign:'center'}}>Login Form</h1>
          
        <Form>
            <FormGroup row>
               
            <Label for="name" sm={2} style={{fontSize:'30px',fontFamily:'TimesRoman'}}>Username</Label>
            <Col sm={6}>
        <Input type="text" name="username" id="exampleName" placeholder="Enter Your Username" />
        </Col>
            </FormGroup>

            <FormGroup row>
               
               <Label for="name" sm={2} style={{fontSize:'30px',fontFamily:'TimesRoman'}}>Password</Label>
               <Col sm={6}>
           <Input type="password" name="username" id="exampleName" placeholder="Enter Your password" />
           </Col>
               </FormGroup>

               <FormGroup row>
               
               <Label for="name" sm={2} style={{fontSize:'30px',fontFamily:'TimesRoman'}}>UserId</Label>
               <Col sm={6}>
           <Input type="text" name="username" id="exampleName" placeholder="Enter Your UserId" />
           </Col>
               </FormGroup>

               <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-2" style={{fontSize:'30px',fontFamily:'TimesRoman'}}>User Type</legend>
        <Row form>
        <Col sm={6}>
          <FormGroup check>
            <Label check style={{fontSize:'20px'}} >
              <Input type="radio" name="radio2" />{' '}
           Customer
            </Label>
          </FormGroup>
          </Col>
         

        <Col sm={6}>
          <FormGroup check>
            <Label check style={{fontSize:'20px'}}>
              <Input type="radio" name="radio2" />{' '}
          Retailer
            </Label>
            </FormGroup>
         </Col>
         </Row>
         </FormGroup>

         <Button color="info">Login</Button>
        </Form>

        
         
        </Jumbotron>
        </Container>
        </div>
    )
    

}

export default Login;