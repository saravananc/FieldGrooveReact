import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import userimage from "./Assets/user-nav.jpg";
import headlogo from "./Assets/fg_logo.png";

const Dashboard = () => {

  
  return (
    <>
      <Container>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">
              <img className="firstlogo" src={headlogo} alt="headerlogo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Blogs</Nav.Link>
                <NavDropdown title="Profile" id="navbarScrollingDropdown">
                  <NavDropdown.Item className="text-info " href="#action3">
                    Edit profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <div className="d-flex " style={{ marginTop: "11px" }}>
                <p className="mx-4">saravanan</p>
                <img
                  className="userimage"
                  src={userimage}
                  alt="userimage"
                  style={{ height: "30px", width: "30px" }}
                />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <h1 className="text-center mt-5 text-primary">
        welcome to saravanan page!
      </h1>

    </>
  );
};
export default Dashboard;



