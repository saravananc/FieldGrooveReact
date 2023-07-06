import { Container, Row,Col } from "react-bootstrap";

import footlogo from './Assets/logo-footer (1).jpg'
import { Link } from "react-router-dom";
const Footer1 =() =>{
    return(
        <>

         <div style={{backgroundColor:"#E3E9F4"}}>
         <ul className="nav justify-content-center align-items-center ">
            <li className="nav-item1">
                <Link to="/" className="nav-link nav1" >FEATURES</Link>
            </li>
            <li className="nav-item1">
                <Link to="/" className="nav-link nav1" >FAQS</Link>
            </li>
            <li className="nav-item1">
                <Link to="/"  className="nav-link nav1" >CONTACT US</Link>
            </li>
            <li className="nav-item1">
                <Link to="/"  className="nav-link nav1" >LOGIN</Link>
            </li>
            <li className="nav-item1">
                <Link to="/" className="nav-link nav1" >SIGN UP</Link>
            </li>
        </ul>


    </div>



       
         
         <Container className="p-5" fluid style={backgroundfooter}>
      <Row>
        <Col>
        <Container>
        <Row>
            <Col>
            <img src={footlogo} alt="footerlogo" />            
            </Col>
        </Row>
        </Container>
        <Container className="p-0">
        <div className="container mt-3">
      <div className="d-sm-flex justify-content-between ">
        <div className="">
          <p
            className="para"
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "13px",
              fontWeight: 400,
            }}
          >
            Copyright © FieldGroove,LLC 2023.All Rights Reserved.
          </p>
          <p
            className="para"
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "13px",
              fontWeight: 400,
            }}
          >
            716 Newman Springs Road, Suite 307 Lincroft, NJ 07738
          </p>
          <p className="para">
            <Link to="/" className="hoverline para">
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className="">
          <p
            className="para"
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "13px",
              fontWeight: 400,
            }}
          >
            We would love to show you the power of FieldGroove.To setup
          </p>
          <p
            className="para"
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "13px",
              fontWeight: 400,
            }}
          >
            a demo or get an account setup, please contact us at
          </p>
          <div className="para">
            <p
              style={{
                display: "inline-block",
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "13px",
                fontWeight: 400,
              }}
            >
              <Link to="/" className="hoverline" >
                sales@fieldgroove.com
              </Link>
            </p>
            <p
              style={{
                display: "inline-block",
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "13px",
                fontWeight: 400,
              }}
            >
              or by phone at
            </p>
            <p style={{ display: "inline-block" }}>
              <Link to="/" className="hoverline" > 
                212-537-0218
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
        </Container>

        
        </Col>
      </Row>
    </Container>
         
        </>
       
    )
    
}
export default Footer1;

const backgroundfooter =
{

backgroundColor: "#13254B"
};