import React, { Component } from 'react';
import { SCHEMA } from '../../schemas';

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
            ...initialState,
            isError: null
        }
    }
    
    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();

        try {
            SCHEMA.validateSync(this.state);
        } catch (e) {
            this.setState({
                isError: e
            })
        }

    }

    render() {
        const {email, pass, firstName, lastName, isError} = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <input name="firstName" type="text" value={firstName} onChange={this.changeHandler} placeholder="firstName" />
                <input name="lastName" type="text" value={lastName} onChange={this.changeHandler} placeholder="lastName" />
                <input name="email" type="text" value={email} onChange={this.changeHandler} placeholder="email" />
                <input name="pass" type="text" value={pass} onChange={this.changeHandler} placeholder="pass" />
                <button>Submit</button>
                {isError && <p style={{color: 'red', fontSize: '20px', fontWeight: 'bold'}}>{isError.message}</p>}
            </form>
        );
    }
}

export default SignUpForm;
