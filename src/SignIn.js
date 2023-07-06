import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "react-bootstrap-icons";
import bgimage from "./Assets/bg.png.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  Email: yup
    .string()
    .required("Email is required.")
    .email("Please enter valid email."),
  Password: yup
    .string()
    .required("Password is required.")
    .min(4, "Min 4 chars.")
    .max(10, "Max 10 chars."),
});

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "200px",
        }}
      >
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col sm={4} className="box arrow-right" style={bgsignin}>
              <Card className="pb-4 ms-2 me-2" style={bgsignin}>
                <Card.Body>
                  <Link style={{ color: "white", fontSize: "20px" }}>
                    SIGN IN
                  </Link>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup
                      className="mb-3 mt-3"
                      style={{ color: "white", fontSize: "17px" }}
                      controlId="formtextemail"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        {...register("Email")}
                        style={{ borderRadius: "0" }}
                        type="email"
                        placeholder="name@example.com"
                      />
                      <div className="mt-2" style={{ color: "red" }}>
                        {errors.Email && (
                          <span style={{}}>{errors.Email.message}</span>
                        )}
                      </div>
                    </FormGroup>
                    <FormGroup
                      className="mb-3"
                      style={{ color: "white", fontSize: "17px" }}
                      controlId="formtextPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        {...register("Password")}
                        style={{ borderRadius: "0" }}
                        type="password"
                        placeholder="Password"
                      />
                      <div className="mt-2">
                        {errors.Password && (
                          <span style={{ color: "red" }}>
                            {errors.Password.message}
                          </span>
                        )}
                      </div>
                    </FormGroup>
                    <FormGroup
                      className="mb-3 mt-3"
                      style={{ color: "white" }}
                      controlId="formcheckbox"
                    >
                      <Form.Check aria-label="option" label="Remember Me" />
                    </FormGroup>
                    <div className="d-flex flex-column flex-sm-row">
                      <Button
                        className="mx-auto mt-2"
                        style={{
                          backgroundColor: "transparent",
                          width: "145px",
                          height: "45px",
                          fontSize: "15px",
                          padding: "10px",
                          color: "#8B92A0",
                          borderRadius: "4px",
                          borderColor: "rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        Forgot Password?
                      </Button>
                      <Button
                        type="submit"
                        disabled={isDirty && !isValid}
                        className="mx-auto mt-2"
                        style={{
                          color: "white",
                          backgroundColor: "#E36156",
                          width: "145px",
                          height: "45px",
                          borderRadius: "4px",
                          fontSize: "15px",
                          padding: "10px",
                          borderColor: "#E36156",
                        }}
                      >
                        Sign In <ChevronRight />
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <div>
                <h5 className="mt-4 ms-3" style={{ color: "#E36156" }}>
                  NEED AN ACCOUNT?
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
                  Create an account to start managing
                  <br />
                  your company. Click the "Create New Account"
                  <br />
                  button below to get started
                </p>
                <Link
                  to="/signup"
                  className="btn text-white ms-3"
                  style={{
                    backgroundColor: "#162547",
                    fontSize: "14px",
                    padding: "10px 5px",
                  }}
                >
                  Create New Account
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default SignIn;

const bgsignin = {
  border: "none",
  backgroundColor: "#13254B",
};
