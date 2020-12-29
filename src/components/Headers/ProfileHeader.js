/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class ProfileHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-6 d-flex align-items-center"
          style={{
            minHeight: "100px",
            backgroundSize: "cover"
          }}
        >
          <span className="mask bg-info" />

          <Container className="d-flex align-items-center" fluid>
            <Row>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default ProfileHeader;
