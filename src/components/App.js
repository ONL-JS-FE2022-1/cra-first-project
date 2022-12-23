import React from "react";
import Tree from "./Tree";
import {MyContext} from '../contexts/userContext'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@mail.com",
        avatar: "https://robohash.org/John%20Doe",
      },
    };
  }

  logOut = () => {
    this.setState({
      user: {}
    })
  }

  render() {
    console.log(MyContext)
    return (
      <>
        App
        <MyContext.Provider value={
          {user: this.state.user,
          logOut: this.logOut
          }}>
          <Tree />
        </MyContext.Provider>
      </>
    );
  }
}

export default App;
