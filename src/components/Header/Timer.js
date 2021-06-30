import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import '../../stylesheets/timer.css';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
};

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};
const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

function Timer() {
    const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = startTime + 243248; // use UNIX timestamp in seconds
    const remainingTime = endTime - startTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <div className="App justify-content-lg-around">
            <CountdownCircleTimer
                {...timerProps}
                colors={[["#e01e04"]]}
                duration={daysDuration}
                initialRemainingTime={remainingTime}
            >
                {({ elapsedTime }) =>
                    renderTime("days", getTimeDays(daysDuration - elapsedTime))
                }
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors={[["#b41703"]]}
                duration={daySeconds}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > hourSeconds
                ]}
            >
                {({ elapsedTime }) =>
                    renderTime("hours", getTimeHours(daySeconds - elapsedTime))
                }
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors={[["#e01e04"]]}
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > minuteSeconds
                ]}
            >
                {({ elapsedTime }) =>
                    renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
                }
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors={[["#e01e04"]]}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > 0
                ]}
            >
                {({ elapsedTime }) =>
                    renderTime("seconds", getTimeSeconds(elapsedTime))
                }
            </CountdownCircleTimer>
        </div>
    );
}

export default Timer;