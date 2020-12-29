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
// JavaScript library that creates a callendar with events
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from 'moment';
import 'moment/locale/de-ch'
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Modal,
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Toast
} from "reactstrap";
// core components
// import { events } from "variables/general.js";

// own libraries
import { isMobileOnly } from "react-device-detect";
import firebase, { auth } from "config/firebase.js";

let calendar;
moment.locale('de-ch');

class CalendarView extends React.Component {

  constructor(props) {
    super(props);

  }

  state = {
    user_key: "",
    events: [],
    events_obj: {},
    alert: null
  };


  componentWillMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user_key: user.uid
        })

        const db = firebase.firestore();
        const user_doc = db.collection('instructor_calendars').doc(user.uid);
        // const doc = document.get();
        user_doc.get().then((doc) => {
          if (!doc.exists) return;
          const all_events = doc.data();
          this.setState({
            events_obj: all_events.data
          })
          var result = Object.keys(all_events.data).map((key) => [Number(key), all_events.data[key]]);

          var stored_events = [];

          result.map((item, index) => {
            stored_events.push({
              id: item[0],
              title: item[1].title,
              start: item[1].start,
              allDay: item[1].allDay,
              className: item[1].className,
            });

            if (index === result.length - 1) {
              this.setState({
                events: stored_events
              })
            }
          });
          this.createCalendar();
        });
      }
    });
  }

  createCalendar = () => {
    if (isMobileOnly) {
      var firstView = "timeGridDay"
    } else {
      var firstView = "timeGridWeek"
    }
    calendar = new Calendar(this.refs.calendar, {
      plugins: [interaction, dayGridPlugin, timeGridPlugin],
      locales: "de-ch",
      defaultView: firstView,
      selectable: true,
      selectHelper: true,
      editable: true,
      weekends: false,
      minTime: "07:00",
      maxTime: "21:00",
      slotDuration: "01:00:00",
      allDaySlot: false,
      eventOverlap: false,
      eventDurationEditable: false,
      events: this.state.events,
      // Add new event
      select: info => {
        this.setState({
          modalAdd: true,
          startDate: info.startStr,
          endDate: info.endStr,
          radios: "bg-primary",
          eventType: "lesson"
        });
      },
      // Edit calendar event action
      eventClick: ({ event }) => {
        this.setState({
          modalChange: true,
          eventId: event.id,
          eventTitle: event.title,
          eventDescription: event.extendedProps.description,
          radios: "bg-info",
          event: event
        });
      }
    });
    calendar.render();
    this.setState({
      currentDate: calendar.view.title
    });
  };
  changeView = newView => {
    calendar.changeView(newView);
    this.setState({
      currentDate: calendar.view.title
    });
  };
  addNewEvent = () => {
    if (this.state.eventTitle !== undefined) {
      var newEvents = this.state.events;
      this.setState({
        modalAdd: false,
        events: newEvents,
        startDate: undefined,
        endDate: undefined,
        radios: "bg-info",
        eventTitle: undefined
      });

      const db = firebase.firestore();
      const document = db.collection('instructor_calendars').doc(this.state.user_key);

      const unique_key = this.generateUniqueString();


      const new_data = {
        title: this.state.eventTitle,
        start: this.state.startDate,
        allDay: false,
        className: this.state.radios,
        EventType: this.state.eventType
      }

      const data = {
        [unique_key]: new_data
      }

      document.set({
        data
      }, { merge: true }).then(() => {
        var new_events_obj = this.state.events_obj;
        new_events_obj[unique_key] = new_data;
        this.setState({
          events_obj: new_events_obj
        })
      }
      );

      newEvents.push({
        title: this.state.eventTitle,
        start: this.state.startDate,
        end: this.state.endDate,
        className: this.state.radios,
        id: unique_key
      });
      calendar.addEvent({
        title: this.state.eventTitle,
        start: this.state.startDate,
        end: this.state.endDate,
        className: this.state.radios,
        id: unique_key
      });
    } else {

    }
  };

  generateUniqueString() {
    var ts = String(new Date().getTime()),
      i = 0,
      out = '';

    for (i = 0; i < ts.length; i += 1) {
      out += Number(ts.substr(i, 1)).toString(36);
    }

    return (out);
  }

  changeEvent = () => {
    var newEvents = this.state.events.map((prop, key) => {
      if (prop.id + "" === this.state.eventId + "") {
        this.state.event.remove();
        calendar.addEvent({
          ...prop,
          title: this.state.eventTitle,
          className: this.state.radios,
          description: this.state.eventDescription
        });
        return {
          ...prop,
          title: this.state.eventTitle,
          className: this.state.radios,
          description: this.state.eventDescription
        };
      } else {
        return prop;
      }
    });
    this.setState({
      modalChange: false,
      events: newEvents,
      radios: "bg-info",
      eventTitle: undefined,
      eventDescription: undefined,
      eventId: undefined,
      event: undefined
    });
  };
  deleteEventSweetAlert = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          warning
          style={{ display: "block", marginTop: "100px" }}
          title="Bist du sicher?"
          onConfirm={() => {
            this.setState({
              alert: false,
              radios: "bg-info",
              eventTitle: undefined,
              eventDescription: undefined,
              eventId: undefined
            })
          }
          }
          onCancel={() => this.deleteEvent()}
          confirmBtnCssClass="btn-secondary"
          cancelBtnBsStyle="danger"
          confirmBtnText="Abbrechen"
          cancelBtnText="Löschen bestätigen"
          showCancel
          btnSize=""
        >
          Dieser Vorgang kann nicht wieder rückgängig gemacht werden!
        </ReactBSAlert>
      )
    });
  };
  deleteEvent = () => {
    var newEvents = this.state.events.filter(
      prop => prop.id + "" !== this.state.eventId
    );
    this.state.event.remove();
    this.setState({
      alert: (
        <ReactBSAlert
          success
          style={{ display: "block", marginTop: "100px" }}
          title="Erfolgreich"
          onConfirm={() => this.setState({ alert: null })}
          onCancel={() => this.setState({ alert: null })}
          confirmBtnBsStyle="primary"
          confirmBtnText="Ok"
          btnSize=""
        >
          Termin erfolgreich gelöscht
        </ReactBSAlert>
      ),
      modalChange: false,
      events: newEvents,
      radios: "bg-info",
      eventTitle: undefined,
      eventDescription: undefined,
      eventId: undefined,
      event: undefined
    });
    this.deleteEventData(this.state.eventId);
  };

  deleteEventData(e_id) {
    debugger;
    delete this.state.events_obj[e_id];
    firebase
      .firestore()
      .collection("instructor_calendars")
      .doc(this.state.user_key)
      .set({
        data: this.state.events_obj
      })
      .catch((error) => console.error("Error updating document", error));
  }
  render() {
    return (
      <>
        {this.state.alert}
        <div className="header header-dark bg-info pb-6 content__title content__title--calendar">
          <Container fluid>
            <div className="header-body">
              <Row className="align-items-center py-4">
                <Col lg="6">
                  <h6 className="fullcalendar-title h2 text-white d-inline-block mb-0 mr-1">
                    {this.state.currentDate}
                  </h6>
                  <Breadcrumb
                    className="d-none d-md-inline-block ml-lg-4"
                    listClassName="breadcrumb-links breadcrumb-dark"
                  >
                    <BreadcrumbItem>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="fas fa-home" />
                      </a>
                    </BreadcrumbItem>
                    <BreadcrumbItem aria-current="page" className="active">
                      Calender
                    </BreadcrumbItem>
                  </Breadcrumb>
                </Col>
                <Col className="mt-3 mt-md-0 text-md-right" lg="6">
                  <Button
                    className="fullcalendar-btn-prev btn-neutral"
                    color="default"
                    onClick={() => {
                      calendar.prev();
                    }}
                    size="sm"
                  >
                    <i className="fas fa-angle-left" />
                  </Button>
                  <Button
                    className="fullcalendar-btn-next btn-neutral"
                    color="default"
                    onClick={() => {
                      calendar.next();
                    }}
                    size="sm"
                  >
                    <i className="fas fa-angle-right" />
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="default"
                    data-calendar-view="month"
                    onClick={() => this.changeView("dayGridMonth")}
                    size="sm"
                  >
                    Monat
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="default"
                    data-calendar-view="basicWeek"
                    onClick={() => this.changeView("timeGridWeek")}
                    size="sm"
                  >
                    Woche
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="default"
                    data-calendar-view="basicDay"
                    onClick={() => this.changeView("timeGridDay")}
                    size="sm"
                  >
                    Tag
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              <Card className="card-calendar">
                <CardHeader>
                  <h5 className="h3 mb-0">Kalender</h5>
                </CardHeader>
                <CardBody className="p-0">
                  <div
                    className="calendar"
                    data-toggle="calendar"
                    id="calendar"
                    ref="calendar"
                  />
                </CardBody>
              </Card>
              <Modal
                isOpen={this.state.modalAdd}
                toggle={() => this.setState({ modalAdd: false })}
                className="modal-dialog-centered modal-secondary"
              >
                <div className="modal-body">
                  <form className="new-event--form">
                    <FormGroup className="mb-0">
                      <label className="form-control-label d-block mb-3">
                        {moment(this.state.startDate).format('Do MMMM YYYY, h:mm')}
                      </label>
                      <div className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          defaultChecked
                          id="captureDrivingLesson"
                          name="custom-radio-1"
                          type="radio"
                          onClick={() =>
                            this.setState({ radios: "bg-primary", eventType: "lesson" })
                          }
                        />
                        <label className="custom-control-label" htmlFor="captureDrivingLesson">
                          Fahrstunde erfassen
                        </label>
                      </div>
                      <div className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          id="blockTimeslot"
                          name="custom-radio-1"
                          type="radio"
                          onClick={() =>
                            this.setState({ radios: "bg-warning", eventType: "block", eventTitle: "Blockiert" })
                          }
                        />
                        <label className="custom-control-label" htmlFor="blockTimeslot">
                          Timeslot blockieren
                        </label>
                      </div>
                    </FormGroup>
                    {this.state.eventType == "block" ? <FormGroup></FormGroup>
                      :
                      <FormGroup>
                        <label className="form-control-label">Fahrschüler erfassen</label>
                        <Input
                          className="form-control-alternative new-event--title"
                          placeholder="Name des Fahrschülers"
                          type="text"
                          required
                          onChange={e =>
                            this.setState({ eventTitle: e.target.value })
                          }
                        />
                      </FormGroup>}
                  </form>
                </div>
                <div className="modal-footer">
                  <Button
                    className="new-event--add"
                    color="primary"
                    type="button"
                    onClick={this.addNewEvent}
                  >
                    Erfassen
                  </Button>
                  <Button
                    className="ml-auto"
                    color="link"
                    type="button"
                    onClick={() => this.setState({ modalAdd: false })}
                  >
                    Schliessen
                  </Button>
                </div>
              </Modal>
              <Modal
                isOpen={this.state.modalChange}
                toggle={() => this.setState({ modalChange: false })}
                className="modal-dialog-centered modal-secondary"
              >
                <div className="modal-body">
                  Termin löschen?
                </div>
                <div className="modal-footer">
                  <Button
                    color="danger"
                    onClick={() =>
                      this.setState({ modalChange: false }, () =>
                        this.deleteEventSweetAlert()
                      )
                    }
                  >
                    Löschen
                  </Button>
                  <Button
                    className="ml-auto"
                    color="link"
                    onClick={() => this.setState({ modalChange: false })}
                  >
                    Abbrechen
                  </Button>
                </div>
              </Modal>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default CalendarView;
