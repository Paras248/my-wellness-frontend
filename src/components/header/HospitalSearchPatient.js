import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/HospitalSearchPatient.module.css";
import LogoutIcon from "@mui/icons-material/Logout";

const HospitalSearchPatient = (props) => {
    return (
        <>
            <div className={styles.container}>
                <Link to="/hospital/add/patient/record" className={styles.link}>
                    <button className={styles.button}>Add Record</button>
                </Link>
                <Link to="/" className={styles.link}>
                    <button
                        className={styles.button}
                        onClick={() => localStorage.removeItem("hospitalToken")}
                    >
                        Logout
                        <LogoutIcon style={{ fontSize: 18, marginLeft: 10 }} />
                    </button>
                </Link>
            </div>
        </>
    );
};

export default HospitalSearchPatient;
