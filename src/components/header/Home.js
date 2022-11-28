import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./css/Home.module.css";
const Login = () => {
    const history = useHistory();
    const onLoginClickHandler = () => {
        history.push("/login/hospital");
    };
    return (
        <button onClick={onLoginClickHandler} className={styles.button}>
            Login
        </button>
    );
};

export default Login;
