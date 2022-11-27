import React from "react";
import Header from "../components/header/Header";
import Login from "../components/login/Login";

const AdminLoginPage = () => {
    return (
        <>
            <Header login as="admin" />
            <Login admin />
        </>
    );
};

export default AdminLoginPage;
