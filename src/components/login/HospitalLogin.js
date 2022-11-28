import React, { useState } from "react";
import styles from "./css/HospitalLogin.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import doctorImage from "../../assets/Doctors-rafiki.svg";

const HospitalLogin = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const history = useHistory();

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
                userId,
                password,
            },
            withCredentials: true,
        };
        axios
            .request(options)
            .then((response) => {
                localStorage.setItem("hospitalToken", response.data.token);
                history.push("/hospital/search");
            })
            .catch((err) => {
                setError(true);
                setErrorMessage(err.response.data.message);
            });
    };
    const onUserIdChangeHandler = (event) => {
        const userId = event.target.value.trim();
        setUserId(userId);
    };

    const onPasswordChangeHandler = (event) => {
        const password = event.target.value.trim();
        setPassword(password);
    };

    return (
        <div className={styles.gridContainer}>
            <form className={styles.form} onSubmit={formSubmitHandler}>
                <p style={{ fontSize: 25, fontWeight: "bold" }}>SignIn</p>
                {error && <p style={{ color: "red", fontSize: 13 }}>{errorMessage}</p>}
                <input
                    value={userId}
                    placeholder="User Id"
                    onChange={onUserIdChangeHandler}
                />
                <input
                    value={password}
                    placeholder="Password"
                    onChange={onPasswordChangeHandler}
                    type="password"
                />
                <button type="submit" className={styles.button}>
                    Login
                </button>
            </form>
            <div>
                <img src={doctorImage} alt="doctor img" className={styles.image} />
            </div>
        </div>
    );
};

export default HospitalLogin;
