import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Camping from "../components/carousel/Camping";
import Kayak from "../components/carousel/Kayak";
import Plongee from "../components/carousel/Plongee";
import Randonne from "../components/carousel/Randonne";
import Speleologie from "../components/carousel/Speleologie";
import Tyrolienne from "../components/carousel/Tyrolienne";
function Services() {
  return (
    <div id="services" className="servParallax">
      <Container fluid className="headerservice">
        <Row>
          <Col>
            <div id="presentation">
              <h1>Qui sommes nous ?</h1>
              <p>
                Le camping ou campisme est une activité touristique qui consiste
                à séjourner au même endroit sous une tente, une caravane ou
                encore dans un camping-car. Elle utilise notamment une caravane,
                un clip car ou un camping-car. Hébergement touristique pendant
                les vacances ou de loisirs, il devient depuis quelques années un
                recours à des familles dans des conditions de vie précaires.
              </p>
            </div>
          </Col>
          <Col className="video_pres">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/2UPWq8gWuVo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>

      <Container>
        <h1>Nos Services</h1>
        <Row>
          <Col>
            <Randonne />
          </Col>
          <Col>
            <h2>Randonnée Pédestre</h2>
            <span>6 heures 30 minutes ou plus · À partir de 30 DT</span>
            <p>
              La randonnée est une activité douce et accessible à tous, qui fait
              travailler le cardio (en altitude, on s’essouffle plus vite) et
              qui fait travailler presque toutes les parties du corps. Rien ne
              vaut une bonne fatigue d’après rando; sommeil profond et zénitude
              assurés au réveil (courbatures aussi) ! - C’est bon pour la santé
              mais aussi pour le moral : on se lave le cerveau (on laisse les
              soucis à la maison), on partage des bons moments avec nos amis, et
              on fait le plein d’air pur en admirant le paysage.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Camping</h2>
            <span>8 heures 30 minutes ou plus · À partir de 45 DT</span>
            <p>
              Le camping est une activité touristique qui consiste à séjourner
              au même endroit sous une tente, une caravane ou encore dans un
              camping-car. On peut s'installer sur un terrain de camping
              aménagé, un camping naturiste ou faire du camping sauvage. Style
              de vacances économique et populaire au moment de la généralisation
              des congés payés, le camping évolue vers ce qu'on appelle
              aujourd'hui l'hôtellerie de plein air avec de nombreuses
              prestations associées. Nombre de jours : 2jrs au minimum.
            </p>
          </Col>
          <Col>
            <Camping />
          </Col>
        </Row>
        <Row>
          <Col>
            <Plongee />
          </Col>
          <Col>
            <h2>Plongée sous-marine</h2>
            <span>15 minutes ou plus · À partir de 85 DT</span>
            <p>
              La plongée sous-marine est une activité consistant à rester sous
              l'eau marine soit en apnée dans le cas de la plongée libre, soit
              en respirant à l'aide d'un narguilé (tuyau apportant de l'air
              depuis la surface) ou le plus souvent en s'équipant d'une
              bouteille de plongée dans le cas de la plongée en scaphandre
              autonome.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Canoë-kayak</h2>
            <span>4 heures 30 minutes ou plus · À partir de 55 DT</span>
            <p>
              Le canoë-kayak est une activité physique de loisir ou sportive,
              pratiquée avec des embarcations propulsées à la pagaie, notamment
              le canoë, le kayak, le raft, ou la pirogue. Cette activité est
              également désignée par « sports de pagaie ».
            </p>
          </Col>
          <Col>
            <Kayak />
          </Col>
        </Row>
        <Row>
          <Col>
            <Speleologie />
          </Col>
          <Col>
            <h2>Spéléologie</h2>
            <span>4 heures 30 minutes ou plus · À partir de 55 DT</span>
            <p>
              La spéléologie est une activité à multiples facettes :
              scientifique, sportive, technique, contemplative. Elle se pratique
              principalement dans les régions karstiques. Cependant les
              spéléologues s'intéressent aussi aux cavités tectoniques,
              volcaniques (tunnels de lave), glaciaires et anthropiques
              (carrières souterraines, habitats troglodytes, souterrains...).
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Tyrolienne</h2>
            <span>5 heures 30 minutes ou plus · À partir de 55 DT</span>
            <p>
              La tyrolienne est un système de transport sur filin. Il s'agit
              d'un mode de déplacement utilisé pour la traversée en hauteur d'un
              obstacle dénivelé comme une douve ou autre cuvette naturelle ou
              artificielle.
            </p>
          </Col>
          <Col>
            <Tyrolienne />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
