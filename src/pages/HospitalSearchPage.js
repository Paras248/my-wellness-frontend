import React, { useState } from "react";

const HospitalSearchPage = () => {
    const [patientId, setPatientId] = useState("");

    const onSearchPatientHandler = (event) => {
        const id = event.target.value.trim();
        setPatientId(id);
    };

    const onKeyPressHandler = (event) => {
        if (event.key === "Enter") {
            console.log("Pressed enter");
        }
    };

    return (
        <>
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
