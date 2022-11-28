import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import styles from "./css/PatientRecord.module.css";

const PatientRecordPage = (props) => {
    const { id } = useParams();
    const [records, setRecords] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const options = {
            method: "GET",
            url: `http://localhost:4000/api/hospital/patient/search/record/${id.trim()}`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("hospitalToken")}`,
            },
        };
        axios
            .request(options)
            .then((response) => {
                setIsLoading(false);
                console.log(response.data.record);
                setRecords(response.data.record);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, [id]);
    return (
        <>
            <Header searchPatient shadow />

            {!isLoading && (
                <div className={styles.background}>
                    <p className={styles.title}>Record Details</p>
                    <div className={styles.detailsCard}>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Diagnosis:{" "}
                            </p>
                            <p>{records.diagnosis}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Medicines:
                            </p>
                            <p>{records.medicines.join(", ")}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Description:
                            </p>
                            <p>{records.description}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Date:{" "}
                            </p>
                            <p>
                                {records.createdAt
                                    .split("T")[0]
                                    .split("-")
                                    .reverse()
                                    .join("-")}
                            </p>
                        </div>
                    </div>
                    <p className={styles.title}>Doctor Details</p>
                    <div className={styles.detailsCard}>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Name:{" "}
                            </p>
                            <p>{`${records.doctor.firstName} ${records.doctor.middleName} ${records.doctor.lastName}`}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Id:{" "}
                            </p>
                            <p>{records.doctor.id}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Qualification:
                            </p>
                            <p>{records.doctor.qualification}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Contact No:
                            </p>
                            <p>{records.doctor.contactNo[0]}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Email:{" "}
                            </p>
                            <p>{records.doctor.email}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Age:{" "}
                            </p>
                            <p>{records.doctor.age}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Gender:{" "}
                            </p>
                            <p>{records.doctor.gender}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Address:{" "}
                            </p>
                            <p>{records.doctor.address}</p>
                        </div>
                    </div>
                    <p className={styles.title}>Hospital Details</p>

                    <div className={styles.detailsCard}>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Name:{" "}
                            </p>
                            <p>{records.hospital.name}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Email:
                            </p>
                            <p>{records.hospital.email}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Contact:
                            </p>
                            <p>{records.hospital.contactNo[0]}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Type:{" "}
                            </p>
                            <p>{records.hospital.type}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }} className={styles.headings}>
                                Address:{" "}
                            </p>
                            <p>{records.hospital.address}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PatientRecordPage;
