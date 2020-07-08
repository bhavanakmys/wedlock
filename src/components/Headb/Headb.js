import React,{Component} from 'react'
import {Navbar, NavbarBrand, Jumbotron, NavLink, NavItem,Nav, Button, NavbarText, Collapse, NavbarToggler} from 'reactstrap';
import {Media} from 'reactstrap';
import {Col} from 'reactstrap';
import './Headb.css';
import Login from './login';


 export class Headb extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            isNavOpen: false
             
        }

        this.toggleNav = this.toggleNav.bind(this);

    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        return(

            <div>
<Jumbotron className="text-center header">
    <h1 className="display-3"> WedLockZ</h1>
    <h3 className="dispaly-1">One Stop for Your Wedding Bells...!</h3>
</Jumbotron>

<Navbar dark className="navbar-background"  expand="md" sticky="top">
        
                      <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand  href='/' className="mr-auto" ><span></span></NavbarBrand>
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                           
                            <NavItem>
                            <NavLink href = "#"><Button color="dark">Event Halls</Button></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href = "#"><Button color="dark">Caterers</Button></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href = "#"><Button color="dark">Makeup Artist</Button></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href = "#"><Button color="dark">Decorations</Button></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href = "#"><Button color="dark">Musicians</Button></NavLink>
                            </NavItem>
                        
                             
                         </Nav>
                         <Nav className="ml-auto" navbar>
                            <NavItem>
                            <NavLink href="#" >
                                <Button color="dark"  >Login</Button>
                              
                                </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href = "#"><Button color="dark">Sign Up</Button></NavLink>
                            </NavItem>

                            </Nav>
                         
                       
                         
                            </Collapse>  
             </Navbar>


            </div>
        )
    }
    
}
export default Headb;