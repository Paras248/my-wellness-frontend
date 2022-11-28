import axios from "axios";
import React, { useState } from "react";
import Header from "../components/header/Header";
import styles from "./css/PatientsignUp.module.css";

const PatientSignUpPage = () => {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [date, setDate] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("Male");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onInputChangeHandler = (event, setFuntion) => {
        const { value } = event.target;
        setFuntion(value.trim());
    };

    const onFormSubmitHandler = (event) => {
        event.preventDefault();
        setError(false);

        const options = {
            method: "POST",
            url: "https://healthify-backend.onrender.com/apiadmin/patient/signup",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            },

            data: {
                firstName,
                middleName,
                lastName,
                contactNo,
                dateOfBirth: `${date}T00:00:00.000Z`,
                age: +age,
                gender,
                address,
                email,
                password,
                isAlive: true,
            },
        };
        axios
            .request(options)
            .then((response) => {
                alert("Registered Patient Successfully!!!");
            })
            .catch((err) => {
                setError(true);
                setErrorMessage(err.response.data.message);
            });
    };

    return (
        <div className={styles.background}>
            <Header patientSignUp />
            <p
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginLeft: "20%",
                    marginTop: "5%",
                }}
            >
                Register Patient
            </p>
            <form onSubmit={onFormSubmitHandler} className={styles.form}>
                {error && (
                    <p style={{ color: "red", marginLeft: "2%" }}>{errorMessage}</p>
                )}

                <div className={`${styles.inputContainer}`}>
                    <p>First Name: </p>
                    <input
                        value={firstName}
                        onChange={(e) => onInputChangeHandler(e, setFirstName)}
                    />
                </div>
                <div className={`${styles.inputContainer}`}>
                    <p>Middle Name: </p>
                    <input
                        value={middleName}
                        onChange={(e) => onInputChangeHandler(e, setMiddleName)}
                    />
                </div>
                <div className={`${styles.inputContainer}`}>
                    <p>Last Name: </p>
                    <input
                        value={lastName}
                        onChange={(e) => onInputChangeHandler(e, setLastName)}
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
                    <p>Date Of Birth: </p>
                    <input
                        id="dob"
                        type="date"
                        onChange={(e) => onInputChangeHandler(e, setDate)}
                    />
                </div>

                <div className={`${styles.inputContainer}`}>
                    <p>Age: </p>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => onInputChangeHandler(e, setAge)}
                    />
                </div>

                <div className={`${styles.inputContainer}`}>
                    <p>Gender: </p>
                    <select onChange={(e) => onInputChangeHandler(e, setGender)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className={`${styles.inputContainer}`}>
                    <p>Address: </p>
                    <input
                        value={address}
                        onChange={(e) => onInputChangeHandler(e, setAddress)}
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

export default PatientSignUpPage;
