import React from "react";
import styles from "./css/Header.module.css";
import Home from "./Home";
import Login from "./Login";
const Header = (props) => {
    return (
        <header className={styles.header}>
            <p>myWellness</p>
            {props.login && <Login as={props.as} />}
            {props.home && <Home />}
        </header>
    );
};

export default Header;
