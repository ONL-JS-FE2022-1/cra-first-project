import React, {useReducer, useState} from "react";

/*
Reducer - чиста функція!!!

1. Не лізе в оточуючий світ (не запускає побічних ефектів)
2. При одних і тих самих вхідних даних поквертає один і той самий результат

Ця функція не має мутувати state, натомість вона повертає НОВИЙ ОБ'ЄКТ стану
*/

function reducer(state, action) {
    switch(action.type) {
        case 'CLICK_INCREMENT': {
            return {
                ...state,
                click: state.click + 1
            }
        }
        default: return state;
    }
}

const initialState = {
    click: 0
}

function SignOutForm (props) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const clicker = () => {
        dispatch({
            type: 'CLICK_INCREMENT'
        })
    }


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    

    return (
        <>
        {state.click}
        <button onClick={clicker}>Click to increment!</button>
        
        {/*
        <form>
            <input type="text" name="firstName" value={firstName}  />
            <input type="text" name="lastName" value={lastName}  />
            <input type="text" name="email" value={email}  />
            <input type="text" name="password" value={password}  />
            <input type="text" name="address" value={address}  />
        </form>
    */}

    </>
    )
}

export default SignOutForm