import React, {useState} from "react";
import { Card, Container, Form } from "react-bootstrap";
import {Button, TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function EditSchedule(props) {

  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [publish_date, setPublish_date] = useState("");
    const [doc_date, setDoc_date] = useState("");
  const [conference_data, setConference_data] = useState("");
  const history = useHistory();

  function sendData(event) {
    event.preventDefault();

    const conData = {
      reg_start_date: start_date,
        doc_end_date: doc_date,
      reg_end_date: end_date,
      publish_date: publish_date,
      conference_date: conference_data,
      conference: props.match.params.id,


    }
    console.log(conData);
    axios
        .post("http://localhost:8070/api/schedules/add", conData)
        .then((response) => {
          swal({
            title: "Success",
            text: "Successfully added a timeline",
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
    <div>
      <Container>
        <Card className={"p-4 mb-3"}>
          <h1 className="text-center sub-titles ">ADD TIMELINE FOR CURRENT MAIN EVENT</h1>
          <hr />
          <Form>
              <TextField

                  className={"p-2"}
                  id="date"
                  label="Registration starting Date /Document submission starting date"
                  type="date"
                  fullWidth
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                      shrink: true,
                  }}
                  onChange={(event) => {
                      setStart_date(event.target.value);
                  }}
              />
              <br/>
              <TextField
                  id="date"
                  className={"p-2"}
                  label="Document submission end date"
                  type="date"
                  size={"medium"}
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                      shrink: true,
                  }}
                  fullWidth
                  onChange={(event) => {
                      setDoc_date(event.target.value);
                  }}
              />
              <br/>
              <TextField
                  id="date"
                  className={"p-2"}
                  label="Registration end date"
                  type="date"
                  fullWidth
                  size={"medium"}
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                      shrink: true,
                  }}
                  onChange={(event) => {
                      setEnd_date(event.target.value);
                  }}
              />
              <TextField
                  id="date"
                  className={"p-2"}
                  label="Invitees publishing Date"
                  type="date"
                  fullWidth
                  size={"medium"}
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                      shrink: true,
                  }}
                  onChange={(event) => {
                      setPublish_date(event.target.value);
                  }}
              />
              <TextField
                  id="date"
                  className={"p-2"}
                  label="Conference Date"
                  type="date"
                  fullWidth
                  size={"medium"}
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                      shrink: true,
                  }}
                  onChange={(event) => {
                      setConference_data(event.target.value);
                  }}
              />



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
    </div>
  );
}

export default EditSchedule;
