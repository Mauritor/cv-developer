import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import whatsapp from '../utils/img/social/whatsapp_128.png';
import email from '../utils/img/social/email_128.png';
import linkdin from '../utils/img/social/in_128.png';
import github from '../utils/img/social/github_128.png';
import web from '../utils/img/social/link_128.png';

const mywhatsapp = 'https://wa.me/541158578759?text=Hola..';
const mycorreo = 'mailto:mrtelefonia@gmail.com';
const mylinkedin = 'https://www.linkedin.com/in/mauro-ragusi/';
const mygithub = 'https://github.com/Mauritor';
const myweb = 'https://darip.herokuapp.com/';
const Footer = () => {
    return (
        <Fragment>
            <Container
                className="d-flex justify-content-center"
                style={{ marginTop: 150, marginBottom: 20 }}>
                <a href={mywhatsapp}>
                    <img src={whatsapp} className="mySocial img-thumbnail mx-2 " alt="whatsapp" />
                </a>
                <a href={mycorreo}>
                    <img src={email} className="mySocial img-thumbnail mx-2 " alt="email" />
                </a>
                <a href={mylinkedin}>
                    <img src={linkdin} className="mySocial img-thumbnail mx-2 " alt="linkedin" />
                </a>
                <a href={mygithub}>
                    <img src={github} className="mySocial img-thumbnail mx-2 " alt="github" />
                </a>
                <a href={myweb}>
                    <img src={web} className="mySocial img-thumbnail mx-2 " alt="web" />
                </a>
            </Container>
        </Fragment>
    )
}

export default Footer