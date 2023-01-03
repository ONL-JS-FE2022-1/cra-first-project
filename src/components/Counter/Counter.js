import React, { useEffect, useState } from "react";
import {format, addSeconds} from 'date-fns';

function Counter(props) {
    const [time, setTime] = useState(new Date(0,0,0,0,0,0,0));
    const [isRunning, setRunning] = useState(true);

    let intervalId = null;

    useEffect(() => {
        if(isRunning) {
            intervalId = setInterval(() => {
                setTime(time => addSeconds(time, 1))
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        }
    }, [isRunning]);

    const switchRunning = () => {
        setRunning(!isRunning);
    }


        return (
            <>           
            <h1>
                {format(time, 'HH:mm:ss')}
            </h1>
            <button onClick={switchRunning}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            </>
        )
   
}

export default Counter;