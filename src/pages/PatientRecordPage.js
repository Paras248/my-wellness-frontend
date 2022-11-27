import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            {!isLoading && (
                <>
                    <p>Record Details</p>
                    <div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Diagnosis: </p>
                            <p>{records.diagnosis}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Medicines:</p>
                            <p>{records.medicines.join(", ")}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Description:</p>
                            <p>{records.description}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Date: </p>
                            <p>
                                {records.createdAt
                                    .split("T")[0]
                                    .split("-")
                                    .reverse()
                                    .join("-")}
                            </p>
                        </div>
                    </div>
                    <p>Doctor Details</p>
                    <div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Name: </p>
                            <p>{`${records.doctor.firstName} ${records.doctor.middleName} ${records.doctor.lastName}`}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Id: </p>
                            <p>{records.doctor.id}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Qualification:</p>
                            <p>{records.doctor.qualification}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Contact No:</p>
                            <p>{records.doctor.contactNo[0]}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Email: </p>
                            <p>{records.doctor.email}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Age: </p>
                            <p>{records.doctor.age}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Gender: </p>
                            <p>{records.doctor.gender}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Address: </p>
                            <p>{records.doctor.address}</p>
                        </div>
                    </div>
                    <p>Hospital Details</p>

                    <div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Name: </p>
                            <p>{records.hospital.name}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Email:</p>
                            <p>{records.hospital.email}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Contact:</p>
                            <p>{records.hospital.contactNo[0]}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Type: </p>
                            <p>{records.hospital.type}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ marginRight: 10 }}>Address: </p>
                            <p>{records.hospital.address}</p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default PatientRecordPage;
