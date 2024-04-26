import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import "../Styles/dashboard.css";
import HorizontalScroll from "react-scroll-horizontal";
import Categoryitems from "./Categoryitems";
import { getEmployees } from "../Api/ApiServices";

function Dashboard() {
  const [basicActive, setBasicActive] = useState("tab1");
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  let getEmployeesData = async () => {
    let response = await getEmployees();
    console.log(response);
  };
  useEffect(() => {
    getEmployeesData();
  }, []);
  return (
    <div style={{backgroundColor:'white'}}>
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
              <Categoryitems
                src="/images/grocey6.avif"
                alt="Image 1"
                title="Grocery"
              />
              <Categoryitems
                src="/images/mobiles.png"
                alt="Image 2"
                title="Mobiles"
              />
              <Categoryitems
                src="/images/mac.png"
                alt="Image 3"
                title="Electronics"
              />
              <Categoryitems
                src="/images/tv2.avif"
                alt="Image 4"
                title="Appliances"
              />
              <Categoryitems
                src="/images/fashion.avif"
                alt="Image 1"
                title="Fashion"
              />
              <Categoryitems
                src="/images/toye.avif"
                alt="Image 1"
                title="Toyes"
              />
              <Categoryitems
                src="/images/plane2.jpg"
                alt="Image 1"
                title="Travel"
              />
              <Categoryitems
                src="/images/twowheel.jpg"
                alt="Image 1"
                title="Two Wheelers"
              />
            </HorizontalScroll>
          </MDBCard>
        </MDBCardBody>
      </MDBCard>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <h3>Featured Product</h3>
      </div>
      <div className="tab-div">
        <MDBTabs className="mb-3">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab1")}
              active={basicActive === "tab1"}
            >
              Mobiles
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab2")}
              active={basicActive === "tab2"}
            >
              Laptops
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab3")}
              active={basicActive === "tab3"}
            >
              Televisions
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
      </div>
      <div>
        <MDBTabsContent>
          <MDBTabsPane open={basicActive === "tab1"}>
            <MDBContainer>
              <MDBRow>
                <MDBCol size="md">
                  <MDBCard className="product-card">
                    <MDBCardBody>
                      <div
                        style={{ display: "flex", justifyContent: "center" , objectFit:'cover'}}
                      >
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image hover-overlay"
                        >
                          <MDBCardImage
                            src="https://media.croma.com/image/upload/v1708671209/Croma%20Assets/Communication/Mobiles/Images/268868_0_llqcvi.png"
                            fluid
                            alt="..."
                            height={250}
                            width={250}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          />
                          <a>
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </div>
                      <div>
                        <MDBCardFooter className="text-muted product-footer">
                          Samsung Galaxy S23 Ultra
                        </MDBCardFooter>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size="md">
                  <MDBCard className="product-card">
                    <MDBCardBody>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image hover-overlay"
                        >
                          <MDBCardImage
                            src="https://gadgets.beebom.com/wp-content/uploads/2023/12/Google-Pixel-8-Pro.png"
                            fluid
                            alt="..."
                            height={250}
                            width={250}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          />
                          <a>
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </div>

                      <div>
                        <MDBCardFooter className="text-muted product-footer">
                        Google Pixel 8 Pro
                        </MDBCardFooter>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size="md">
                  <MDBCard className="product-card">
                    <MDBCardBody>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image hover-overlay"
                        >
                          <MDBCardImage
                            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708679040/Croma%20Assets/Communication/Mobiles/Images/300826_0_ujhvyj.png"
                            fluid
                            alt="..."
                            height={250}
                            width={250}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          />
                          <a>
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </div>

                      <div>
                        <MDBCardFooter className="text-muted product-footer">
                        Iphone 15 Pro
                        </MDBCardFooter>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBTabsPane>
          <MDBTabsPane open={basicActive === "tab2"}> <MDBContainer>
              <MDBRow>
                <MDBCol size="md">
                  <MDBCard className="product-card">
                    <MDBCardBody>
                      <div
                        style={{ display: "flex", justifyContent: "center" , objectFit:'cover'}}
                      >
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image hover-overlay"
                        >
                          <MDBCardImage
                            src="https://i.pinimg.com/736x/c5/95/c9/c595c9dc092cb7fbfecedde02a6952ae.jpg"
                            fluid
                            alt="..."
                            height={250}
                            width={250}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          />
                          <a>
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </div>
                      <div>
                        <MDBCardFooter className="text-muted product-footer">
                          Macbook Pro 
                        </MDBCardFooter>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size="md">
                  <MDBCard className="product-card">
                    <MDBCardBody>
                      <div
                        style={{ display: "flex", justifyContent: "center", height:'250px' }}
                      >
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image hover-overlay"
                        >
                          <MDBCardImage
                            src="https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/taZWUk48rHhrHjGr1pRgY71kPLpghA2t3nRmLO09.png"
                            fluid
                            alt="..."
                            height={250}
                            width={250}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          />
                          <a>
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </div>

                      <div>
                        <MDBCardFooter className="text-muted product-footer">
                        Dell
                        </MDBCardFooter>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size="md">
                  <MDBCard className="product-card">
                    <MDBCardBody>
                      <div
                        style={{ display: "flex", justifyContent: "center", height:'250px' }}
                      >
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image hover-overlay"
                        >
                          <MDBCardImage
                            src="https://p1-ofp.static.pub/fes/cms/2022/02/10/ruuqwxsmwevzvmz3pjne8wvrgq3u6k034997.png"
                            fluid
                            alt="..."
                            height={250}
                            width={250}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          />
                          <a>
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </div>

                      <div>
                        <MDBCardFooter className="text-muted product-footer">
                        Lenovo V15
                        </MDBCardFooter>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer></MDBTabsPane>
          <MDBTabsPane open={basicActive === "tab3"}> <MDBContainer>
              <MDBRow>
                <MDBCol size="md">
                  <MDBCard className="product-card">
                    <MDBCardBody>
                      <div
                        style={{ display: "flex", justifyContent: "center" , objectFit:'cover', width:'250px', height:'250px'}}
                      >
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image hover-overlay"
                        >
                          <MDBCardImage
                            src="https://media.croma.com/image/upload/v1708671209/Croma%20Assets/Communication/Mobiles/Images/268868_0_llqcvi.png"
                            fluid
                            alt="..."
                            height={250}
                            width={250}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          />
                          <a>
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </div>
                      <div>
                        <MDBCardFooter className="text-muted product-footer">
                          Samsung Galaxy S23 Ultra
                        </MDBCardFooter>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size="md">
                  <MDBCard className="product-card">
                    <MDBCardBody>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image hover-overlay"
                        >
                          <MDBCardImage
                            src="https://gadgets.beebom.com/wp-content/uploads/2023/12/Google-Pixel-8-Pro.png"
                            fluid
                            alt="..."
                            height={250}
                            width={250}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          />
                          <a>
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </div>

                      <div>
                        <MDBCardFooter className="text-muted product-footer">
                        Google Pixel 8 Pro
                        </MDBCardFooter>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size="md">
                  <MDBCard className="product-card">
                    <MDBCardBody>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image hover-overlay"
                        >
                          <MDBCardImage
                            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708679040/Croma%20Assets/Communication/Mobiles/Images/300826_0_ujhvyj.png"
                            fluid
                            alt="..."
                            height={250}
                            width={250}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          />
                          <a>
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </div>

                      <div>
                        <MDBCardFooter className="text-muted product-footer">
                        Iphone 15 Pro
                        </MDBCardFooter>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer></MDBTabsPane>
        </MDBTabsContent>
      </div>
    </div>
  );
}

export default Dashboard;
