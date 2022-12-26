import React from 'react';
import Child from './Child';
import { ThemeContext } from '../../../../contexts/themeContext';
import CONSTANTS from '../../../../constants';
const {THEMES} = CONSTANTS

const Subparent = (props) => {
    return (
        <ThemeContext.Consumer>
            {([theme, setTheme]) => {
                const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
                return (
                    <div>
                        <div style={{border: '3px solid black', padding: '25px'}}>
                            Subparent
                            <button onClick={() => setTheme(nextTheme)}>Click to change theme!</button>
                        </div>
                        <Child />
                    </div>
                )
            }}
        </ThemeContext.Consumer>
    );
}

export default Subparent;
