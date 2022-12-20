import UserCard from "./UsersList/UserCard";



function App() {
    const user = {
        name: {
            first: 'John',
            last: 'Doe'
        },
        email: 'test@test.com',
        picture: {
            large: 'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'
        }
    }

    return(
        <UserCard user={user} />
    )
}

export default App;