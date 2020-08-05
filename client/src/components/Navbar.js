import React, { Component } from 'react'; 
import {
    Collapse,
    Navbar as ReactNavbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';


 class Navbar extends Component {
     state = {
         isOpen: false
     } 
     
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return(
             <div>
            <ReactNavbar color="dark" dark expand="sm">
                    <NavbarBrand href=""> Google Books </NavbarBrand>
                    {/* <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar/> */}
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink href='/'>
                                Search
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/saved">Saved</NavLink>
                        </NavItem>
                    </Nav>
                    
            </ReactNavbar>
        </div>  
        )
    }
}

export default Navbar