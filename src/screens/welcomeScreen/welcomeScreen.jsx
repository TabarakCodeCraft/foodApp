import React from 'react';
import style from "../welcomeScreen/welcomeScreen.module.css";
import logo from "../../assets/welcome.svg";
import { useNavigate } from 'react-router-dom';

const WellcomeScreen = () => {
    const navigate = useNavigate();

    const goToOnboarding = () => {
        navigate('/onboarding');
    }
    return (
        <div className={style.page}>
            hhhhhhhhhhhhh
            <img src={logo} className={style.logoWelcome} />
            <h1 className={style.title}><span className={style.span}>YUM</span>QUICK</h1>
            <p className={style.paragraph}>Lorem ipsum dolor sit amet consectetur.
                <br /> temporibus quos porro cumque commodi!</p>
            <button className={style.btn1} onClick={goToOnboarding}> Log In</button>
            <button className={style.btn2} onClick={goToOnboarding}>Sign Up</button>

        </div>
    );
}

export default WellcomeScreen;
