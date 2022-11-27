import React from "react";
import { Link } from "react-router-dom";

const HospitalSearchPatient = (props) => {
    return (
        <>
            <Link to="/hospital/add/patient/record">addRecord</Link>
            <Link to="/">Logout</Link>
        </>
    );
};

export default HospitalSearchPatient;
