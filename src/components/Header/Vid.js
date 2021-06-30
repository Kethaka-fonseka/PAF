import React from 'react';
import BackgroundV from '../../assets/video.mp4'
import '../../stylesheets/Video.css';
import Timer from "./Timer";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Box} from "@material-ui/core";



function Vid() {
    return (


<div className={"video-container"}>
            <video  className="video-bg" autoPlay muted loop>
                <source src={BackgroundV} type="video/mp4"/>
            </video>
    <Container >
<div className={"caption text-center"}>
    <h1>Conference Title </h1>
    <Button className={"mb-5"} size={"lg"} variant="outline-warning">Apply Now</Button>

</div>
    <div className={"justify-content-around"}>
        <Timer/></div>
    </Container>
</div>




    );
}

export default Vid;