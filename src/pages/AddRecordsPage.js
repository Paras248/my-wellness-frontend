import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styles from "./css/AddRecords.module.css";
import Header from "../components/header/Header";

const AddRecordsPage = () => {
    const [diagnosis, setDiagnosis] = useState("");
    const [medicines, setMedicines] = useState("");
    const [patientId, setPatientId] = useState("");
    const [doctorId, setDoctorId] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    const onInputChangeHandler = (event, setFunction) => {
        const { value } = event.target;
        setError(false);
        setFunction(value.trim());
    };

    const onFormsubmitHandler = (event) => {
        event.preventDefault();
        const options = {
            method: "POST",
            url: "https://healthify-backend.onrender.com/apihospital/patient/record/add",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("hospitalToken")}`,
            },
            data: {
                diagnosis,
                medicines,
                patientId,
                doctorId,
                description,
            },
        };
        axios
            .request(options)
            .then((response) => {
                window.alert("Record added successfully");
                history.push("/hospital/search");
            })
            .catch((err) => {
                setError(true);
                setErrorMessage(err.response.data.message);
            });
    };
    return (
        <div className={styles.background}>
            <Header />
            <div>
                <form onSubmit={onFormsubmitHandler} className={styles.form}>
                    {error && <p style={{ color: "red" }}>{errorMessage}</p>}

                    <input
                        id="diagnosis"
                        className={styles.input}
                        value={diagnosis}
                        placeholder="Diagnosis"
                        onChange={(e) => onInputChangeHandler(e, setDiagnosis)}
                    />
                    <input
                        value={medicines}
                        className={styles.input}
                        placeholder="medicines"
                        onChange={(e) => onInputChangeHandler(e, setMedicines)}
                    />
                    <input
                        value={patientId}
                        className={styles.input}
                        placeholder="Patient Id"
                        onChange={(e) => onInputChangeHandler(e, setPatientId)}
                    />
                    <input
                        value={doctorId}
                        className={styles.input}
                        placeholder="Doctor Id"
                        onChange={(e) => onInputChangeHandler(e, setDoctorId)}
                    />
                    <textarea
                        value={description}
                        className={styles.textarea}
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button className={styles.button} type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddRecordsPage;
