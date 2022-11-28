import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/header/Header";
import { useHistory } from "react-router-dom";
import styles from "./css/HospitalSearchPage.module.css";
import SearchIcon from "@mui/icons-material/Search";

const HospitalSearchPage = () => {
    const [patientId, setPatientId] = useState("");
    const history = useHistory();
    const [entered, setEntered] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSearchPatientHandler = (event) => {
        const id = event.target.value.trim();
        console.log(id);
        setPatientId(id);
    };

    const onKeyPressHandler = (event) => {
        if (event.key === "Enter") {
            const options = {
                method: "GET",
                url: `https://healthify-backend.onrender.com/apihospital/patient/search?patientId=${patientId}`,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("hospitalToken")}`,
                },
            };
            axios
                .request(options)
                .then((response) => {
                    localStorage.setItem(
                        "patient",
                        JSON.stringify(response.data.patient)
                    );
                    history.push("/hospital/search/patient");
                })
                .catch((err) => {
                    setError(true);
                    setErrorMessage(err.response.data.message);
                    console.log(err.response.data);
                });
        }
    };

    const onFocusHandler = () => {
        setError(false);
        setEntered(true);
    };

    useEffect(() => {
        if (error) {
            document.getElementById("searchBarContainer").style.borderColor = "red";
        }
    }, [error]);

    useEffect(() => {
        if (entered) {
            document.getElementById("searchBarContainer").style.borderColor =
                "rgb(41, 53, 224)";
        }
        return () => {
            setError(false);
            document.getElementById("searchBarContainer").style.borderColor = "black";
        };
    }, [entered]);

    return (
        <div className={styles.background}>
            <Header searchPatient shadow />
            <div>
                {error && (
                    <p
                        className={styles.error}
                        style={{ color: "red", fontSize: 13, textAlign: "center" }}
                    >
                        {errorMessage}
                    </p>
                )}
                <div id="searchBarContainer" className={`${styles.searchBarContainer}`}>
                    <SearchIcon className={styles.icon} />
                    <input
                        className={styles.searchBar}
                        value={patientId}
                        placeholder="Search Patient"
                        onChange={onSearchPatientHandler}
                        onKeyDown={onKeyPressHandler}
                        onFocus={onFocusHandler}
                        onBlur={() => setEntered(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default HospitalSearchPage;
