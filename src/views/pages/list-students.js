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
  Badge,
  Button,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

class Tables extends React.Component {
  render() {
    return (
      <>
        <SimpleHeader name="Tables" parentName="Tables" />
        <Container className="mt--6" fluid>
          <Card>
            <CardHeader className="border-0">
              <Row>
                <Col xs="6">
                  <h3 className="mb-0">Fahrschüler</h3>
                </Col>
                <Col className="text-right" xs="6">
                  <Button
                    className="btn-neutral btn-round btn-icon"
                    color="default"
                    href="#pablo"
                    id="tooltip969372949"
                    onClick={e => e.preventDefault()}
                    size="sm"
                  >
                    <span className="btn-inner--icon mr-1">
                      <i className="fas fa-user-edit" />
                    </span>
                    <span className="btn-inner--text">Export</span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip969372949">
                    Edit product
                  </UncontrolledTooltip>
                </Col>
              </Row>
            </CardHeader>

            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Telefonnummer</th>
                  <th>Getriebe</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-user">
                    <img
                      alt="..."
                      className="avatar rounded-circle mr-3"
                      src={require("assets/img/theme/team-1.jpg")}
                    />
                    <b>John Michael</b>
                  </td>
                  <td>
                    <span className="text-muted">079 655 94 12</span>
                  </td>
                  <td>
                    <a
                      className="font-weight-bold"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Geschalten
                    </a>
                  </td>
                  <td className="table-actions">
                    <a
                      className="table-action"
                      href="#pablo"
                      id="tooltip564981685"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-user-edit" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip564981685">
                      Edit product
                    </UncontrolledTooltip>
                    <a
                      className="table-action table-action-delete"
                      href="#pablo"
                      id="tooltip601065234"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-trash" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip601065234">
                      Delete product
                    </UncontrolledTooltip>
                  </td>
                </tr>
                <tr>
                  <td className="table-user">
                    <img
                      alt="..."
                      className="avatar rounded-circle mr-3"
                      src={require("assets/img/theme/team-2.jpg")}
                    />
                    <b>Alex Smith</b>
                  </td>
                  <td>
                    <span className="text-muted">078 247 78 12</span>
                  </td>
                  <td>
                    <a
                      className="font-weight-bold"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Geschalten
                    </a>
                  </td>
                  <td className="table-actions">
                    <a
                      className="table-action"
                      href="#pablo"
                      id="tooltip123539273"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-user-edit" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip123539273">
                      Edit product
                    </UncontrolledTooltip>
                    <a
                      className="table-action table-action-delete"
                      href="#pablo"
                      id="tooltip397466356"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-trash" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip397466356">
                      Delete product
                    </UncontrolledTooltip>
                  </td>
                </tr>
                <tr>
                  <td className="table-user">
                    <img
                      alt="..."
                      className="avatar rounded-circle mr-3"
                      src={require("assets/img/theme/team-3.jpg")}
                    />
                    <b>Samantha Ivy</b>
                  </td>
                  <td>
                    <span className="text-muted">076 338 35 16</span>
                  </td>
                  <td>
                    <a
                      className="font-weight-bold"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Geschalten
                    </a>
                  </td>
                  <td className="table-actions">
                    <a
                      className="table-action"
                      href="#pablo"
                      id="tooltip968903465"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-user-edit" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip968903465">
                      Edit product
                    </UncontrolledTooltip>
                    <a
                      className="table-action table-action-delete"
                      href="#pablo"
                      id="tooltip161447542"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-trash" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip161447542">
                      Delete product
                    </UncontrolledTooltip>
                  </td>
                </tr>
                <tr>
                  <td className="table-user">
                    <img
                      alt="..."
                      className="avatar rounded-circle mr-3"
                      src={require("assets/img/theme/team-1.jpg")}
                    />
                    <b>John Michael</b>
                  </td>
                  <td>
                    <span className="text-muted">079 571 35 98</span>
                  </td>
                  <td>
                    <a
                      className="font-weight-bold"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Automat
                    </a>
                  </td>
                  <td className="table-actions">
                    <a
                      className="table-action"
                      href="#pablo"
                      id="tooltip874640709"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-user-edit" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip874640709">
                      Edit product
                    </UncontrolledTooltip>
                    <a
                      className="table-action table-action-delete"
                      href="#pablo"
                      id="tooltip598568751"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-trash" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip598568751">
                      Delete product
                    </UncontrolledTooltip>
                  </td>
                </tr>
                <tr>
                  <td className="table-user">
                    <img
                      alt="..."
                      className="avatar rounded-circle mr-3"
                      src={require("assets/img/theme/team-2.jpg")}
                    />
                    <b>John Michael</b>
                  </td>
                  <td>
                    <span className="text-muted">076 355 78 12</span>
                  </td>
                  <td>
                    <a
                      className="font-weight-bold"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Geschalten
                    </a>
                  </td>
                  <td className="table-actions">
                    <a
                      className="table-action"
                      href="#pablo"
                      id="tooltip400574648"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-user-edit" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip400574648">
                      Edit product
                    </UncontrolledTooltip>
                    <a
                      className="table-action table-action-delete"
                      href="#pablo"
                      id="tooltip573554853"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-trash" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip573554853">
                      Delete product
                    </UncontrolledTooltip>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Container>
      </>
    );
  }
}

export default Tables;
