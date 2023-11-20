import PropTypes from "prop-types";
import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [signedIn, setSignedIn] = useState(() => {
        const isSignedIn = localStorage.getItem("user");
        return !!isSignedIn;
    });

    const signin = useCallback((userCookie) => {

        localStorage.setItem("user", JSON.stringify(userCookie))
        setSignedIn(true);
    }, []);

    const signout = useCallback(() => {
        localStorage.removeItem("user")
        setSignedIn(false);
    }, []);

    const userLogado = useCallback(() => {
        const userLogado = JSON.parse(localStorage.getItem('user'))
        return userLogado.user[0].id
    }, [])

    return (
        <AuthContext.Provider value={{
            signedIn: signedIn,
            signin,
            signout,
            userLogado
        }}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
