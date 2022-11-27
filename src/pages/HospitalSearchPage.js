import React, { useState } from "react";
import axios from "axios";
import Header from "../components/header/Header";
import { useHistory } from "react-router-dom";

const HospitalSearchPage = () => {
    const [patientId, setPatientId] = useState("");
    const history = useHistory();
    const onSearchPatientHandler = (event) => {
        const id = event.target.value.trim();
        console.log(id);
        setPatientId(id);
    };

    const onKeyPressHandler = (event) => {
        if (event.key === "Enter") {
            const options = {
                method: "GET",
                url: `http://localhost:4000/api/hospital/patient/search?patientId=${patientId}`,
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
                    console.log(err.response.data);
                });
        }
    };

    return (
        <>
            <Header searchPatient />
            <input
                value={patientId}
                placeholder="Search Patient"
                onChange={onSearchPatientHandler}
                onKeyDown={onKeyPressHandler}
            />
        </>
    );
};

export default HospitalSearchPage;
