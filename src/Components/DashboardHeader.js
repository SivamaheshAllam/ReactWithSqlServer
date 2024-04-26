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
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import "../Styles/dashboardheader.css";
import cartimg from "../images/cartlogo.png";
import { borderColor } from "@mui/system";

function DashboardHeader() {
  const [openBasic, setOpenBasic] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => {
    setIsFocused(true);
  };
  const hanldeOnBlur = () => {
    setIsFocused(false);
  };
  return (
    <MDBNavbar
      expand="lg"
      light
      bgColor="light"
      className="dashboard-header"
      sticky
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <span>
            <img
              src={cartimg}
              style={{ height: "40px", paddingLeft: "15px" }}
              alt=""
            ></img>
          </span>
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
          <form className="d-flex search__form">
            <input
              type="text"
              placeholder="Search for products"
              className="search__form__input"
              onFocus={handleOnFocus}
              onBlur={hanldeOnBlur}
              style={{borderColor: isFocused ? 'rgb(104 96 227)': '#9e9bcb'}}
              required
            />
            <button className="search__form__button" type="submit" style={{backgroundColor: isFocused ? 'rgb(104 96 227)': '#9e9bcb'}}>
              <SearchIcon fontSize="medium" />
            </button>
          </form>

          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active href="#">
                <i className="fas fa-cart-plus"></i> &nbsp;Cart
              </MDBNavbarLink>
            </MDBNavbarItem>
            &nbsp;&nbsp;
            <MDBNavbarItem>
              <button
                type="button"
                className="btn btn-primary"
                data-mdb-ripple-init
              >
                <i class="fas fa-user"></i> &nbsp;Login
              </button>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default DashboardHeader;
