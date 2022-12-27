import React, { Component } from 'react';
import * as yup from 'yup';

const SCHEMA = yup.object({
    firstName: yup.string().min(1).max(30),
    lastName: yup.string().min(1).max(30),
    email: yup.string().required().email(),
    pass: 
    yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
})

const initialState = {
            firstName: '',
            lastName: '',
            email: '',
            pass: ''
}

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
    }
    
    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(SCHEMA.isValidSync(this.state));
    }

    render() {
        const {email, pass, firstName, lastName} = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <input name="firstName" type="text" value={firstName} onChange={this.changeHandler} placeholder="firstName" />
                <input name="lastName" type="text" value={lastName} onChange={this.changeHandler} placeholder="lastName" />
                <input name="email" type="text" value={email} onChange={this.changeHandler} placeholder="email" />
                <input name="pass" type="text" value={pass} onChange={this.changeHandler} placeholder="pass" />
                <button>Submit</button>
            </form>
        );
    }
}

export default SignUpForm;
