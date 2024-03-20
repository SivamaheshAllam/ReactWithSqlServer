import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import React from "react";
import "../Styles/dashboard.css";
import HorizontalScroll from "react-scroll-horizontal";
import Categoryitems from "./Categoryitems";

function Dashboard() {
  return (
    <div>
      <div>
        <img
          src="/images/sponline_phone114_generated.jpg"
          alt="banner"
          style={{ width: "100%", height: "100%" }}
        ></img>
      </div>
      <MDBCard className="dashboard-card">
        <MDBCardBody>
          <MDBCard className="dashboard-card2">
            <HorizontalScroll className="scroll" reverseScroll={true}>
              {/* <h1 style={{visibility:'hidden'}}>Hi Hello </h1> */}
              <Categoryitems src="/images/grocey6.avif" alt="Image 1"title="Grocery"/>
              <Categoryitems src="/images/mobiles.png" alt="Image 2"title="Mobiles"/>
              <Categoryitems src="/images/mac.png" alt="Image 3"title="Electronics"/>
              <Categoryitems src="/images/tv2.avif" alt="Image 4"title="Appliances"/>
              <Categoryitems src="/images/fashion.avif" alt="Image 1"title="Fashion"/>
              <Categoryitems src="/images/toye.avif" alt="Image 1"title="Toyes"/>
              <Categoryitems src="/images/plane2.jpg" alt="Image 1"title="Travel"/>
              <Categoryitems src="/images/twowheel.jpg" alt="Image 1"title="Two Wheelers"/>
            </HorizontalScroll>
          </MDBCard>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Dashboard;
