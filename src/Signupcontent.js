
import { Link } from 'react-router-dom';
import iconsignup from './Assets/icon-item.png'
import { Col, Row } from 'react-bootstrap';
const Signupcontent =() =>
{
    return(
        <>
         <h5 className="mt-4 ms-3" style={{ color: "#E36156" }}>
        SIGN UP NOW TO START YOUR FREE TRAIL
      </h5>
      <p
        className="my-3 ms-3"
        style={{
          color: "#162547",
          fontWeight: 400,
          fontSize: "17px",
          lineHeight: "1.4em",
          letterSpacing: "1px",
        }}
      >
        FieldGroove empowers you to manage every aspect of your
        <br />
        contracting business anytime, anywhere, and from any
        <br />
        device. Enjoy a free trail where you can experience
        <br />
        everything FieldGroove has to offer, including:
      </p>
      <Row className="mt-4">
      <Col sm={1} className="ps-4">
        <img src={iconsignup} alt="iconsignup"/>
      </Col>
      <Col sm={11} className="ps-1">
        <Link
          style={{
            color: "#162547",
            fontWeight: 600,
            fontSize: "15px",
            lineHeight: "1.4em",
            listStyleType: "none",
            letterSpacing: "0.05em",
            textDecoration:"none"
          }}
        >
          Managing the entire job cycle from lead creation to post-job
          reporting
        </Link>
      </Col>
    </Row>
    <Row className="my-2">
      <Col sm={1} className="ps-4">
        <img src={iconsignup} alt="iconsignup"/>
      </Col>
      <Col sm={11} className="ps-1">
        <Link
          style={{
            color: "#162547",
            fontWeight: 600,
            fontSize: "15px",
            lineHeight: "1.4em",
            listStyleType: "none",
            letterSpacing: "0.05em",
            textDecoration:"none"
          }}
        >
           Monitoring pipeline and backlog numbers, in real time
        </Link>
      </Col>
    </Row>
    <Row className="my-2">
      <Col sm={1} className="ps-4">
        <img src={iconsignup} alt="iconsignup"/>
      </Col>
      <Col sm={11} className="ps-1">
        <Link
          style={{
            color: "#162547",
            fontWeight: 600,
            fontSize: "15px",
            lineHeight: "1.4em",
            listStyleType: "none",
            letterSpacing: "0.05em",
            textDecoration:"none"
          }}
        >
        Building estimates for your prospects to review and accept <br />
        via email or on the job site
        </Link>
      </Col>
    </Row>
    <Row className="my-2">
      <Col sm={1} className="ps-4">
        <img src={iconsignup} alt="iconsignup"/>
      </Col>
      <Col sm={11} className="ps-1">
        <Link
          style={{
            color: "#162547",
            fontWeight: 600,
            fontSize: "15px",
            lineHeight: "1.4em",
            listStyleType: "none",
            letterSpacing: "0.05em",
            textDecoration:"none"
          }}
        >
        keeping close track of your team, equipment, inventory,and <br />
        jobs
        </Link>
      </Col>
    </Row>
    <Row className="my-2">
      <Col sm={1} className="ps-4">
        <img src={iconsignup} alt="iconsignup"/>
      </Col>
      <Col sm={11} className="ps-1">
        <Link
          style={{
            color: "#162547",
            fontWeight: 600,
            fontSize: "15px",
            lineHeight: "1.4em",
            listStyleType: "none",
            letterSpacing: "0.05em",
            textDecoration:"none"
          }}
        >
        Automating scheduling and dispatching
        </Link>
      </Col>
    </Row>
    <Row className="my-2">
      <Col sm={1} className="ps-4">
        <img src={iconsignup} alt="iconsignup"/>
      </Col>
      <Col sm={11} className="ps-1">
        <Link
          style={{
            color: "#162547",
            fontWeight: 600,
            fontSize: "15px",
            lineHeight: "1.4em",
            listStyleType: "none",
            letterSpacing: "0.05em",
            textDecoration:"none"
          }}
        >
        Preparing work orders and load tickets with one click
        </Link>
      </Col>
    </Row>

    
        </>
    )
}
export default Signupcontent;