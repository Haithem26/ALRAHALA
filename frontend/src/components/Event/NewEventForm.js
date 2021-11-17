import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { getItem } from "../../services/LocaleStorage";

const NewEventForm = ({ history }) => {
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [typeEvent, setTypeEvent] = useState("");
  const [urlEvent, setUrlEvent] = useState("");
  const [price, setPrice] = useState(0);
  const [nbrPlace, setNbrPlace] = useState(0);
  const [startEvent, setStartEvent] = useState("");
  const [endEvent, setEndEvent] = useState("");
  const [file, setFile] = useState();
  const today = new Date().toLocaleString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  console.log("today global", today);
  const handlePost = async (e) => {
    var token = getItem("miniblogToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    e.preventDefault();
    const err_formd = document.getElementById("err_form");
    const err_date = document.getElementById("err_form");

    if (
      title === "" ||
      place === "" ||
      description === "" ||
      typeEvent === "" ||
      urlEvent === "" ||
      price === "" ||
      nbrPlace === "" ||
      startEvent === "" ||
      endEvent === "" ||
      file === null
    ) {
      err_formd.innerHTML = `<p className="danger">Vous avez un champs vide </p>`;
    } else if (
      new Date(startEvent).toLocaleString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }) <
      new Date(today).toLocaleString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })
    ) {
      err_date.innerHTML = `<p className="danger">date incorrect</p>`;
      console.log("startEvent", startEvent);
      console.log("today in test", today);
      console.log("test date ok");
    } else {
      const data = new FormData();
      data.append("title", title);
      data.append("place", place);
      data.append("description", description);
      data.append("typeEvent", typeEvent);
      data.append("urlEvent", urlEvent);
      data.append("price", price);
      data.append("nbrPlace", nbrPlace);
      data.append("startEvent", startEvent);
      data.append("endEvent", endEvent);
      data.append("file", file);

      axios
        .post(`${process.env.REACT_APP_API_URL}api/event`, data, config)
        .then((res) => {
          console.log(
            "startevent",
            new Date(startEvent).toLocaleString("fr-FR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            })
          );
          history.push("/list-event");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container className="new_event">
      <Row>
        <h3>Nouveau évennement:</h3>
        <div className="add_event">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Titre</Form.Label>
                <Form.Control
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter un titre"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Lieu</Form.Label>
                <Form.Control
                  type="text"
                  name="place"
                  id="place"
                  placeholder="Entrer un lieu"
                  onChange={(e) => setPlace(e.target.value)}
                  value={place}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Type d'évennement</Form.Label>
                <Form.Select
                  id="typeEvent"
                  name="typeEvent"
                  value={typeEvent}
                  onChange={(e) => setTypeEvent(e.target.value)}
                  placeholder="choisir"
                >
                  <option> choisir</option>
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
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Nombre de places max:</Form.Label>
                <Form.Control
                  type="number"
                  name="nbrPlace"
                  id="nbrPlace"
                  onChange={(e) => setNbrPlace(e.target.value)}
                  value={nbrPlace}
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
                  onChange={(e) => setStartEvent(e.target.value)}
                  value={startEvent}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Date fin:</Form.Label>
                <Form.Control
                  type="date"
                  id="endEvent"
                  name="endEvent"
                  onChange={(e) => setEndEvent(e.target.value)}
                  value={endEvent}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Lien Reservartion:</Form.Label>
                <Form.Control
                  type="text"
                  id="urlEvent"
                  name="urlEvent"
                  onChange={(e) => setUrlEvent(e.target.value)}
                  value={urlEvent}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>photo:</Form.Label>
                <Form.Control
                  type="file"
                  id="file"
                  name="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => setFile(e.target.files[0])}
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
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </Form.Group>
            <div id="err_form"> </div>

            <Button variant="primary" onClick={handlePost}>
              Valider
            </Button>
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default NewEventForm;
