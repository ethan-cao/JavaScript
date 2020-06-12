import React, { Component } from 'react';
import { ThemeContext } from "../context/themeContext";
import { AuthContext } from '../context/AuthContext';

class BookList extends Component {
    render() {
        return (
            <AuthContext.Consumer>
                {(authContext) => {
                    return (
                        <ThemeContext.Consumer>
                            {(themeContext) => {
                                const { isAuthenticated, toggleAuth } = authContext;
                                const { isLightTheme, light, dark } = themeContext;
                                const theme = isLightTheme ? light : dark;

                                return (
                                    <>
                                    <div onClick={toggleAuth} style={{ color: theme.syntax, background: theme.bg }}>
                                        { isAuthenticated ? "logged in" : "logged out"}
                                    </div>
                                    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                                        <ul>
                                            <li>the way of kinds</li>
                                            <li>the name of the wind</li>
                                            <li>The final empire</li>
                                        </ul>
                                    </div>
                                    </>
                                );
                            }}
                        </ThemeContext.Consumer>
                    );
                }}
            </AuthContext.Consumer>
        );
    }
}

export default BookList;