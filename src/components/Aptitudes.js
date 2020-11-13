import React,{ Fragment } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Aptitudes = () => { 
    return(
        <Fragment>
<Container>
                <Row>
                    <Col sm={12} className="text-center">
                        <Card border="primary" className="bg-primary" >
                            <Card.Body>
                                <Card.Text className="text-light blockquote">
                                    Desarrollador de software en el entorno de Nodejs.<br />    Anteriormente trabajé como Instalador Redes estructuradas, Wifi, Sistemas de seguridad (Cámaras - Alarmas). <br /> Hoy juego con el código y reflexiono sobre la relación entre cultura y tecnología. <br />Tengo la capacidad para resolver problemas de forma eficaz.<br /> Siempre al día con versiones actualizadas y aprendiendo nuevas tecnologías, <br />para implementarlas en ideas que surgen continuamente.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <hr className="mx-5 bg-success"/>
        </Fragment>
    )
}

export default Aptitudes