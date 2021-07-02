import React, { useEffect, useState } from "react";
import { Card, Container, Form, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import FormData from "form-data";
import axios from "axios";
import swal from "sweetalert";
import { Button } from "@material-ui/core";

function AddUpConference() {
  const [CTitle, setCTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Venue, setVenue] = useState("");
  const [Date, setDate] = useState("");
  const [Seats, setSeats] = useState("");
  const [ResearcherFee, setResearcherFee] = useState(0);
  const [ParticipantsFee, setParticipantsFee] = useState(0);


  const history = useHistory();

  function sendData(event) {
    event.preventDefault();

   const conData = {
     con_title: CTitle,
     description: Description,
     venue: Venue,
     seats: Seats,
     date: Date,
     researcher_fee:ResearcherFee,
     participant_fee:ParticipantsFee,

   }
    console.log(conData);
    axios
      .post("http://localhost:8070/api/conferences/add", conData)
      .then((response) => {
        swal({
          title: "Success",
          text: "Successfully added a conference",
          icon: "success",
          SuccessMode: true,
        }).then((willDelete) => {
          history.push("/admin/upcoming-management");
        });
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <Container className={"pt-3"}>

      <Card className={"p-4 mb-3"}>
        <h1 className="text-center sub-titles ">ADD UPCOMING CONFERENCE</h1>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="ConferenceTitle">
            <Form.Label>Conference Title</Form.Label>
            <Form.Control
              name="ConferenceTitle"
              onChange={(event) => {
                setCTitle(event.target.value);
              }}
              type="text"
              placeholder="Conference Title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="Description"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Venue">
            <Form.Label>Venue</Form.Label>
            <Form.Control
              name="Venue"
              onChange={(event) => {
                setVenue(event.target.value);
              }}
              type="text"
              placeholder="Venue"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Date">
            <Form.Label>Date</Form.Label>
            <Form.Control
                name="Date"
                onChange={(event) => {
                  setDate(event.target.value);
                }}
                type="date"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Seats">
            <Form.Label>No of Seats</Form.Label>
            <Form.Control
              name="Seats"
              onChange={(event) => {
                setSeats(event.target.value);
              }}
              type="number"
              placeholder="Seats"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ResearcherFee">
            <Form.Label>Researcher Fee</Form.Label>
            <Form.Control
                name="ResearcherFee"
                onChange={(event) => {
                  setResearcherFee(event.target.value);
                }}
                type="number"
                placeholder="Researcher Fees"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ParticipantsFee">
            <Form.Label>Partcipants Fee</Form.Label>
            <Form.Control
                name="ParticipantsFee"
                onChange={(event) => {
                  setParticipantsFee(event.target.value);
                }}
                type="number"
                placeholder="Participants Fee"
            />
          </Form.Group>

          <Button
            onClick={(event) => {
              sendData(event);
            }}
            type="submit"
            fullWidth
            variant="contained"
            color={"primary"}
          >
            {" "}
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default AddUpConference;
