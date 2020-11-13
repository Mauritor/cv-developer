import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import whatsapp from '../utils/img/social/whatsapp_128.png';
import email from '../utils/img/social/email_128.png';
import linkdin from '../utils/img/social/in_128.png';
import github from '../utils/img/social/github_128.png';
import web from '../utils/img/social/link_128.png';

const Footer = () => {
    return (
        <Fragment>
            <Container className="d-flex justify-content-center mt-5">
                <img src={whatsapp} className="mySocial img-thumbnail mx-2 " alt="whatsapp"/>
                <img src={email} className="mySocial img-thumbnail mx-2 " alt="email"/>
                <img src={linkdin} className="mySocial img-thumbnail mx-2 " alt="linkedin"/>
                <img src={github} className="mySocial img-thumbnail mx-2 " alt="github"/>
                <img src={web} className="mySocial img-thumbnail mx-2 " alt="web"/>
            </Container> 
        </Fragment>
    )
}

export default Footer