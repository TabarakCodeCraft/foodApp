import React, { useState } from 'react';
import style from "../onBoardingScreen/OnBoardingScreen.module.css";
import img1 from "../../assets/image2.png";
import im2 from "../../assets/image.png";
import im3 from "../../assets/image3.png";


import MyModal from "../../components/modalSheet/modalSheet";

const OnBoardingScreen = () => {
    const [isModalOpen, setModalOpen] = useState(true);
    const img = [img1, im2, im3];


    return (
        <div className={style.page}>
            <img src={img1} className={style.img} />
            <MyModal isOpen={isModalOpen} setOpen={setModalOpen} />
        </div>
    );
}

export default OnBoardingScreen;
