import React from "react";

const patientDetail = (props) => {
    return (
        <li style={{ display: "flex" }}>
            <p style={{ marginRight: 10 }}>{props.title}:</p>
            <p>{props.text}</p>
        </li>
    );
};

export default patientDetail;
