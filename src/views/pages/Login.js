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
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import AuthHeader from "components/Headers/AuthHeader.js";
import firebase from "./../../config/firebase.js";
import logo from "../../assets/img/brand/Lunnoa_Logo_Login.png"


class Login extends React.Component {

  
  state = {			
    email: '',
    password: '',
    error: null,
    focusedEmail:false,
    focusedPassword:true
  };
	handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
	}
  handleSubmit = e => {
		e.preventDefault();
		const {email, password, error} = this.state;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => {
				this.props.history.push('/admin/calendar');
			})
			.catch(error => {
				this.setState({error});
			});
	}
  render() {
		const {email, password, error} = this.state;
    return (
      <>
        <AuthHeader
          title="Willkommen!"
          lead="Loge dich ein um dein Benutzerkonto zu verwalten"
        />
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-secondary border-0 mb-0">
                <CardHeader className="bg-transparent pb-5">
                  <div className="btn-wrapper text-center">
                  <img alt="Lunnoa Logo mit Slogan Anmelden und Losfahren" src={logo} />
                  </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
          				{error && <p className="error-message">{error.message}</p>}
                  <Form role="form" onSubmit={this.handleSubmit}>
                    <FormGroup
                      className={classnames("mb-3", {
                        focused: this.state.focusedEmail
                      })}
                    >
                      <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          name="email"
                          onFocus={() => this.setState({ focusedEmail: true })}
                          onBlur={() => this.setState({ focusedEmail: false })}
                          onChange={this.handleChange}
                          value={email}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                      className={classnames({
                        focused: this.state.focusedPassword
                      })}
                    >
                      <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Passwort"
                          type="password"
                          name="password"
                          value={password}
                          onFocus={() =>
                            this.setState({ focusedPassword: true })
                          }
                          onBlur={() =>
                            this.setState({ focusedPassword: false })
                          }
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="text-center">
                      <Button className="my-4" color="info" type="submit">
                        Anmelden
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <Row className="mt-3">
                <Col xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <small>Passwort vergessen?</small>
                  </a>
                </Col>
                <Col className="text-right" xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <small>Jetzt Fahrschule registrieren</small>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Login;
