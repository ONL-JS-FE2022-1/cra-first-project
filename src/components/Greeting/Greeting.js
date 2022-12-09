import React from "react";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <h1>Hello {this.props.name} from {this.props.country}!</h1>
    }

}

export default Greeting;

/*
Доробити компоненту таким чином, щоб за натиснення на елемент, текст "Hello ...." змінювався на "Bye!"
Підказка. Працюйте зі стейтом.
*/