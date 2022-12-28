import React, {useState, useEffect} from 'react';
import UserCard from './UserCard';
import {getUsers} from '../../api';

const NewUserLoader = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [isError, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        load();
    }, [page])

    const load = () => {
        getUsers(50, page)
        .then(data => {
            const {results} = data;
            setUsers(results); 
        })
        .catch((e) => {
            setError(e);
        })
        .finally(() => {
            setLoading(false);
        })
    }

    const prevBtnHandler = () => {
        setPage(page > 1 ? page-1 : 1)
    }

    const nextBtnHandler = () => {
        setPage(page+1)
    }

    return (
        <>

        {isLoading && <h1>Пользователи загружаются!!!</h1>}
        {isError && <h1>{isError.message}</h1>}

        <button onClick={prevBtnHandler}>Previous Page</button>
        <button onClick={nextBtnHandler}>Next Page</button>
        {users.length && users.map((user) => <UserCard key={user.login.uuid} user={user}/>)}

        </>
    );
}

export default NewUserLoader;
