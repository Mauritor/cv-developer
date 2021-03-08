import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import TagCloud from 'react-tag-cloud'

const Skills = () => {
    const [seconds, setSeconds] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 3000);
        return () => clearInterval(interval)
    }, [])
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col sm={{ span: 8, offset: 2 }} className="text-center" >
                        <TagCloud
                            style={{
                                fontFamily: 'sans-serif',
                                fontWeight: 'bold',
                                width: '75%',
                                height: '100%'
                            }}
                            rotate={() => Math.round(Math.random()) * 90}
                            className="p-5"
                            >
                            <div style={{ fontSize: 38, color: '#48CEF7' }}>Reactjs</div>
                            <div style={{ fontSize: 48, color: '#7FC728' }}>Nodejs</div>
                            <div style={{ fontSize: 48, color: '#EFD81D' }}>Javascript</div>
                            <div style={{ fontSize: 26, color: '#00BB7C' }}>Vuejs</div>
                            <div style={{ fontSize: 36, color: '#4D989F' }}>Express</div>
                            <div style={{ fontSize: 30, color: '#e00097' }}>Graphql</div>
                            <div style={{fontSize: 28, color: '#E84D31'}}>Git</div>
                            <div style={{fontSize: 26, color: '#1A1E22'}}>GitHub</div>
                            <div style={{fontSize: 36, color: '#569234'}}>Mongodb</div>
                            <div style={{fontSize: 24, color: '#002D4B'}}>Sqlite</div>
                            <div style={{fontSize: 34, color: '#F6BE00'}}>Firebase</div>
                            <div style={{fontSize: 22, color: '#00B3E9'}}>JWT</div>
                            <div style={{fontSize: 42, color: '#533B78'}}>Bootstrap</div>
                            <div style={{fontSize: 24, color: '#254BDD'}}>Css</div>
                            <div style={{fontSize: 40, color: '#DD4B25'}}>HTML5</div>
                            <div style={{fontSize: 24, color: '#F7F7F7'}}>Cordova Apache</div>
                            <div style={{fontSize: 32, color: '#3FD9F5'}}>React-Bootstrap</div>
                            <div style={{fontSize: 32, color: '#B84A43'}}>Next.js</div>
                            <div style={{fontSize: 30, color: '#F76A71'}}>Materialize</div>
                            <div style={{fontSize: 30, color: '#F7F7F7'}}>Font-Awesome</div>
                            <div style={{fontSize: 28, color: '#00B0FF'}}>Material-Ui</div>
                            <div style={{fontSize: 24, color: '#F3BB81'}}>Parcel</div>
                            <div style={{fontSize: 34, color: '#A91E50'}}>Ejs</div>
                            <div style={{fontSize: 32, color: '#880000'}}>Mongoose</div>
                            <div style={{fontSize: 28, color: '#8E75FF'}}>Strapi</div>
                            <div style={{fontSize: 28, color: '#3492FF'}}>Lodash_</div>
                            <div style={{fontSize: 8, color: 'transparent'}}>{seconds}</div>
                        </TagCloud>
                    </Col>
                </Row>
            </Container>
        </Fragment >
    )
}

export default Skills