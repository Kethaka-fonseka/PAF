import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
    Timeline,
    TimelineConnector, TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@material-ui/lab";

import {Container, makeStyles, Paper} from "@material-ui/core";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';

function Time(props) {

    const useStyles = makeStyles((theme) => ({
        paper: {
            padding: '7px 16px',
        },
        secondaryTail: {
            backgroundColor: theme.palette.secondary.main,
        },
    }));

    const classes = useStyles();
    return (

        <Container >
        <Timeline align="alternate" >
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        {props.schedule.reg_start_date}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" >
                            Registration (OPEN)
                        </Typography>
                        <Typography variant="h6" >
                            Document Submissions (OPEN)
                        </Typography>
                        <Typography color="textSecondary">Please use our templates when document submission!</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        {props.schedule.doc_end_date}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" >
                            Document Submission (CLOSED)
                        </Typography>
                        <Typography color="textSecondary">No more document submissions after!</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        {props.schedule.reg_end_date}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6"  >
                            Registration (CLOSED)
                        </Typography>
                        <Typography color="textSecondary">Please make necessary payment before!</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    {props.schedule.publish_date}
                </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                        <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                           Publish attendees list
                        </Typography>
                        <Typography color="textSecondary">Attendees</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        {props.schedule.conference_date}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <HotelIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Conference Day
                        </Typography>
                        <Typography color="textSecondary">This is the day!</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
            </Container>
    );
}

export default Time;