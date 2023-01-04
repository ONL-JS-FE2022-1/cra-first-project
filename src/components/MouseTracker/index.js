/*
У нас є компонента MouseTracker.
Переробіть компоненту MouseTracker таким образом, щоб компонента відслідковувала зміну координат і повертала вам об'єкт з координатами курсора миші на екрані. Об'єкт з Х та У, замість розмітки.
Counter нам тут вже не потрібен, його можна випілити
*/

import {useState, useEffect} from 'react';

const useMouseTracker = () => {
    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        window.addEventListener('mousemove', tracker);
        return () => {
            window.removeEventListener('mousemove', tracker);
        }
    }, []);

    const tracker = (event) => {
        setCoordinates({
                x: event.clientX,
                y: event.clientY
        })
    }


    return {coordinates};
}

export default useMouseTracker;