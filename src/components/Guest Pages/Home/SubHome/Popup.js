import React from 'react';
import {Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";


function Popup(props) {
    const Participant ="Participant";
    const Other  ="Other";
    const id = props.selectedValue;

    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };


    function CheckEligiblity(role) {
        const token = localStorage.getItem("user");

        if(token == null){
           window.location = "/login"
        }
        else{
            if(role == "Other"){
                window.location = "/submissions/add";

            }



        }
    };

    return (
        <Dialog onClose={handleClose}  open={open}>
            <DialogTitle >CHOOSE YOUR ROLE TO PARTICIPATE</DialogTitle>
            <List >

                    <ListItem  className={"text-center"} button onClick={CheckEligiblity.bind(this,Participant)}>
                        <ListItemText primary="AS A PARTICIPANT" />
                    </ListItem>


                <ListItem autoFocus button onClick={CheckEligiblity.bind(this,Other)} >

                    <ListItemText  className={"text-center"} primary="AS A RESEARCH PRESENTER" />
                </ListItem >


                <ListItem autoFocus button onClick={CheckEligiblity.bind(this,Other)} >
                    <ListItemText  className={"text-center"} primary="AS A WORKSHOP CONDUCTOR" />
                </ListItem>
            </List>
        </Dialog>
    );
}

export default Popup;