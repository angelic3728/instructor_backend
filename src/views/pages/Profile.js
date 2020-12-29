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
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import ProfileHeader from "components/Headers/ProfileHeader.js";

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      school_name:"",
      e_mail:"",
      first_name:"",
      sur_name:"",
      road:"",
      house_number:"",
      post_code:"",
      city:"",
      canton:"",
      about_me:"",
      price_per_hour:"",
      price_per_subscription:"",
      vehicle_switched:"",
      vehicle_automatic:""
    }
  }

  updateProfile() {
    console.log(this.state.school_name);
  }

  showEvent(e) {
    console.log(e);
  }

  render() {
    return (
      <>
        <ProfileHeader />
        <Container className="mt--6" fluid>
          <Row>
            <Col className="order-xl-1" xl="12  ">
              <Card>
                <CardHeader>
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Profil bearbeiten</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      Online Buchungen erhalten
                      <>

                        <label className="custom-toggle" htmlFor="input-showProfile">
                          <Input type="checkbox" id="input-showProfile" />
                          <span className="custom-toggle-slider rounded-circle" />
                        </label>
                        <span className="clearfix" />
                      </>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Kontaktinformationen
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-drivingSchoolName"
                            >
                              Name der Fahrschule
                            </label>
                            <Input
                              defaultValue={this.state.school_name}
                              id="input-drivingSchoolName"
                              placeholder="Name der Fahrschule"
                              onChange={(e) => {this.setState({"school_name":e.target.value})} }
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email
                            </label>
                            <Input
                            defaultValue={this.state.e_mail}
                              id="input-email"
                              placeholder="Email"
                              onChange={(e) => {this.setState({"e_mail":e.target.value})} }
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Vorname
                            </label>
                            <Input
                              defaultValue={this.state.first_name}
                              id="input-first-name"
                              placeholder="Vorname"
                              onChange={(e) => {this.setState({"first_name":e.target.value})} }
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Nachname
                            </label>
                            <Input
                              defaultValue={this.state.sur_name}
                              id="input-last-name"
                              placeholder="Nachname"
                              onChange={(e) => {this.setState({"sur_name":e.target.value})} }
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="10">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-street"
                            >
                              Strasse
                            </label>
                            <Input
                              defaultValue={this.state.road}
                              id="input-street"
                              placeholder="Strasse"
                              onChange={(e) => {this.setState({"road":e.target.value})} }
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="2">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-houseNumber"
                            >
                              Hausnummer
                            </label>
                            <Input
                              defaultValue={this.state.house_number}
                              id="input-houseNumber"
                              placeholder="Hausnummer"
                              onChange={(e) => {this.setState({"house_number":e.target.value})} }
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="2">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-zipCode"
                            >
                              PLZ
                            </label>
                            <Input
                              defaultValue={this.state.post_code}
                              id="input-zipCode"
                              placeholder="Postleitzahl"
                              onChange={(e) => {this.setState({"post_code":e.target.value})} }
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="7">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Stadt
                            </label>
                            <Input
                              defaultValue={this.state.city}
                              id="input-city"
                              placeholder="Stadt"
                              onChange={(e) => {this.setState({"city":e.target.value})} }
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="3">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-canton"
                            >
                              Kanton
                            </label>
                            <Input
                              defaultValue={this.state.canton}
                              id="input-canton"
                              placeholder="Canton"
                              onChange={(e) => {this.setState({"canton":e.target.value})} }
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Informationen über die Fahrschule</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label className="form-control-label">Über mich</label>
                        <Input
                          defaultValue={this.state.about_me}
                          placeholder="Ein paar Worte über mich"
                          rows="4"
                          type="textarea"
                          onChange={(e) => {this.setState({"about_me":e.target.value})} }
                        />
                      </FormGroup>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-priceOneLesson"
                            >
                              Preis pro Fahrstunde
                            </label>
                            <Input
                              defaultValue={this.state.price_per_hour}
                              id="input-priceOneLesson"
                              placeholder="Preis pro Fahrstunde"
                              onChange={(e) => {this.setState({"price_per_hour":e.target.value})} }
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-priceTenLessons"
                            >
                              Preis pro 10er Abonnement
                            </label>
                            <Input
                              defaultValue={this.state.price_per_subscription}
                              id="input-priceTenLessons"
                              placeholder="Preis for 10er Abonnement"
                              onChange={(e) => {this.setState({"price_per_subscription":e.target.value})} }
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-carManualGear"
                            >
                              Fahrzeug Geschalten
                            </label>
                            <Input
                              defaultValue={this.state.vehicle_switched}
                              id="input-carManualGear"
                              placeholder="Fahrzeug Geschalten"
                              onChange={(e) => {this.setState({"vehicle_switched":e.target.value})} }
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-carAutomaticGear"
                            >
                              Fahrzeug Automatik
                            </label>
                            <Input
                              defaultValue={this.state.vehicle_automatic}
                              id="input-carAutomaticGear"
                              placeholder="Fahrzeug Automatik"
                              onChange={(e) => {this.setState({"vehicle_automatic":e.target.value})} }
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <Button
                    className="btn-neutral"
                    color="danger"
                    data-calendar-view="basicWeek"
                    onClick={() => this.updateProfile()}
                    size="md"
                  >
                    Update
                  </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
