
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import iconsignup from './Assets/icon-item.png'
import bgimage from './Assets/bg.png.png';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import{ yupResolver } from "@hookform/resolvers/yup";

const schema =yup.object().shape({
  Firstname:yup.string().required(),
  Lastname:yup.string().required(),
  Companyname:yup.string().required(),
  Phone:yup.string().required().matches(/^\d{10}$/,'Phone number must be in 10 digits numbers.'),
  Email:yup.string().required().email('Please enter valid email.'),
  Password:yup.string().required().min(4,'Min 4 chars.').max(10,'Max 10 chars.'),
  Passwordagain:yup.string().oneOf([yup.ref('Password'), null], 'Passwords must match.').required(),
  Timezone:yup.string().required(),
  Streetaddress1:yup.string().required(),
  Streetaddress2:yup.string().required(),
  City:yup.string().required(),
  State:yup.string().required(),  
  Zipcode:yup.string().required().matches(/^\d{6}$/,'Zip code must be in 6 digits numbers.'),

});


const SignUp =()=>
{
  const {
    register,
    handleSubmit,
    formState: { errors,isValid,isDirty }
  } = useForm({
    resolver: yupResolver(schema),
    mode:'onChange'
  });

  const onSubmit = (data) => {
    console.log(data);
  };
    const [showSecondHalf, setShowSecondHalf] = useState(false);

  const handleNextClick = (e) => {
    e.preventDefault();
    console.log("Next button clicked");
    setShowSecondHalf(true);
  };

  const handlePreviousClick = (e) => {
    e.preventDefault();
    setShowSecondHalf(false);
  };
    return(
        <>
<Container fluid style={{ backgroundImage:`url(${bgimage})`,backgroundRepeat:"no-repeat",backgroundPositionY:"150px"}}>

<div className="mt-5 text-center">
      <h1 style={{ color: "#4958AF", fontWeight: 300, fontSize: "50px" }}>
        Try FieldGroove Free for 7 Days!
      </h1>
    </div>
<Container className="mt-5"  >
    <Row className="justify-content-center">
       
        <Col sm={4} className="box arrow-right" style={bgsignin} >
        <Card className="pb-4 ms-2 me-2"  style={bgsignup} >
      <Card.Body>
      <Form onSubmit={handleSubmit(onSubmit)}>
      {!showSecondHalf && (
      <div id="first-half">
      <Link style={{color:"white", fontSize:"20px"}}>Account Info</Link>
       
        <Form.Group className="mb-3 mt-3" style={{ color:"white", fontSize:"17px" }} controlId="formtextFirstName">
        <Form.Label >First Name*</Form.Label>
        <Form.Control {...register('Firstname')} style={{ borderRadius:"0"}} type="text"  />
         <div className="mt-1" >
         {errors.Firstname && <span style ={{color:"red"}}>{errors.Firstname.message}</span>}
         </div>
      </Form.Group>
      <Form.Group className="mb-3 mt-3" style={{ color:"white", fontSize:"17px" }} controlId="formtextLastName">
        <Form.Label >Last Name*</Form.Label>
        <Form.Control {...register('Lastname')} style={{ borderRadius:"0"}} type="text"  />
        <div className="mt-1" >
         {errors.Lastname && <span style ={{color:"red"}}>{errors.Lastname.message}</span>}
         </div>
      </Form.Group>
      <Form.Group className="mb-3 mt-3" style={{ color:"white", fontSize:"17px" }} controlId="formtextCompanyName">
        <Form.Label >Company Name*</Form.Label>
        <Form.Control {...register('Companyname')} style={{ borderRadius:"0"}} type="text"  />
        <div className="mt-1" >
         {errors.Companyname && <span style ={{color:"red"}}>{errors.Companyname.message}</span>}
         </div>
      </Form.Group>
      <Form.Group className="mb-3 mt-3" style={{ color:"white", fontSize:"17px" }} controlId="formtextPhone">
        <Form.Label >Phone*</Form.Label>
        <Form.Control {...register('Phone')} style={{ borderRadius:"0"}} type="text"  />
        <div className="mt-1" >
         {errors.Phone && <span style ={{color:"red"}}>{errors.Phone.message}</span>}
         </div>
      </Form.Group>
        <Form.Group className="mb-3 mt-3" style={{ color:"white", fontSize:"17px" }} controlId="formtextemail">
        <Form.Label >Email*</Form.Label>
        <Form.Control {...register('Email')} style={{ borderRadius:"0"}} type="text"  />
        <div className="mt-1" >
         {errors.Email && <span style ={{color:"red"}}>{errors.Email.message}</span>}
         </div>
      </Form.Group>
      <Form.Group className="mb-3" style={{ color:"white", fontSize:"17px" }} controlId="formtextPassword">
        <Form.Label>Password*</Form.Label>
        <Form.Control {...register('Password')} style={{ borderRadius:"0"}} type="text"  />
        <div className="mt-1" >
         {errors.Password && <span style ={{color:"red"}}>{errors.Password.message}</span>}
         </div>
      </Form.Group>
      <Form.Group className="mb-3 mt-3" style={{ color:"white", fontSize:"17px" }} controlId="formtextPasswordAgain">
        <Form.Label >Password Again*</Form.Label>
        <Form.Control {...register('Passwordagain')} style={{ borderRadius:"0"}} type="text"  />
        <div className="mt-1" >
         {errors.Passwordagain && <span style ={{color:"red"}}>{errors.Passwordagain.message}</span>}
         </div>
      </Form.Group>
   
<Form.Group className="mb-3 mt-3" style={{ color: "white", fontSize: "17px" }} controlId="formtextTimeZone">
    <Form.Label>Time Zone*</Form.Label>
    <Form.Select {...register('Timezone')} style={{ borderRadius: "0" }} >        
        <option value="C S T">Central Standard Time</option>
        <option value="I S T">Indian Standard Time</option>
        <option value="P T">Pacific Time</option>
    </Form.Select>
    <div className="mt-1" >
         {errors.Timezone && <span style ={{color:"red"}}>{errors.Timezone.message}</span>}
         </div>
</Form.Group>       
      <div className="d-flex flex-column flex-sm-row">
  <Button id="nextbutton" type="submit" className="ms-auto mt-2 " style={{color: 'white', backgroundColor: '#E36156', width: '145px', height: '45px', borderRadius: '4px', fontSize: '15px', padding: '10px', borderColor:'#E36156'}} onClick={handleNextClick}>
    Next 
  </Button>
</div>
</div>
      )}
      {showSecondHalf && (
<div id="second-half"  >
<Link style={{color:"white", fontSize:"20px"}}>Office Address</Link>
       
       <Form.Group className="mb-3 mt-3" style={{ color:"white", fontSize:"17px" }} controlId="formtextStreetAddress1">
       <Form.Label >Street Address1*</Form.Label> 
       <Form.Control {...register('Streetaddress1')} style={{ borderRadius:"0"}} type="text"  />
        <div className="mt-1" >
         {errors.Streetaddress1 && <span style ={{color:"red"}}>{errors.Streetaddress1.message}</span>}
         </div>
     </Form.Group>
     <Form.Group className="mb-3 mt-3" style={{ color:"white", fontSize:"17px" }} controlId="formtextStreetAddress2">
       <Form.Label >Street Address2*</Form.Label>
       <Form.Control {...register('Streetaddress2')} style={{ borderRadius:"0"}} type="text"  />
        <div className="mt-1" >
         {errors.Streetaddress2 && <span style ={{color:"red"}}>{errors.Streetaddress2.message}</span>}
         </div>
     </Form.Group>
     <Form.Group className="mb-3 mt-3" style={{ color:"white", fontSize:"17px" }} controlId="formtextCity">
       <Form.Label >City*</Form.Label>
       <Form.Control {...register('City')} style={{ borderRadius:"0"}} type="text"  />
        <div className="mt-1" >
         {errors.City && <span style ={{color:"red"}}>{errors.City.message}</span>}
         </div>
     </Form.Group>
     <Form.Group className="mb-3 mt-3" style={{ color:"white", fontSize:"17px" }} controlId="formtextState">
       <Form.Label >State*</Form.Label>
       <Form.Control {...register('State')} style={{ borderRadius:"0"}} type="text"  />
        <div className="mt-1" >
         {errors.State && <span style ={{color:"red"}}>{errors.State.message}</span>}
         </div>
     </Form.Group>
       <Form.Group className="mb-3 mt-3" style={{ color:"white", fontSize:"17px" }} controlId="formtextZipCode">
       <Form.Label >ZipCode*</Form.Label>
       <Form.Control {...register('Zipcode')} style={{ borderRadius:"0"}} type="text"  />
        <div className="mt-1" >
         {errors.Zipcode && <span style ={{color:"red"}}>{errors.Zipcode.message}</span>}
         </div>
     </Form.Group>
     <div className="d-flex flex-column flex-sm-row">
  <Button id="previousbutton" className="mx-auto mt-2" style={{backgroundColor:"transparent", width: '145px', height: '45px', fontSize: '15px', padding: '10px', color: '#8B92A0', borderRadius: '4px', borderColor: 'rgba(255, 255, 255, 0.1)'}} onClick={handlePreviousClick}>Back</Button>
  <Button type="submit" disabled={isDirty&& !isValid} className="mx-auto mt-2" style={{color: 'white', backgroundColor: '#E36156', width: '145px', height: '45px', borderRadius: '4px', fontSize: '15px', padding: '10px', borderColor:'#E36156'}}>
    Sign Up
  </Button>
</div>
    </div>
      )}
    </Form>
       
    </Card.Body>
    </Card>
        </Col>
        <Col sm={6}>
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
        </Col>
       
    </Row>
</Container>
<div className="text-center margin">
      <p className="fsize" style={{ color: "#2E59B0" }}>
        Frequently Asked Questions
      </p>
    </div>
<Container >
    <Row className="justify-content-center"  >
  
  <Col sm ={5} >
    <h6 style={{color: "#2E59B0", fontSize: "18px"}}> Will my card on file be charged?</h6>
    <p style={{color: "#162547"}}>
      We don't charge anything at all before or during the trail <br />
      period. The card on file is simply so we know you're a <br />
      person, not a robot.
    </p>
    <hr style={{color: "cadetblue"}} />
    <h6 style={{color: "#2E59B0", fontSize: "18px"}}> How long is my trail?</h6>
    <p style={{color: "#162547"}}>
      The free trail is for 7 days.
    </p>
    <hr style={{color: "cadetblue"}} />
    <h6 className="mt-5" style={{color: "#2E59B0", fontSize: "18px"}}>
      Do you have customer representatives to answer <br />
      questions during my trail?
    </h6>
    <p style={{color: "#162547"}}>
      We have several resources (documents and videos) for <br />
      training. The portal has a button you can click to send <br />
      questions, and you will be assigned a personal point of<br />
      contact who will be availabe to assist as needed.
    </p>
  </Col>
  <Col sm ={5} >
    <h6 style={{color: "#2E59B0", fontSize: "18px"}}>Can I cancel my free trail at any time?</h6>
    <p style={{color: "#162547"}}>
      Absolutely. All we ask is that you give FieldGroove a shot, <br />
      because it is rare that we can't improve your business!
    </p>
    <hr style={{color: "cadetblue"}} />
    <h6 className="mt-5" style={{color: "#2E59B0", fontSize: "18px"}}>Can I cancel my free trail at any time?</h6>
    <p style={{color: "#162547"}}>
      We have several resources (documents and videos) for <br />
      training. The portal has a button you can click to send <br />
      questions, and you will be assigned a personal point of<br />
      contact who will be availabe to assist as needed.
    </p>
    <hr style={{color: "cadetblue"}} />
    <h6 style={{color: "#2E59B0", fontSize: "18px"}}>Can I cancel my free trail at any time?</h6>
    <p style={{color: "#162547"}}>
      Typically, you'll find that you can't live without us! Before the<br />
      end of the trail,we will be providing you with a quote for <br />
      continuing the subscription. We will also be working closely <br />
      with you toward a seamless transition.After the initial 7 days <br />
      trail, with your acceptance of our quote and your approval,<br />
      we will start charging for the monthly subscription. We will<br />
      provide you with all the tools necessary for on-boarding as <br />
      well.
    </p>
  </Col>
  
</Row>
</Container>
</Container>

       


        </>
    )
}

export default SignUp;

const bgsignup={
    border:"none",
       backgroundColor: "#13254B" 
   }

   const bgsignin={

    backgroundColor: "#13254B" 
}