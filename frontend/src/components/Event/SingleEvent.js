import axios from "axios";
import React, { Component } from "react";
import { Container, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getItem } from "../../services/LocaleStorage";
import { hasAuthenticated } from "../../services/AuthApi";

export default class SingleEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}api/event/` +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          events: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onDeleteClick = () => {
    var token = getItem("miniblogToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}api/event/` +
          this.props.match.params.id,
        config
      )
      .then((res) => {
        alert(
          `votre evennement **${this.state.events.title}** a été supprimé avec sucee`
        );
        this.props.history.push("/list-event");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const isauth = hasAuthenticated();
    const event = this.state.events;

    if (isauth) {
      return (
        <div id="singleEvent">
          <Container>
            <Row>
              <div className="single_card">
                <div className="sinImg">
                  <img src={event.picture}></img>
                </div>

                <div className="singbody">
                  <div>
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
                        <span>Fin de l'évennement: </span>{" "}
                        {new Date(event.endEvent).toLocaleDateString()}
                      </li>
                      <li>
                        <span>Nbre de places max: </span> {event.nbrPlace}
                      </li>
                      <li>
                        <span>Prix: </span> {event.price} dt
                      </li>
                      <li>
                        <span>Description: </span>
                      </li>
                    </ul>
                    <h4> Description:</h4>
                    <p>{event.description}</p>
                  </div>

                  <div className="all_btn_sing">
                    <Button variant="success" className="btn-access">
                      <a href={event.urlEvent} target="_blank" rel="noreferrer">
                        Participer
                      </a>
                    </Button>
                    <Link
                      to={`/update-event/${event._id}`}
                      className="btn-access"
                    >
                      <Button variant="warning">Modifier</Button>
                    </Link>
                    <Button
                      onClick={this.onDeleteClick}
                      variant="danger"
                      className="btn-access"
                    >
                      Supprimer
                    </Button>
                    <Link to={`/list-event`} className="btn-access">
                      <Button variant="dark">Retour</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
          ;
        </div>
      );
    } else {
      return (
        <div id="singleEvent">
          <Container>
            <Row>
              <div className="single_card">
                <div className="sinImg">
                  <img src={event.picture}></img>
                </div>

                <div className="singbody">
                  <div>
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
                        <span>Fin de l'évennement: </span>{" "}
                        {new Date(event.endEvent).toLocaleDateString()}
                      </li>
                      <li>
                        <span>Nbre de places max: </span> {event.nbrPlace}
                      </li>
                      <li>
                        <span>Prix: </span> {event.price} dt
                      </li>
                      <li>
                        <span>Description: </span>
                      </li>
                    </ul>
                    <h4> Description:</h4>
                    <p>{event.description}</p>
                  </div>

                  <div className="all_btn_sing">
                    <Button variant="success" className="btn-access">
                      <a href={event.urlEvent} target="_blank" rel="noreferrer">
                        Participer
                      </a>
                    </Button>
                    <Link to={`/list-event`} className="btn-access">
                      <Button variant="dark">Retour</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
          ;
        </div>
      );
    }
  }
}
