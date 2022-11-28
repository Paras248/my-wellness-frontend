import React, { useState } from "react";
import Header from "../components/header/Header";
import PatientDetail from "../components/patientDetails/PatientDetail";
import { NavLink } from "react-router-dom";
import styles from "./css/PatientDetails.module.css";
import RecordCard from "../components/patientDetails/RecordCard";

const PatientDetailsPage = () => {
    const {
        id,
        firstName,
        middleName,
        lastName,
        address,
        age,
        contactNo,
        dateOfBirth,
        email,
        isAlive,
        records,
    } = JSON.parse(localStorage.getItem("patient"));

    let date = dateOfBirth.split("T");
    date = date[0].split("-");
    date = date.reverse();
    date = date.join("-");
    return (
        <>
            <Header searchPatient shadow />
            <div className={styles.background}>
                <div className={styles.patientCard}>
                    <ul>
                        <PatientDetail
                            title="Name"
                            text={`${firstName} ${middleName} ${lastName}`}
                        />
                        <PatientDetail title="Id" text={id} />
                        <PatientDetail title="Contact No" text={contactNo[0]} />
                        <PatientDetail title="Email" text={email} />
                        <PatientDetail title="Age" text={age} />
                        <PatientDetail title="DOB" text={date} />
                        <PatientDetail title="Address" text={address} />
                        <PatientDetail
                            title="Patient Status"
                            text={isAlive ? "Alive" : "Dead"}
                        />
                    </ul>
                </div>
                {records.map((record) => {
                    return (
                        <RecordCard
                            key={id}
                            diagnosis={record.diagnosis}
                            medicines={record.medicines}
                            description={record.description}
                            date={record.createdAt}
                            id={record.id}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default PatientDetailsPage;
