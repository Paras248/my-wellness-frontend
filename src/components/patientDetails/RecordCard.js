import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RecordCard = (props) => {
    const medicines = props.medicines.join(", ");

    let date = props.date.split("T");
    date = date[0].split("-");
    date = date.reverse();
    date = date.join("-");

    return (
        <div>
            <div style={{ display: "flex" }}>
                <p style={{ marginRight: 10 }}>Diagnosis: </p>
                <p>{props.diagnosis}</p>
            </div>
            <div style={{ display: "flex" }}>
                <p style={{ marginRight: 10 }}>Medicines:</p>
                <p>{medicines}</p>
            </div>
            <div style={{ display: "flex" }}>
                <p style={{ marginRight: 10 }}>Description:</p>
                <p>{props.description}</p>
            </div>
            <div style={{ display: "flex" }}>
                <p style={{ marginRight: 10 }}>Date: </p>
                <p>{date}</p>
            </div>
            <Link to={`/hospital/search/patient/${props.id}`}>Know More</Link>
        </div>
    );
};

export default RecordCard;
