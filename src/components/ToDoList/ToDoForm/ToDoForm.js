import React, { Component } from 'react';
// import './style.css';
import styles from './ToDoFormStyle.module.css';


class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 3. Нам потрібен стейт
            todo: '',
            isInputValid: true
        }
    }
    
    // 2. onChange : input -> state
    changeHandler = ({target: {value, name}}) => {
        if(value.includes('*')) {
            this.setState({
                isInputValid: false
            })
        } else {
            this.setState({
                [name]: value,
                isInputValid: true
            })
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.sendData(this.state.todo);
    }

    render() {
        const {todo, isInputValid} = this.state;

        cx({
            [styles.input]: true,
            [styles['invalid-input']]: !isInputValid
        })

        // const className = styles['input'] + ' ' + (isInputValid ? '' : styles['invalid-input']);
        return (
            <form onSubmit={this.submitHandler} className={styles.container}>
                <input
                type="text"
                name="todo"
                value={todo}
                onChange={this.changeHandler}
                //className={className}
                />
                <button type="submit">Submit</button>
                {/* 
                1. Маємо бути інпут
                state -> input.value
                */}
            </form>
        );
    }
}

export default ToDoForm;


// [name].module.css



function cx (objectClassNames) {
    const cort = Object.entries(objectClassNames);
    const filtered = cort.filter((className, condition) => condition);
    const arr = filtered.map((className, condition) => className);
    arr.join(' ');
} // 'className1 className2'

/*
objectClassNames = {
    className1: true,
    className2: true,
    className4: false,
}
*/

// [[className1, true], [className2, true], [className4, false]] ->
// [[className1, true], [className2, true]] -> [className1, className2] -> 'className1 className2'

