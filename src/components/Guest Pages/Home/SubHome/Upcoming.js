import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Divider, Typography} from "@material-ui/core";


function Upcoming( props) {

    return (

                <Col xs ="4" className={"mb-3"}>
                    <Card  text={"secondary"} className={"text-center"}  >
                        <Card.Body >
                           <h3 style={{
                               fontSize: "25px",
                               letterSpacing:"2pt"
                           }}> {props.conference.con_title} </h3>
                            <Divider className={"m-2"}/>
                            <footer className="blockquote-footer">
                                Date <cite title="Company">{props.conference.date}</cite>
                            </footer>
                            <footer className="blockquote-footer">
                                Organized by <cite title="Company">{props.conference.venue}</cite>
                            </footer>
                            <Card.Text>
                                {props.conference.description}
                            </Card.Text>
                            <Button disabled variant="outline-primary">{props.conference.seats}</Button>
                        </Card.Body>
                    </Card>
                </Col>
    );
}

export default Upcoming;