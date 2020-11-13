import React, { Fragment } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import myavatar from '../utils/img/mau_300x300.png';

const JumboAvatar = () => {
    return (
        <Fragment>
            <Jumbotron fluid className="bg-primary">
                <Container className="d-flex justify-content-around">
                <img
                    width={100}
                    height={100}
                    className="avatar-rounded"
                    src={myavatar}
                    alt="yomesmo"
                />
                    <h3 className="text-success mt-4">
                        Mauro Ragusi
                    </h3>
                </Container>
            </Jumbotron>
        </Fragment>
    )
}

export default JumboAvatar