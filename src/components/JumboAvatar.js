import React, { Fragment } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { useTransition, animated } from "react-spring";
import myavatar from '../utils/img/mau_300x300.png';
import pdf from '../utils/img/pdf_file.png'

const JumboAvatar = () => {
    const showImage = useTransition(myavatar, (item) => item, {
        from: {
            opacity: 0,
            //width: 50
        },
        enter: {
            opacity: 1,
           // width: 100
        },
        leave: {
            opacity: 0
        },
        config: {
            duration: 5000,
            mass: 200,
            tension: 170,
            friction: 150
        }
    });
    const showPdf = useTransition(pdf, (item) => item, {
        from: {
            opacity: 0,
            //width: 50
        },
        enter: {
            opacity: 1,
            //width: 75
        },
        leave: {
            opacity: 0
        },
        config: {
            duration: 8000,
            mass: 200,
            tension: 170,
            friction: 150
        }
    });
    return (
        <Fragment>
            <Jumbotron fluid className="bg-primary">
                <Container className="text-right mt-0">
                    <a href="https://drive.google.com/file/d/1K0HXE14GER-hzrombzbHmGp3x4yJUHNO/view?usp=sharing" target="blank">
                    {showPdf.map(({ item, props, key }) => (
                        <animated.img
                            style={props}
                            key={key}
                            src={pdf}
                            width={72}
                            height={72}
                            className="avatar-rounded"
                            alt="yomesmo"
                        ></animated.img>
                    ))}
                        </a>
                </Container>

                <Container className="d-flex justify-content-around">
                    {showImage.map(({ item, props, key }) => (
                        <animated.img
                            style={props}
                            key={key}
                            src={myavatar}
                            width={100}
                            height={100}
                            className="avatar-rounded"
                            alt="yomesmo"
                        ></animated.img>
                    ))}

                    <h3 className="text-success mt-4">
                        Mauro Ragusi
                    </h3>
                </Container>
            </Jumbotron>
        </Fragment>
    )
}

export default JumboAvatar
