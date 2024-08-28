import React from 'react';
import style from "../singUpScreen/signUp.module.css";
import BotomBar from '../../components/botomBar/botomBar';
import { IoChevronBack } from "react-icons/io5";
import ModalSingUp from '../../components/modalSingUp/modalSingUp';

const SingUpScreen = () => {
    return (
   
        <div className={style.page}>
            <div className={style.NewAccount}>
                <IoChevronBack className={style.IoChevronBack} />
                <h1 className={style.accountText}>New Account</h1>
            </div>
            {/* <ModalLogin /> */}
            <ModalSingUp />
            
            <BotomBar />
        </div>
    );
}

export default SingUpScreen;
