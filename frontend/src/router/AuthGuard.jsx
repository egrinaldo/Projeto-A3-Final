import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";



export function AuthGuard({ isPrivate }) {
    const { signedIn } = useAuth();

    if (!signedIn && isPrivate) {
        //Redirecionar para /login
        return <Navigate to="/login" replace />;
    }

    if (signedIn && !isPrivate) {
        //Redirecionar para /minhaarea
        return <Navigate to="/MinhaArea" replace />;
    }

    return (
        <Outlet />
    )
}

AuthGuard.propTypes = {
    isPrivate: PropTypes.bool.isRequired,
};
