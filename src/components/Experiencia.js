import React, { Fragment } from 'react'
import { GiCandlestickPhone, GiSpawnNode } from 'react-icons/gi';
import { CgSmartphoneChip } from 'react-icons/cg'
import { FaNetworkWired, FaNodeJs } from 'react-icons/fa';
import sacoa from '../utils/img/social/logoMin.png';
import darip from '../utils/img/social/darip-256.png';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Experiencia = () => {
    return (
        <Fragment>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2C3E50', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    iconStyle={{ background: '#1E8E5F', color: '#fff' }}
                    icon={<FaNodeJs />}
                    date="2021 - present"
                >
                    <span className="d-flex justify-content-around">
                        <img src={sacoa} alt="sacoaLogo" className="imgLogo" />
                        <h3 className="vertical-timeline-element-subtitle">Managment Company</h3>
                    </span>
                    <h5 className="vertical-timeline-element-subtitle text-center">
                        Sacoa Playcard </h5>
                    <p className="text-center">Nodejs</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2C3E50', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    iconStyle={{ background: '#1E8E5F', color: '#fff' }}
                    icon={<FaNodeJs />}
                    date="2015 - 2020"
                >
                    <span className="d-flex justify-content-around">
                        <h3 className="vertical-timeline-element-subtitle">DarIp - Soluciones</h3>
                        <img src={darip} alt="sacoaLogo" className="imgLogo" />
                    </span>
                    <h5 className="vertical-timeline-element-title text-center">Desarrollador</h5>
                    <p className="text-center">Nodejs, Javascript, Reactjs, Vuejs</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2C3E50', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    iconStyle={{ background: '#1E8E5F', color: '#fff' }}
                    icon={<FaNetworkWired />}
                    date="2009 - 2015"
                >
                    <h3 className="vertical-timeline-element-title">Técnico Instalador</h3>
                    <h4 className="vertical-timeline-element-subtitle">Redes - Wifi - Camara Sistemas de Seguridad - Alarmas</h4>
                    <p>Ubiquiti, Pfsense, Dahua, x28, Paradox</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2C3E50', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    iconStyle={{ background: '#1E8E5F', color: '#fff' }}
                    icon={<GiSpawnNode />}
                    date="2000 - 2010"
                >
                    <h3 className="vertical-timeline-element-title">Técnico en Reparación</h3>
                    <h4 className="vertical-timeline-element-subtitle">Liefrink & Marx</h4>
                    <p>Centrales telefonicas y equipos de telefonía</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2C3E50', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    iconStyle={{ background: '#1E8E5F', color: '#fff' }}
                    icon={<CgSmartphoneChip />}
                    date="1996 - 2000"
                >
                    <h3 className="vertical-timeline-element-title">Técnico en Reparación</h3>
                    <h4 className="vertical-timeline-element-subtitle">Maditel</h4>
                    <p>Centrales telefonicas y equipos de telefonía</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2C3E50', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    iconStyle={{ background: '#1E8E5F', color: '#fff' }}
                    icon={<GiCandlestickPhone />}
                    date="1994 - 1996"
                >
                    <h3 className="vertical-timeline-element-title">Técnico en Reparación</h3>
                    <h4 className="vertical-timeline-element-subtitle">Time Service</h4>
                    <p>Técnico reparación Telefonia</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <hr className="mt-3 mx-5 bg-success" />
        </Fragment>

    )
}

export default Experiencia