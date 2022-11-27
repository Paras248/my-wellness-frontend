import React from "react";
import Header from "../components/header/Header";
import Login from "../components/login/Login";

const HospitalLoginPage = () => {
    return (
        <>
            <Header login as="hospital" />
            <Login hospital />
        </>
    );
};

export default HospitalLoginPage;
