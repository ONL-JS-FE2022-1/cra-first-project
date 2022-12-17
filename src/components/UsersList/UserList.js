import React from "react";
import {getUsers} from '../../api/';
import UserCard from "./UserCard";
import './style.css'

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: [],
            userCount: 100
        }
    }

    componentDidMount() {
        getUsers(this.state.userCount).then((data) => {
            const {results} = data;
            this.setState({
                users: results
            })
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

    setUserCount = (event) => {
        this.setState({
            userCount: event.target.value
        })
    }

    loadUsers = () => {
        getUsers(this.state.userCount).then((data) => {
            const {results} = data;
            this.setState({
                users: results
            })
        });
    }

    renderUsers = () => {
        const {users, filteredUsers} = this.state;
        return filteredUsers.length > 0 
        ? filteredUsers.map((user) => <UserCard key={user.login.uuid} user={user}/>) 
        : users.map((user) => <UserCard key={user.login.uuid} user={user}/>)
    }

    render() {
        const {users} = this.state;
        return(
            <>
            
            <h1>USERS</h1>

            <input 
            type="number"
            min={1}
            max={100}
            onChange={this.setUserCount}
            />
            <button onClick={this.loadUsers}>Загрузить юзеров</button>

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