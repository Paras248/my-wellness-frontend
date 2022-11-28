import React from "react";
import Header from "../components/header/Header";
import exerciseImage from "../assets/main.svg";
import background from "../assets/background.jpg";

import styles from "./css/HomePage.module.css";
const HomePage = () => {
    return (
        <div>
            <img src={background} className={styles.background} alt="background images" />
            <Header home />
            <div className={styles.container}>
                <div className={styles.text}>
                    <p>Because Health</p>
                    <p>Matters.</p>
                </div>
                <div>
                    <img
                        src={exerciseImage}
                        className={styles.image}
                        alt="exercise img"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
