import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const onLoginClickHandler = () => {
        history.push("/login/hospital");
    };
    return <button onClick={onLoginClickHandler}>Login</button>;
};

export default Login;
