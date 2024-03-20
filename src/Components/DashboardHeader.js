import {
  MDBBtn,
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBInputGroup,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import '../Styles/dashboardheader.css';
import cartimg from "../images/cartlogo.png";

function DashboardHeader() {
    const [openBasic, setOpenBasic] = useState(false);
  return (
    <MDBNavbar expand='lg' light bgColor='light' className="dashboard-header" sticky>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
        <span>
              <img
                src={cartimg}
                style={{ height: "40px", paddingLeft: "15px" }}
                alt=""
              ></img>
            </span>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          

          <form className='d-flex input-group header2-form'>
            <input type='search' className='form-control' placeholder='Search for Products and More' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>

          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
           
            <MDBNavbarItem>
            
              <MDBNavbarLink active href='#'><i class="fas fa-cart-shopping"></i>Cart</MDBNavbarLink>
            </MDBNavbarItem>
            &nbsp;&nbsp;

            <MDBNavbarItem>    
              <button type="button" class="btn btn-primary" data-mdb-ripple-init>Login</button>
            </MDBNavbarItem>

            {/* <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> */}

            {/* <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default DashboardHeader;
