import CONSTANTS from "../constants";
const {ACTIONS} = CONSTANTS;
/*
Reducer - чиста функція!!!

1. Не лізе в оточуючий світ (не запускає побічних ефектів)
2. При одних і тих самих вхідних даних поквертає один і той самий результат

Ця функція не має мутувати state, натомість вона повертає НОВИЙ ОБ'ЄКТ стану
*/

export function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.INPUT_CHANGE: {
            return {
                ...state,
                [action.name]: action.value
            }
        }
        default: return state;
    }
}