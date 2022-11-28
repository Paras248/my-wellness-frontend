import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/HospitalSearchPatient.module.css";
import LogoutIcon from "@mui/icons-material/Logout";

const PatientSignUp = (props) => {
    return (
        <>
            <div className={styles.container}>
                <Link to="/admin/signup/doctor" className={styles.link}>
                    <button className={styles.button}>Register Doctor</button>
                </Link>
                <Link to="/admin/signup/hospital" className={styles.link}>
                    <button className={styles.button}>Register Hospital</button>
                </Link>
                <Link to="/" className={styles.link}>
                    <button
                        className={styles.button}
                        onClick={() => localStorage.removeItem("adminToken")}
                    >
                        Logout
                        <LogoutIcon style={{ fontSize: 18, marginLeft: 10 }} />
                    </button>
                </Link>
            </div>
        </>
    );
};

export default PatientSignUp;
