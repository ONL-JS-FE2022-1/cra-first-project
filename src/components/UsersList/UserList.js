import React from "react";
import {getUsers} from '../../api/';
import UserCard from "./UserCard";
import './style.css'

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        getUsers().then((data) => {
            const {results} = data;
            this.setState({
                users: results
            })
            console.log(results);
        });
    }

    renderUsers = () => {
        const {users} = this.state;
        return users.map((user) => <UserCard user={user}/>)
    }

    render() {
        const {users} = this.state;
        return(
            <>
            
            <h1>USERS</h1>
            <section className="card-container">
                {users.length ? this.renderUsers() : <h2>Пользователи еще не загрузились!</h2>}
            </section>
            
            </>
        )
    }
}

export default UserList;