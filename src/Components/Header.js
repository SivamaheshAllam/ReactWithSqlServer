import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBCheckbox,
  MDBInput,
  MDBModalBody,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import { useState, useRef } from "react";
import '../Styles/HeaderStyle.css'
import cartimg from  '../images/cartlogo.png'

function Header() {
  const [openBasic, setOpenBasic] = useState(false);
  const [centredModal, setCentredModal] = useState(false);
  // const toggleOpen = () => setCentredModal(!centredModal);
  return (
    <div>
      <MDBNavbar expand="lg" light bgColor="light"  className="header-bar">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#" bgColor="light">
            <span><img src={cartimg} style={{height:'40px', paddingLeft:'15px'}} alt=""></img></span>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  Contact
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">About</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Dropdown
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

             
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <MDBBtn color="primary">Search</MDBBtn>&nbsp;&nbsp;
              {/* <MDBBtn color="primary" onClick={toggleOpen}>
                Login
              </MDBBtn> */}
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div>
      {/* <MDBModal tabIndex="-1" open={centredModal} setOpen={setCentredModal}>
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
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="form1"
                    type="email"
                  />
                  <MDBInput 
                    wrapperClass="mb-4"
                    label="Password"
                    id="form2"
                    type="password"
                  />

                  <div className="d-flex justify-content-between mx-3 mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Remember me"
                    />
                    <a href="!#">Forgot password?</a>
                  </div>

                  <MDBBtn className="mb-4">Sign in</MDBBtn>

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
              </MDBModalBody>
             
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal> */}
      </div>
    </div>
  );
}

export default Header;
