import React from "react";
import Aloha from "../Aloha/Aloha";

class AlohaDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersArray: [
                {
                    firstName: 'Tony',
                    lastName: 'Stark'
                },
                {
                    firstName: 'Bruce',
                    lastName: 'Brenner'
                },
                {
                    firstName: 'Thor',
                    lastName: 'Odinson'
                },
                {
                    firstName: 'Peter',
                    lastName: 'Parker'
                },
                {
                    firstName: 'Natasha',
                    lastName: 'Romanof'
                }
            ]
        }
    }

    userToAloha() {
        const {usersArray} = this.state;
        return usersArray.map((user) => <Aloha name={user.firstName} lastName={user.lastName} />)
    }

    sortUsers() {
        const {usersArray} = this.state;

        const newArray = [...usersArray];

        newArray.sort((a,b) => {
            if(a.firstName > b.firstName) {
                return 1
            } else {
                return -1
            }
        });
        
        this.setState({
            usersArray: newArray
        })
    }

  render() {
    return (
      <>
        <button onClick={() => {this.sortUsers()}}>Sort</button>
        {this.userToAloha()}
      </>
    );
  }
}

export default AlohaDashboard;
