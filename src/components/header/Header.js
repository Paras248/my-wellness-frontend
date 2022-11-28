import React from "react";
import styles from "./css/Header.module.css";
import Home from "./Home";
import HospitalSearchPatient from "./HospitalSearchPatient";
import Login from "./Login";
const Header = (props) => {
    return (
        <header className={`${styles.header} ${props.shadow ? styles.shadow : null}`}>
            <p className={styles.logo}>MyWellness</p>
            {props.login && <Login as={props.as} />}
            {props.home && <Home />}
            {props.searchPatient && <HospitalSearchPatient />}
        </header>
    );
};

export default Header;
