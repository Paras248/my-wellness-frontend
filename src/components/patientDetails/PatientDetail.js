import React from "react";
import styles from "./css/PatientDetail.module.css";

const patientDetail = (props) => {
    return (
        <li className={styles.items}>
            <p style={{ marginRight: 10, fontWeight: "500", color: "teal" }}>
                {props.title}:
            </p>
            <p style={{ flex: 1 }}>{props.text}</p>
        </li>
    );
};

export default patientDetail;
