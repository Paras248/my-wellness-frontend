import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./css/RecordCard.module.css";

const RecordCard = (props) => {
    const medicines = props.medicines.join(", ");

    let date = props.date.split("T");
    date = date[0].split("-");
    date = date.reverse();
    date = date.join("-");

    return (
        <div className={styles.container}>
            <div style={{ display: "flex" }}>
                <p style={{ marginRight: 10 }} className={styles.title}>
                    Diagnosis:{" "}
                </p>
                <p>{props.diagnosis}</p>
            </div>
            <div style={{ display: "flex" }} className={styles.text}>
                <p style={{ marginRight: 10 }} className={styles.title}>
                    Medicines:
                </p>
                <p>{medicines}</p>
            </div>
            <div style={{ display: "flex" }} className={styles.text}>
                <p style={{ marginRight: 10 }} className={styles.title}>
                    Description:
                </p>
                <p>{props.description}</p>
            </div>
            <div style={{ display: "flex" }} className={styles.text}>
                <p style={{ marginRight: 10 }} className={styles.title}>
                    Date:{" "}
                </p>
                <p>{date}</p>
            </div>
            <Link
                to={`/hospital/search/patient/${props.id}`}
                className={`${styles.link} ${styles.text}`}
            >
                Read More...
            </Link>
        </div>
    );
};

export default RecordCard;
