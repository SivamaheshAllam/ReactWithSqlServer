import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";

import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import "../Styles/RegisterStyles.css";
import { userLogin, userRegitration, checkEmailExists } from "../Api/ApiServices";
import toast, { Toaster } from "react-hot-toast";

import { yupResolver } from "@hookform/resolvers/yup";
function Registration() {
  const [centredModal, setCentredModal] = useState(false);
  const toggleOpen = () => setCentredModal(!centredModal);

  let navigate=useNavigate()

  let formOptions = { resolver: yupResolver() };
  let form = useForm({
    formOptions,
  });
  let { register, control, handleSubmit, formState, setValue, watch, reset, setError,clearErrors } = form;
  let { errors } = formState;

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onBlur",
  });
  let submitRegistration = async (data) => {
    try {
      let response = await userRegitration(data);
      if (response.data.status === "Failure") {
        toast(response.data.error, {
          style: { color: "white", backgroundColor: "#e74c3c" },
        });
      }
      if (response.status === 200 && response.data.status !== "Failure") {
        toast("Successfully Registered", {
          style: { color: "white", backgroundColor: "#07bc0c" },
        });
      }
    } catch (error) {
      console.error(error);
    }
    reset();
  };

  let handleLoginSubmit= async (loginData)=>{
    try {
      let response=await userLogin(loginData);
      if(response.data.status==='Success'){
        localStorage.setItem("Token",response.data.data.token)
        navigate('/dashboard', {state:response.data.data})
      }
    } catch (error) {
      console.log(error)
    }
  }

  let checkUserEmailExists= async(e)=>{
    const email=e.target.value;
    console.log(errors)
    if(email !== null && email !== undefined && email !=='' ){
      try {
        let response=await checkEmailExists(email)
        console.log(response.data.responseCode)
        let code=response.data.responseCode
        if(code===false){
          setError('email', { type: 'custom', message: 'Email id already exists' });
          console.log(errors)
        }
        else if(code===true)
        {
          clearErrors('email');
        }
      } catch (error) {
        
      }
          
    }
    else{
      // clearErrors()
    }
  
  }

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <div>
        <MDBContainer fluid>
          <h1 className="reg-heading">
            Welcome to Merch<span style={{ color: "#70c8e3" }}>Cart.</span>
          </h1>

          <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
            <MDBCardBody className="reg-card-body">
              {/* <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Registration
                  </p>

                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="First name"
                          ref={userNameRef}
                        />
                         
                        <Form.Control.Feedback type="invalid">
                          Please enter user name
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="Email"
                          ref={userEmailRef}
                        />
                         
                        <Form.Control.Feedback type="invalid">
                          Please enter your email.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Password"
                          ref={passwordRef}
                        />
                         
                        <Form.Control.Feedback type="invalid">
                          Please enter password
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom04"
                      >
                        <Form.Label>Repeat Password</Form.Label>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Repeat Password"
                          ref={repeatPasswordRef}
                        />
                         
                        <Form.Control.Feedback type="invalid">
                          Please enter repeat password
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        ref={checkboxRef}
                        
                      />
                    </Form.Group>

                    <Row className="mb-3 " >
                      <Col md="5">
                      <Button  className="mb-4 reg-login-btns" type="submit">
                        Register
                      </Button>
                      </Col>
                      <Col md="5">
                      <Button
                        className="mb-4"
                        color="primary"
                        onClick={toggleOpen}
                      >
                        Login
                      </Button>
                      </Col>

                     
                    </Row>
                  </Form>
                  <MDBRow>
                    
                  </MDBRow>
                </MDBCol>

                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage
                    src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg"
                    fluid
                  />
                </MDBCol>
              </MDBRow> */}
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <form onSubmit={handleSubmit(submitRegistration)}>
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"></p>
                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <MDBIcon fas icon="user me-3" size="lg" />
                      <MDBInput
                        label="Your Name"
                        id="username"
                        type="text"
                        {...register("username", {
                          required: "username is required",
                        })}
                      />
                      {/* <p>{errors.username?.message}</p> */}
                      {errors.username && (
                        <span className="invalid-feedback d-block">
                          {errors.username.message}
                        </span>
                      )}
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="envelope me-3" size="lg" />
                      <MDBInput
                        label="Your Email"
                        id="form2"
                        type="email"
                        {...register("email", {
                          required: "email is required",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message:
                              "Entered value does not match email format",
                          },
                        })}
                        onChange={checkUserEmailExists}
                      />
                      {errors.email && (
                        <span className="invalid-feedback d-block">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="lock me-3" size="lg" />
                      {/* className={`${errors.password ? "is-invalid" : ""}`} */}
                      <MDBInput
                        label="Password"
                        id="form3"
                        type="password"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                          }
                        })}
                      />
                      {errors.password && (
                        <span className="invalid-feedback d-block">
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="key me-3" size="lg" />
                      <MDBInput
                        label="Repeat your password"
                        id="form4"
                        type="password"
                        {...register("repeatpassword", {
                          required: "Confirm Password is required",
                          validate: (val) => {
                            if (watch("password") !== val) {
                              return "Your passwords do not match";
                            }
                          },
                        })}
                      />
                      {errors.repeatpassword && (
                        <span className="invalid-feedback d-block">
                          {errors.repeatpassword.message}
                        </span>
                      )}
                    </div>
                    <div className="mb-4">
                      <MDBCheckbox
                        name="termsagreed"
                        value="Checked"
                        id="termsagreed"
                        label="Subscribe to our newsletter"
                        
                        {...register("termsagreed")}
                        onChange={(e) => {
                          setValue("termsagreed", e.target.checked);
                        }}
                      />
                    </div>
                    <MDBBtn className="mb-4" type="submit">
                      Register
                    </MDBBtn>
                    &nbsp;&nbsp;
                    <MDBBtn
                      className="mb-4"
                      color="primary"
                      onClick={toggleOpen}
                      type="button"
                    >
                      Login
                    </MDBBtn>
                  </form>
                  <DevTool control={control} />
                </MDBCol>

                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCarousel interval={5000} dark fade>
                    <MDBCarouselItem itemId={1}>
                      <img
                        src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={2}>
                      <img
                        src="https://www.stuff.co.nz/media/images/9Tzi8ywRz924XE3uHaD6DfGZQfjEdZd7oKlsiR53VLHvSZExpMzuRmKdwHbkL9PkBaLsHpWLOuHbhYn1alKaD8b1wa0NwJF4Pu%2F%2FOUOq7Z9D+Rgt4yivOkzAMztltPuZlVa7c%2FOb5LmJAmHfF0tHB8yT06%2FF8+R7Fv3Ey+vnUHg%2FEoAaYzIC%2FXeOe7qDyfbB?resolution=1240x700"
                        className="d-block w-100"
                        alt="..."
                      />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={3}>
                      <img
                        src="https://media.istockphoto.com/id/1180997031/vector/happy-people-with-shopping-bags-man-and-woman.jpg?s=612x612&w=0&k=20&c=bpr6qrHCgskQ05YC727nXJMcUFQ_FyYIPkNRwmTFNm8="
                        className="d-block w-100"
                        alt="..."
                      />
                    </MDBCarouselItem>
                  </MDBCarousel>
                  {/* <MDBCardImage
                    src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg"
                    fluid
                  /> */}
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
      <div>
        <MDBModal tabIndex="-1" open={centredModal} setOpen={setCentredModal}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Login</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleOpen}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <form onSubmit={handleSubmit2(handleLoginSubmit)}>
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="form1"
                    type="email"
                    
                    {...register2("loginEmail", {
                      required: "email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message:
                          "Entered value does not match email format",
                      },
                    })}
                  />
                  {errors2.loginEmail && (
                        <span className="login-err">
                          {errors2.loginEmail.message}
                        </span>
                      )}
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="form2"
                    type="password"
                    {...register2("loginPassword",{
                      required:"Password is required"
                    })}
                  />
                  {errors2.loginPassword && (
                        <span className="login-err">
                          {errors2.loginPassword.message}
                        </span>
                      )}

                  <div className="d-flex justify-content-between mx-3 mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Remember me"
                    />
                    <a href="!#">Forgot password?</a>
                  </div>

                  <MDBBtn className="mb-4" type="submit">Sign in</MDBBtn>

                  <div className="text-center">
                    <p>
                      Not a member? <a href="#!">Register</a>
                    </p>
                    <p>or sign up with:</p>

                    <div
                      className="d-flex justify-content-between mx-auto"
                      style={{ width: "40%" }}
                    >
                      <MDBBtn
                        tag="a"
                        color="none"
                        className="m-1"
                        style={{ color: "#1266f1" }}
                      >
                        <MDBIcon fab icon="facebook-f" size="sm" />
                      </MDBBtn>

                      <MDBBtn
                        tag="a"
                        color="none"
                        className="m-1"
                        style={{ color: "#1266f1" }}
                      >
                        <MDBIcon fab icon="twitter" size="sm" />
                      </MDBBtn>

                      <MDBBtn
                        tag="a"
                        color="none"
                        className="m-1"
                        style={{ color: "#1266f1" }}
                      >
                        <MDBIcon fab icon="google" size="sm" />
                      </MDBBtn>

                      <MDBBtn
                        tag="a"
                        color="none"
                        className="m-1"
                        style={{ color: "#1266f1" }}
                      >
                        <MDBIcon fab icon="github" size="sm" />
                      </MDBBtn>
                    </div>
                  </div>
                </MDBContainer>
                </form>
              </MDBModalBody>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>
    </div>
  );
}

export default Registration;
