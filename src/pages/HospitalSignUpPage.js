import axios from "axios";
import React, { useState } from "react";
import Header from "../components/header/Header";
import styles from "./css/PatientsignUp.module.css";

const HospitalSignUpPage = () => {
    const [name, setName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onInputChangeHandler = (event, setFuntion) => {
        const { value } = event.target;
        setFuntion(value.trim());
    };

    const onFormSubmitHandler = (event) => {
        setError(false);
        event.preventDefault();
        const options = {
            method: "POST",
            url: "https://healthify-backend.onrender.com/apiadmin/hospital/signup",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            },
            data: {
                name,
                contactNo,
                address,
                type,
                email,
                password,
            },
        };
        axios
            .request(options)
            .then((response) => {
                window.alert("Registered Hospital Successfully!!!");
                console.log(response.data);
            })
            .catch((err) => {
                setError(true);
                setErrorMessage(err.response.data.message);
            });
    };

    return (
        <div className={styles.background}>
            <Header hospitalSignUp />
            <p
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginLeft: "20%",
                    marginTop: "5%",
                }}
            >
                Register Hospital
            </p>
            <form onSubmit={onFormSubmitHandler} className={styles.form}>
                {error && (
                    <p style={{ color: "red", marginLeft: "2%" }}>{errorMessage}</p>
                )}

                <div className={`${styles.inputContainer}`}>
                    <p>Name: </p>
                    <input
                        value={name}
                        onChange={(e) => onInputChangeHandler(e, setName)}
                    />
                </div>
                <div className={`${styles.inputContainer}`}>
                    <p>Contact No: </p>
                    <input
                        value={contactNo}
                        onChange={(e) => onInputChangeHandler(e, setContactNo)}
                    />
                </div>

                <div className={`${styles.inputContainer}`}>
                    <p>Address: </p>
                    <input
                        value={address}
                        onChange={(e) => onInputChangeHandler(e, setAddress)}
                    />
                </div>

                <div className={`${styles.inputContainer}`}>
                    <p>Type: </p>
                    <input
                        value={type}
                        onChange={(e) => onInputChangeHandler(e, setType)}
                    />
                </div>

                <div className={`${styles.inputContainer}`}>
                    <p>Email: </p>
                    <input
                        value={email}
                        onChange={(e) => onInputChangeHandler(e, setEmail)}
                    />
                </div>
                <div className={`${styles.inputContainer}`}>
                    <p>Password: </p>
                    <input
                        value={password}
                        type="password"
                        onChange={(e) => onInputChangeHandler(e, setPassword)}
                    />
                </div>
                <button className={styles.button} type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default HospitalSignUpPage;
