import React, { useState } from "react";
import styles from "./css/HospitalLogin.module.css";
import axios from "axios";
import image from "../../assets/Orthopedic-amico.svg";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setError(false);
        const options = {
            method: "POST",
            url: "http://localhost:4000/api/hospital/signin",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                email,
                password,
            },
            withCredentials: true,
        };
        axios
            .request(options)
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                setError(true);
                setErrorMessage(err.response.data.message);
            });
    };
    const onUserIdChangeHandler = (event) => {
        const email = event.target.value.trim();
        setEmail(email);
    };

    const onPasswordChangeHandler = (event) => {
        const password = event.target.value.trim();
        setPassword(password);
    };

    return (
        <div className={styles.gridContainer}>
            <form className={styles.form} onSubmit={formSubmitHandler}>
                <p style={{ fontSize: 25, fontWeight: "bold" }}>SignIn</p>

                {error && <p style={{ color: "red", fontSize: 12 }}>{errorMessage}</p>}
                <input
                    value={email}
                    placeholder="Email"
                    onChange={onUserIdChangeHandler}
                />
                <input
                    value={password}
                    placeholder="Password"
                    onChange={onPasswordChangeHandler}
                    type="password"
                />
                <button type="submit">Login</button>
            </form>
            <div>
                <img src={image} alt="doctor img" className={styles.image} />
            </div>
        </div>
    );
};

export default AdminLogin;
