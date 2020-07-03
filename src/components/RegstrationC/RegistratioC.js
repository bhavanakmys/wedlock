import React, { Component ,useState} from 'react'
import {Col,Row,Button, Form, FormGroup, Label, Input, FormText, Jumbotron, Container,Collapse} from 'reactstrap';

const RegistrationC=props=>{
    

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



    return(
        <div>
            <Container>
        <Jumbotron style={{marginTop:'60px',backgroundColor:'lavenderblush'}}>
      
            <h1 style={{fontFamily:'sanserif',textAlign:'center'}}>Registration Form</h1>
          
        <Form>
            <FormGroup row>
               
            <Label for="name" sm={2} style={{fontSize:'30px',fontFamily:'TimesRoman'}}>Name</Label>
            <Col sm={6}>
        <Input type="text" name="username" id="exampleName" placeholder="Enter Your Username" />
        </Col>
            </FormGroup>

            <FormGroup row>
               
               <Label for="name" sm={2} style={{fontSize:'30px',fontFamily:'TimesRoman'}}>Email</Label>
               <Col sm={6}>
           <Input type="password" name="username" id="exampleName" placeholder="Enter Your password" />
           </Col>
               </FormGroup>

               <FormGroup row>
               
               <Label for="name" sm={3} style={{fontSize:'30px',fontFamily:'TimesRoman'}}>New Password</Label>
               <Col sm={6}>
           <Input type="text" name="username" id="exampleName" placeholder="Enter Your UserId" />
           </Col>
               </FormGroup>

               <FormGroup row>
               
               <Label for="name" sm={3} style={{fontSize:'30px',fontFamily:'TimesRoman'}}>Confirm Password</Label>
               <Col sm={6}>
           <Input type="text" name="username" id="exampleName" placeholder="Enter Your UserId" />
           </Col>
               </FormGroup>

               <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-2" style={{fontSize:'30px',fontFamily:'TimesRoman'}}>User Type</legend>
       
        
          <FormGroup check>
            <Label check style={{fontSize:'20px'}} >
              <Input type="radio" name="radio2" />{' '}
           Customer
            </Label>
          </FormGroup>
        
         

       
          <FormGroup check>
            <Label check style={{fontSize:'20px'}}>
              <Input type="radio" name="radio2" onClick={toggle} />{' '}
          Retailer
            </Label>
            <Collapse isOpen={isOpen}>
            <FormGroup row>
        <Label for="exampleSelect" sm={2}  style={{fontSize:'30px',fontFamily:'TimesRoman'}}>Shop Type</Label>
        <Col sm={6}>
          <Input type="select" name="select" id="exampleSelect">
            <option style={{fontWeight:'5px',fontFamily:'San serif',fontSize:'20px'}}>Wedding halls</option>
            <option style={{fontWeight:'5px',fontFamily:'San serif',fontSize:'20px'}}>Decorator</option>
            <option style={{fontWeight:'5px',fontFamily:'San serif',fontSize:'20px'}}>Flourists</option>
            <option style={{fontWeight:'5px',fontFamily:'San serif',fontSize:'20px'}}>MakeUp Artist</option>
            <option style={{fontWeight:'5px',fontFamily:'San serif',fontSize:'20px'}}>Musicians</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
               
               <Label for="name" sm={3} style={{fontSize:'30px',fontFamily:'TimesRoman'}}>Address</Label>
               <Col sm={6}>
           <Input type="text" name="username" id="exampleName" placeholder="Enter Your Shop's Address" />
           </Col>
               </FormGroup>

               <FormGroup row>
               
               <Label for="name" sm={3} style={{fontSize:'30px',fontFamily:'TimesRoman'}}>Contact No</Label>
               <Col sm={6}>
           <Input type="text" name="username" id="exampleName" placeholder="Enter Your Contact Number" />
           </Col>
               </FormGroup>


            </Collapse>
            </FormGroup>
       
        
         </FormGroup>

         <Button color="info">Sign Up</Button>

        </Form>

        
         
        </Jumbotron>
        </Container>
        </div>
    )
    

}

export default RegistrationC;