import React from "react";
import AdminLogin from "./AdminLogin";
import HospitalLogin from "./HospitalLogin";

const Login = (props) => {
    return (
        <>
            {props.admin && <AdminLogin />}
            {props.hospital && <HospitalLogin />}
        </>
    );
};

export default Login;
