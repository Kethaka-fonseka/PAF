import React from 'react';
import '../../../../stylesheets/Speakers.css'
import {Col, Container, Row} from "react-bootstrap";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Speakers() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="box">
                        <img src="https://i.postimg.cc/Ssz6spNs/annie-spratt-p-DGNBK9-A0sk-unsplash.jpg" alt=""/>
                        <div className="overlay text-center">
                            <h3>Speaker Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis quibusdam omnis
                        assumenda, ipsa doloribus labore aut suscipit in id nam iure</p>
                            <div className={"text-center"}>
                                <FacebookIcon/>
                                <LinkedInIcon/>
                                <TwitterIcon/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="box">
                        <img src="https://i.postimg.cc/Ssz6spNs/annie-spratt-p-DGNBK9-A0sk-unsplash.jpg" alt=""/>
                        <div className="overlay text-center">
                            <h3>Speaker Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis quibusdam omnis
                                assumenda, ipsa doloribus labore aut suscipit in id nam iure</p>
                            <div className={"text-center"}>
                                <FacebookIcon/>
                                <LinkedInIcon/>
                                <TwitterIcon/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="box">
                        <img src="https://i.postimg.cc/Ssz6spNs/annie-spratt-p-DGNBK9-A0sk-unsplash.jpg" alt=""/>
                        <div className="overlay text-center">
                            <h3>Speaker Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis quibusdam omnis
                                assumenda, ipsa doloribus labore aut suscipit in id nam iure</p>
                            <div className={"text-center"}>
                                <FacebookIcon/>
                                <LinkedInIcon/>
                                <TwitterIcon/>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Speakers;