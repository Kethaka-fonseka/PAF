import React from 'react';
import {Container} from "react-bootstrap";
import {Paper} from "@material-ui/core";

function Desc() {
    return (
       <Container>
        <div  className={"justify-content-center text-center "}>
            <h3 style={{
                fontSize: "25px",
                letterSpacing: "2pt",
                fontStyle:"italic"
            }}>Conference Title</h3>
            <p>
                The 3rd International conference on advancements in computing -2021 (ICAC2021) is organized by the Faculty of Computing of the Sri Lanka Institute of Information Technology (SLIIT) as an open forum for academics along with industry professionals to present the latest findings and research output and practical deployments in the Computer Science and Information Technology domains. Primary objective of the ICAC is to uplift the research culture and the quality of research done by Sri Lankan researchers. This conference will create a platform for national and international researchers to showcase their research output, networking opportunities to discuss innovative ideas, and initiate collaborative work. ICAC 2019 and ICAC 2020 were successfully conducted with a technical co-sponsorship by IEEE Sri Lanka Section and all publications are available in IEEE Xplore digital library
            </p>

        </div>
       </Container>
    );
}

export default Desc;