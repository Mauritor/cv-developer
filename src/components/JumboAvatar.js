import React, { Fragment } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import myavatar from '../utils/img/mau_300x300.png';
import pdf from '../utils/img/pdf_file.png'

const JumboAvatar = () => {
    return (
        <Fragment>
            <Jumbotron fluid className="bg-primary">
                <Container className="text-right mt-0">
                <a href="https://drive.google.com/file/d/1K0HXE14GER-hzrombzbHmGp3x4yJUHNO/view?usp=sharing" target="blank">
                    <img
                        width={72}
                        height={72}
                        className="avatar-rounded"
                        src={pdf}
                        alt="yomesmo"
                    /></a>
                </Container>

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