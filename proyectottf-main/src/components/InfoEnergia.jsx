import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import eolicaImg from '../aseets/eolica.png';
import solarImg from '../aseets/solar.png';
import hidroImg from '../aseets/hidro.png';
import biomasaImg from '../aseets/bioenergia.png';
import geotermicaImg from '../aseets/geotermica.png';
import './InfoEnergia.css'; 

const InfoEnergia = () => {
  const tarjetas = [
    {
      titulo: 'Eólica',
      imagen: eolicaImg,
      texto: 'Se obtiene del viento mediante aerogeneradores. Es limpia, renovable y cada vez más popular.',
    },
    {
      titulo: 'Solar',
      imagen: solarImg,
      texto: 'Proviene del sol. Se transforma en electricidad o calor usando paneles solares. Gratis, abundante y ecológica.',
    },
    {
      titulo: 'Hidroeléctrica',
      imagen: hidroImg,
      texto: 'Generada por el movimiento del agua (ríos o presas). Es renovable y muy usada, aunque puede afectar ecosistemas.',
    },
    {
      titulo: 'Bioenergía',
      imagen: biomasaImg,
      texto: 'Proviene de materia orgánica (como residuos agrícolas o madera). Puede usarse como combustible o electricidad.',
    },
    {
      titulo: 'Geotérmica',
      imagen: geotermicaImg,
      texto: 'Aprovecha el calor del interior de la Tierra. Sirve para generar electricidad o calefacción directa.',
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Energía Renovable</h1>
      <p className="text-center mb-4">Las energías renovables son fuentes de energía obtenidas de recursos naturales que se regeneran continuamente, como el sol, el viento y el agua. Se caracterizan por ser inagotables y por no generar emisiones de gases de efecto invernadero. 
      <br></br></p>
      <h2 className="mb-4">Tipos de Energías Renovables</h2>
      <Row className="justify-content-center">
        {tarjetas.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={2} className="mb-4">
            <Card className="h-100 shadow energia-card">
              <Card.Img variant="top" src={card.imagen} className="card-img-top-custom" />
              <Card.Body className="d-flex flex-column justify-content-start">
                <Card.Title className="text-center mt-2">{card.titulo}</Card.Title>
                <Card.Text className="text-justify mt-2">{card.texto}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Link to="/estimador" className="btn btn-primary me-2">
          Ir al estimador
        </Link>
        <Link to="/graficos" className="btn btn-primary">
          Ver estadísticas
        </Link>
      </div>
    </Container>
  );
};

export default InfoEnergia;
