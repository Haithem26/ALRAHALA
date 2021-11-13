import axios from "axios";
import React, { Component } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { getItem } from "../../services/LocaleStorage";

export default class UpdateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      place: "",
      picture: "",
      description: "",
      typeEvent: "",
      urlEvent: "",
      price: 0,
      nbrPlace: 0,
      startEvent: new Date(),
      endEvent: new Date(),
      selectedFile: null,
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
          title: res.data.title,
          place: res.data.place,
          picture: res.data.picture,
          description: res.data.description,
          typeEvent: res.data.typeEvent,
          urlEvent: res.data.urlEvent,
          price: res.data.price,
          nbrPlace: res.data.nbrPlace,
          startEvent: res.data.startEvent,
          endEvent: res.data.endEvent,
        });
      })
      .catch((err) => console.log("error from updatevent", err));
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };
  onUpdateEvent = (e) => {
    var token = getItem("miniblogToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    e.preventDefault();

    const data = new FormData();
    data.append("title", this.state.title);
    data.append("place", this.state.place);
    data.append("description", this.state.description);
    data.append("typeEvent", this.state.typeEvent);
    data.append("urlEvent", this.state.urlEvent);
    data.append("price", this.state.price);
    data.append("nbrPlace", this.state.nbrPlace);
    data.append("startEvent", this.state.startEvent);
    data.append("endEvent", this.state.endEvent);
    data.append("file", this.state.selectedFile);

    axios
      .put(
        `${process.env.REACT_APP_API_URL}api/event/` +
          this.props.match.params.id,
        data,
        config
      )
      .then((res) => {
        this.props.history.push("/list-event/" + this.props.match.params.id);
      })
      .catch((err) => {
        console.log("Error in UpdateBookInfo!", err);
      });
  };

  render() {
    return (
      <Container id="updatepage">
        <Row>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Titre</Form.Label>
                <Form.Control
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter un titre"
                  onChange={this.onChange}
                  value={this.state.title}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Lieu</Form.Label>
                <Form.Control
                  type="text"
                  name="place"
                  id="place"
                  placeholder="Entrer un lieu"
                  onChange={this.onChange}
                  value={this.state.place}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Type d'évennement</Form.Label>
                <Form.Select
                  id="typeEvent"
                  name="typeEvent"
                  value={this.state.typeEvent}
                  onChange={this.onChange}
                >
                  <option value="camping">Camping</option>
                  <option value="Journée détente">Journée détente</option>
                  <option value="Natation">Natation</option>
                  <option value="Vélo de Montagne">Vélo de Montagne</option>
                  <option value="Running-trail">Running-trail</option>
                  <option value="Randonné">Randonné</option>
                  <option value="Randonnée pédestre">Randonnée pédestre</option>
                  <option value="Kayak">Kayak</option>
                  <option value="Saut pendulaire">Saut pendulaire</option>
                  <option value="Baignade">Baignade</option>
                  <option value="Paintball">Paintball</option>
                  <option value="Spéléologie">Spéléologie</option>
                  <option value="Table d'hotes">Table d'hotes</option>
                  <option value="Catamaran">Catamaran</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Prix:</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  id="price"
                  onChange={this.onChange}
                  value={this.state.price}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Nombre de places max:</Form.Label>
                <Form.Control
                  type="number"
                  name="nbrPlace"
                  id="nbrPlace"
                  onChange={this.onChange}
                  value={this.state.nbrPlace}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Date debut:</Form.Label>
                <Form.Control
                  type="date"
                  id="startEvent"
                  name="startEvent"
                  onChange={this.onChange}
                  value={this.state.startEvent}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Date fin:</Form.Label>
                <Form.Control
                  type="date"
                  id="endEvent"
                  name="endEvent"
                  onChange={this.onChange}
                  value={this.state.endEvent}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Lien Reservartion:</Form.Label>
                <Form.Control
                  type="text"
                  id="urlEvent"
                  name="urlEvent"
                  onChange={this.onChange}
                  value={this.state.urlEvent}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>photo:</Form.Label>
                <Form.Control
                  type="file"
                  id="file"
                  name="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={this.onFileChange}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Description de l'évennement</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                name="description"
                id="description"
                onChange={this.onChange}
                value={this.state.description}
              />
            </Form.Group>

            <Button variant="primary" onClick={this.onUpdateEvent}>
              Valider
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
