import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddRecordsPage = () => {
    const [diagnosis, setDiagnosis] = useState("");
    const [medicines, setMedicines] = useState("");
    const [patientId, setPatientId] = useState("");
    const [doctorId, setDoctorId] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    const onInputChangeHandler = (event, setFunction) => {
        const { value } = event.target;
        setError(false);
        setFunction(value.trim());
    };

    const onFormsubmitHandler = (event) => {
        event.preventDefault();
        const options = {
            method: "POST",
            url: "http://localhost:4000/api/hospital/patient/record/add",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("hospitalToken")}`,
            },
            data: {
                diagnosis,
                medicines,
                patientId,
                doctorId,
                description,
            },
        };
        axios
            .request(options)
            .then((response) => {
                window.alert("Record added successfully");
                history.push("/hospital/search");
            })
            .catch((err) => {
                setError(true);
                setErrorMessage(err.response.data.message);
            });
    };
    return (
        <div>
            <div>
                {error && <p>{errorMessage}</p>}
                <form onSubmit={onFormsubmitHandler}>
                    <input
                        value={diagnosis}
                        placeholder="Diagnosis"
                        onChange={(e) => onInputChangeHandler(e, setDiagnosis)}
                    />
                    <input
                        value={medicines}
                        placeholder="medicines"
                        onChange={(e) => onInputChangeHandler(e, setMedicines)}
                    />
                    <input
                        value={patientId}
                        placeholder="Patient Id"
                        onChange={(e) => onInputChangeHandler(e, setPatientId)}
                    />
                    <input
                        value={doctorId}
                        placeholder="Doctor Id"
                        onChange={(e) => onInputChangeHandler(e, setDoctorId)}
                    />
                    <textarea
                        value={description}
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddRecordsPage;
