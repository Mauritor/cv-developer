import React, { Fragment } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'


const Acerca = () => { 
    return(
        <Fragment>
             <Container>
                <Row>
                    <Col sm={12} className="text-center">
                        <Card border="primary" className="bg-primary" >
                            <Card.Body>
                                <Card.Text>
                                    <p className="text-light blockquote"> 
                                    La Calandria 1875 <br />
                                    Villa Adelina - San Isidro (Bs.As.)<br />
                                    17 Abril 1975<br />
                                    <span className="text-info">+54 11 1558 8759</span>  <br />
                                    <span className="text-warning">mrtelefonia@gmail.com</span>
                                    </p>
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

export default Acerca