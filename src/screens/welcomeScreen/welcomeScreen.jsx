import React, {Link} from 'react';
import style from "../welcomeScreen/welcomeScreen.module.css";
import logo from "../../assets/welcome.svg";

const WellcomeScreen = () => {
    return (
        <div className={style.page}>
            <img src={logo} className={style.logoWelcome} />
            <h1 className={style.title}><span className={style.span}>YUM</span>QUICK</h1>
            <p className={style.paragraph}>Lorem ipsum dolor sit amet consectetur.
                <br /> temporibus quos porro cumque commodi!</p>
            <button className={style.btn1}> <Link>Log In</Link></button>
            <button className={style.btn2}>Sign Up</button>

        </div>
    );
}

export default WellcomeScreen;
