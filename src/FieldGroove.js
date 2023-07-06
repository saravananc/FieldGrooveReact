
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import headlogo from './Assets/fg_logo.png'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const FieldGroove=()=>{

  const [isSwapped, setIsSwapped] = useState(false);

  const handleButtonClick = () => {
    setIsSwapped(!isSwapped);
  };
return(
    <>
    
    <Navbar bg="light"expand="lg" className='mt-4'  >
      <Container>
        <Navbar.Brand href="/">
            <img className='firstlogo' src={headlogo} alt="headerlogo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"  >
            <Nav.Link  href="" >HOME</Nav.Link>            
            <NavDropdown title="INDUSTRIES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  href="#">FAQS</Nav.Link>
          <Nav.Link  href="#">CONTACT US</Nav.Link>
          {/* <Link to= "/signup" className='nav-link'>SIGN UP</Link>
         
          <Link to ="/" className='lbutton' >LOGIN</Link> */}
          <Link to={isSwapped  ? '/' : '/signup'} className="nav-link" onClick={handleButtonClick}>
        {isSwapped ? 'LOGIN' : 'SIGN UP'}
      </Link>
      <Link to={isSwapped ? '/signup' : '/'} className="lbutton">
        {isSwapped ? 'SIGN UP' : 'LOGIN'}
      </Link>
     
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
<Container>


</Container>

     </>
)
}
export default FieldGroove;