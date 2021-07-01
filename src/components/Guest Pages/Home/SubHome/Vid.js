import React from 'react';
import BackgroundV from '../../../../assets/video.mp4'
import '../../../../stylesheets/Video.css';
import Timer from "../../../Header/Timer";
import {Button, Col, Container, Row} from "react-bootstrap";
import Popup from "./Popup";



function Vid(props) {

    const Title = props.title;
    const [open, setOpen] = React.useState(false);
    const selectedValue = props.id;
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (value) => {
        setOpen(false);
    };

    return (


<div className={"video-container"}>
            <video  className="video-bg" autoPlay muted loop>
                <source src={BackgroundV} type="video/mp4"/>
            </video>
    <Container >
<div className={"caption text-center"}>
    <h1>{Title} </h1>
    <Button className={"mb-5"} size={"lg"} variant="outline-warning" onClick={handleClickOpen}>Apply Now</Button>
    <Popup  open={open}  selectedValue={selectedValue} onClose={handleClose} />
</div>
    <div className={"justify-content-around"}>
        <Timer/></div>
    </Container>
</div>




    );
}

export default Vid;