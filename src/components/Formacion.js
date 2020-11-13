import React, { Fragment } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Formacion = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col sm={12} className="text-center">
                        <Card border="primary" className="bg-primary" >
                            <Card.Body>
                                <Card.Text className="text-light blockquote">
                                    Técnico Electrónico orientación en Comunicaciones<br />
                                    E.E.T. #1 Martín Miguel de Güemes<br /> 
                                    Longchamps 1993
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
export default Formacion
