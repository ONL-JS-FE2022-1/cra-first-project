import React from 'react';
import Parent from './Parent';
import { ThemeContext } from '../../contexts/themeContext';
import style from './Tree.module.css';
import cx from 'classnames';
import CONSTANTS from "../../constants";
const {THEMES} = CONSTANTS;

const Tree = (props) => {
    return (
        
        <ThemeContext.Consumer>
            {
                ([theme, setTheme]) => {

                    const clNames = cx(style.container, {
                        [style.lightTheme]: theme === THEMES.LIGHT,
                        [style.darkTheme]: theme === THEMES.DARK
                    });

                    return (
                        <div className={clNames}>
                            Tree
                            <Parent />
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>
    );
}

export default Tree;
