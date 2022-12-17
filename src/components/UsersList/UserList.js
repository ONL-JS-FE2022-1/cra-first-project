import React from "react";
import {getUsers} from '../../api/';
import UserCard from "./UserCard";
import './style.css'

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: []
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

    handleSearch = (event) => {
        // 1
        // якщо в інпутику нічого немає, то чистимо масив відфільтрованих юзерів
        if(event.target.value === "") {
            this.setState({
                filteredUsers: []
            })
            return;
        }

        // 2
        // Фільтруємо по прізвищу
        const searchValue = event.target.value; 
        const filteredUsers = this.state.users.filter(
            (user) => 
            {return user.name.last.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1}
        );

        // 3
        // кладемо в стейт відфільтрованих юзерів
        this.setState({
            filteredUsers: filteredUsers
        })
    }

    renderUsers = () => {
        const {users, filteredUsers} = this.state;
        return filteredUsers.length > 0 
        ? filteredUsers.map((user) => <UserCard user={user}/>) 
        : users.map((user) => <UserCard user={user}/>)
    }

    render() {
        const {users} = this.state;
        return(
            <>
            
            <h1>USERS</h1>

            <input 
            type="text"
            autoComplete="off"
            placeholder="Поиск юзера по фамилии"
            onChange={this.handleSearch}
            />

            <section className="card-container">
                {users.length ? this.renderUsers() : <h2>Пользователи еще не загрузились!</h2>}
            </section>
            
            </>
        )
    }
}

export default UserList;