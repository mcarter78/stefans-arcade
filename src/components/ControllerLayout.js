import React, { useEffect, useState } from 'react';

import { Col, Row } from 'antd';

import redBtn from '../images/button_red.png';
import blueBtn from '../images/button_blue.png';
import greenBtn from '../images/button_green.png';
import yellowBtn from '../images/button_yellow.png';
import whiteBtn from '../images/button_white.png';

const buttonLabel = {
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: '0.8rem',
    margin: 0
}

function ControllerLayout(props) {

    return <>
        <div className="controller-layout-container">
            <Row gutter={[16, 16]} style={{ textAlign: 'center' }}>
                <Col span={6}></Col>
                <Col span={6}>
                    <p style={buttonLabel}>{props.game.buttons.high_punch}</p>
                    <img className="high_punch_btn" src={redBtn} width={80} onClick={props.handleBtnClick} />
                </Col>
                <Col span={6}></Col>
                <Col span={6}>
                    <p style={buttonLabel}>{props.game.buttons.high_kick}</p>
                    <img className="high_kick_btn" src={blueBtn} width={80} onClick={props.handleBtnClick} />
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ textAlign: 'center' }}>
                <Col span={6}></Col>
                <Col span={6}></Col>
                <Col span={6}>
                    <p style={buttonLabel}>{props.game.buttons.block}</p>
                    <img className="block_btn" src={whiteBtn} width={80} onClick={props.handleBtnClick} />
                </Col>
                <Col span={6}></Col>
            </Row>
            <Row gutter={[16, 16]} style={{ textAlign: 'center' }}>
                <Col span={6}></Col>
                <Col span={6}>
                    <p style={buttonLabel}>{props.game.buttons.low_punch}</p>
                    <img className="low_punch_btn" src={yellowBtn} width={80} onClick={props.handleBtnClick} />
                </Col>
                <Col span={6}></Col>
                <Col span={6}>
                    <p style={buttonLabel}>{props.game.buttons.low_kick}</p>
                    <img className="low_kick_btn" src={greenBtn} width={80} onClick={props.handleBtnClick} />
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ textAlign: 'center' }}>
                <Col span={6}>
                    <p style={buttonLabel}>{props.game.buttons.run}</p>
                    <img className="run_btn" src={blueBtn} width={80} onClick={props.handleBtnClick} />
                </Col>
                <Col span={6}></Col>
                <Col span={6}></Col>
                <Col span={6}></Col>
            </Row>
        </div>
    </>
}

export default ControllerLayout;