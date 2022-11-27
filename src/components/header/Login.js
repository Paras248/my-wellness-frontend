import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
    return (
        <>
            {props.as === "hospital" && <Link to="/login/admin">Login as Admin</Link>}
            {props.as === "admin" && <Link to="/login/hospital">Login as hospital</Link>}
        </>
    );
};

export default Login;
