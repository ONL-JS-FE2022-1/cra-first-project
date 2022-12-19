import React, { Component } from 'react';
// import './style.css';
import styles from './ToDoFormStyle.module.css';


class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 3. Нам потрібен стейт
            todo: ''
        }
    }
    
    // 2. onChange : input -> state
    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.sendData(this.state.todo);
    }

    render() {
        const {todo} = this.state;
        return (
            <form onSubmit={this.submitHandler} className={styles.container}>
                <input
                type="text"
                name="todo"
                value={todo}
                onChange={this.changeHandler}
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
