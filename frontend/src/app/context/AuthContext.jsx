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

    return (
        <AuthContext.Provider value={{
            signedIn: signedIn,
            signin,
            signout
        }}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
