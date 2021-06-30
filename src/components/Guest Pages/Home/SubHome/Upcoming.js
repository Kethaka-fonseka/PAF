import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Divider, Typography} from "@material-ui/core";


function Upcoming() {





    return (
        <Container>
            <Row className="g-3" >
                <Col xs ="4" className={"mb-3"}>
                    <Card text={"secondary"} className={"text-center"}  >
                        <Card.Body>
                           <h3 style={{
                               fontSize: "25px",
                               letterSpacing:"2pt"
                           }}> Conference </h3>
                            <Divider className={"m-2"}/>
                            <footer className="blockquote-footer">
                                Date <cite title="Company">2022-2-22</cite>
                            </footer>
                            <footer className="blockquote-footer">
                                Organized by <cite title="Company">Sri Lanka Institute of Information Technology - SLIIT</cite>
                            </footer>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="outline-primary">Reserve</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
}

export default Upcoming;