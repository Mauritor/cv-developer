import React, { Fragment } from 'react'
import { GiCandlestickPhone, GiSpawnNode } from 'react-icons/gi';
import { CgSmartphoneChip } from 'react-icons/cg'
import { FaNetworkWired, FaNodeJs } from 'react-icons/fa'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Experiencia = () => {
    return (
        <Fragment>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#1d9719', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #1d9719' }}
                    iconStyle={{ background: '#1d9719', color: '#fff' }}
                    icon={<FaNodeJs />}
                    date="2015 - present"
                >
                    <h3 className="vertical-timeline-element-title">Desarrollador</h3>
                    <h4 className="vertical-timeline-element-subtitle">DarIp Soluciones</h4>
                    <p>Nodejs, Javascript, Reactjs, Vuejs</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#9ff79c', color: '#1d9719' }}
                    contentArrowStyle={{ borderRight: '7px solid  #9ff79c' }}
                    iconStyle={{ background: '#9ff79c', color: '#1d9719' }}
                    icon={<FaNetworkWired />}
                    date="2009 - 2015"
                >
                    <h3 className="vertical-timeline-element-title">Técnico Instalador</h3>
                    <h4 className="vertical-timeline-element-subtitle">Redes - Wifi - Camara Sistemas de Seguridad - Alarmas</h4>
                    <p>Ubiquiti, Pfsense, Dahua, x28, Paradox</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#caf8c8', color: '#1d9719' }}
                    contentArrowStyle={{ borderRight: '7px solid  #caf8c8' }}
                    iconStyle={{ background: '#caf8c8', color: '#1d9719' }}
                    icon={<GiSpawnNode />}
                    date="2000 - 2010"
                >
                    <h3 className="vertical-timeline-element-title">Técnico en Reparación</h3>
                    <h4 className="vertical-timeline-element-subtitle">Liefrink & Marx</h4>
                    <p>Centrales telefonicas y equipos de telefonía</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#e6f8e6', color: '#1d9719' }}
                    contentArrowStyle={{ borderRight: '7px solid  #e6f8e6' }}
                    iconStyle={{ background: '#e6f8e6', color: '#1d9719' }}
                    icon={<CgSmartphoneChip />}
                    date="1996 - 2000"
                >
                    <h3 className="vertical-timeline-element-title">Técnico en Reparación</h3>
                    <h4 className="vertical-timeline-element-subtitle">Maditel</h4>
                    <p>Centrales telefonicas y equipos de telefonía</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#e5e9e5', color: '#1d9719' }}
                    contentArrowStyle={{ borderRight: '7px solid  #e5e9e5' }}
                    iconStyle={{ background: '#e5e9e5', color: '#1d9719' }}
                    icon={<GiCandlestickPhone />}
                    date="1994 - 1996"
                >
                    <h3 className="vertical-timeline-element-title">Técnico en Reparación</h3>
                    <h4 className="vertical-timeline-element-subtitle">Time Service</h4>
                    <p>Técnico reparación Telefonia</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </Fragment>

    )
}

export default Experiencia