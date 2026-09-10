import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constant";

function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        const authorize = async () => {
            const token = localStorage.getItem(ACCESS_TOKEN);
            if (!token) {
                setIsAuthorized(false);
                return;
            }

            try {
                const decoded = jwtDecode(token);
                const now = Date.now() / 1000;

                if (decoded.exp < now) {
                    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
                    const response = await api.post("/api/token/refresh/", {
                        refresh: refreshToken,
                    });
                    localStorage.setItem(ACCESS_TOKEN, response.data.access);
                }

                setIsAuthorized(true);
            } catch (error) {
                console.error(error);
                setIsAuthorized(false);
            }
        };

        authorize();
    }, []);

    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }

    return isAuthorized ? children : <Navigate to="/login" />;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
