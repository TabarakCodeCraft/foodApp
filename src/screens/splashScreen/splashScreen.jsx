import React from 'react';
import style from "../splashScreen/splashScreen.module.css";
import logo from "../../assets/splash.svg";

const SplashScreen = () => {
    return (
        <div className={style.page}>
            <img src={logo} className={style.logoSplash} />
            <h1 className={style.title}><span className={style.span}>YUM</span>QUICK</h1>

        </div>
    );
}

export default SplashScreen;
