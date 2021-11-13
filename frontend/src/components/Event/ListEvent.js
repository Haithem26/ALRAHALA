import React, { Component } from "react";

import { Button, Container, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { getItem } from "../../services/LocaleStorage";
import { hasAuthenticated } from "../../services/AuthApi";

export default class ListEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  isauth = hasAuthenticated();
  componentDidMount() {
    var token = getItem("miniblogToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get(`${process.env.REACT_APP_API_URL}api/event/`, config)
      .then((res) => {
        this.setState({
          events: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const events = this.state.events;
    let eventList;

    if (!events) {
      eventList = "pas d'évennement disponible pour le moment ";
    } else if (!this.isauth) {
      return (
        <div id="listevent">
          <div className="title_list">
            <h1>Nos événements:</h1>
          </div>
          <div className="card-flex">
            {
              (eventList = events.map((event, k) => (
                <Container k={event.title}>
                  <Row>
                    <div className="cardEvent">
                      <div className="imgCard">
                        <img src={event.picture}></img>
                      </div>
                      <div className="bodyCard">
                        <div className="header_card">
                          <h1> ||{event.title}||</h1>
                          <ul>
                            <li>
                              <span>Lieu: </span> {event.place}
                            </li>
                            <li>
                              <span>Type d'évennement: </span> {event.typeEvent}
                            </li>
                            <li>
                              <span>Debut de l'évennement: </span>
                              {new Date(event.startEvent).toLocaleDateString()}
                            </li>
                            <li>
                              <span>Fin de l'évennement: </span>
                              {new Date(event.endEvent).toLocaleDateString()}
                            </li>
                            <li>
                              <span>Prix: </span> {event.price} dt
                            </li>
                          </ul>
                        </div>
                        <div className="all_btn">
                          <Button variant="success" className="btn-access">
                            <a
                              href={event.urlEvent}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Participer
                            </a>
                          </Button>
                          <Link
                            to={`/single-event/${event._id}`}
                            className="btn-access"
                          >
                            <Button variant="info">Consulter</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Container>
              )))
            }
          </div>
          ;
        </div>
      );
    } else {
      return (
        <div id="listevent">
          <div className="title_list">
            <h1>Nos événements:</h1>
            <Link to="/add-new-event">
              <Button variant="danger">Ajouter un évenement</Button>{" "}
            </Link>
          </div>
          <div className="card-flex">
            {
              (eventList = events.map((event, k) => (
                <Container>
                  <Row>
                    <div className="cardEvent">
                      <div className="imgCard">
                        <img src={event.picture}></img>
                      </div>
                      <div className="bodyCard">
                        <div className="header_card">
                          <h1> ||{event.title}||</h1>
                          <ul>
                            <li>
                              <span>Lieu: </span> {event.place}
                            </li>
                            <li>
                              <span>Type d'évennement: </span> {event.typeEvent}
                            </li>
                            <li>
                              <span>Debut de l'évennement: </span>
                              {new Date(event.startEvent).toLocaleDateString()}
                            </li>
                            <li>
                              <span>Fin de l'évennement: </span>
                              {new Date(event.endEvent).toLocaleDateString()}
                            </li>
                            <li>
                              <span>Prix: </span> {event.price} dt
                            </li>
                          </ul>
                        </div>
                        <div className="all_btn">
                          <Button variant="success" className="btn-access">
                            <a
                              href={event.urlEvent}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Participer
                            </a>
                          </Button>
                          <Link
                            to={`/update-event/${event._id}`}
                            className="btn-access"
                          >
                            <Button variant="warning">Modifier</Button>
                          </Link>
                          <Link
                            to={`/single-event/${event._id}`}
                            className="btn-access"
                          >
                            <Button variant="info">Consulter</Button>{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Container>
              )))
            }
          </div>
          ;
        </div>
      );
    }

    return <div>{eventList}</div>;
  }
}
