import React from 'react';
import style from "../onBoardingScreen/OnBoardingScreen.module.css";
import img from "../../assets/image2.png";


const OnBoardingScreen = () => {
    return (
        <div className={style.page}> 
        <img src={img} className={style.img} />
\        </div>
    );
}

export default OnBoardingScreen;
