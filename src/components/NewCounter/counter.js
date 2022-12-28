import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(1);
    
    const increment = () => {
        setCounter(counter+step);
    }

    const changeHandler = ({target: {value}}) => {
        setStep(Number(value));
    } 

    return (
        <div>
            {counter}
            <input name="step" onChange={changeHandler} value={step}></input>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;
