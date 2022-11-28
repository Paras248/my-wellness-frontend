import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/Login.module.css";

const Login = (props) => {
    return (
        <>
            {props.as === "hospital" && (
                <Link to="/login/admin" className={styles.text}>
                    <button className={styles.toggleButton}>Login as Admin</button>
                </Link>
            )}
            {props.as === "admin" && (
                <Link to="/login/hospital" className={styles.text}>
                    <button className={styles.hospitalToggleButton}>
                        {" "}
                        Login as Hospital
                    </button>
                </Link>
            )}
        </>
    );
};

export default Login;
