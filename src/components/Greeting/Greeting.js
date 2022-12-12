import React from "react";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGreeting: true
        }
    }

    clickHandler() {
        this.setState({
            isGreeting: !this.state.isGreeting
        })
    }

    render() {
        const {isGreeting} = this.state;
        const greetingText = isGreeting ? 'Hello' : 'Bye';

        return <h1 onClick={() => {this.clickHandler()}}>{greetingText} {this.props.name} from {this.props.country}!</h1>
    }

}

export default Greeting;

/*
Доробити компоненту таким чином, щоб за натиснення на елемент, текст "Hello ...." змінювався на "Bye!"
Підказка. Працюйте зі стейтом.
*/