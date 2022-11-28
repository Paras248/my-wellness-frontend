import React from "react";
import styles from "./css/Header.module.css";
import DoctorSignUp from "./DoctorSignUp";
import Home from "./Home";
import HospitalSearchPatient from "./HospitalSearchPatient";
import HospitalSignUp from "./HospitalSignUp";
import Login from "./Login";
import PatientSignUp from "./PatientSignUp";
const Header = (props) => {
    return (
        <header className={`${styles.header} ${props.shadow ? styles.shadow : null}`}>
            <p className={styles.logo}>MyWellness</p>
            {props.login && <Login as={props.as} />}
            {props.home && <Home />}
            {props.searchPatient && <HospitalSearchPatient />}
            {props.patientSignUp && <PatientSignUp />}
            {props.doctorSignUp && <DoctorSignUp />}
            {props.hospitalSignUp && <HospitalSignUp />}
        </header>
    );
};

export default Header;
