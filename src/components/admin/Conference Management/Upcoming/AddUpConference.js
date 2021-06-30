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
  const Status = "Upcoming";

  const history = useHistory();

  function sendData(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("ConferenceTitle", CTitle);
    formData.append("Description", Description);
    formData.append("Venue", Venue);
    formData.append("Date", Date);
    formData.append("Seats", Seats);
    formData.append("Status", Status);

    console.log(formData);
    axios
      .post("http://localhost:8070/api/conference/addupconference", formData)
      .then((response) => {
        swal({
          title: "Success",
          text: "Successfully added a conference",
          icon: "success",
          SuccessMode: true,
        }).then((willDelete) => {
          history.push("/");
        });
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <Container>
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
          <Form.Group className="mb-3" controlId="Seats">
            <Form.Label>No of Seats</Form.Label>
            <Form.Control
              name="Seats"
              onChange={(event) => {
                setSeats(event.target.value);
              }}
              type="number"
              placeholder="Normal text"
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
