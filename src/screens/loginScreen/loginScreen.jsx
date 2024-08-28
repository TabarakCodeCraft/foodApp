import React from 'react';
import style from "../loginScreen/loginScreen.module.css";
import BotomBar from '../../components/botomBar/botomBar';
import { IoChevronBack } from "react-icons/io5";
import ModalLogin from '../../components/modalLogin/modalLogin';

const LoginScreen = () => {
    return (
        <div className={style.page}>
            <div className={style.login}>
                <IoChevronBack className={style.IoChevronBack} />
                <h1 className={style.loginText}>Log In</h1>
            </div>
            <ModalLogin />
            <BotomBar />
        </div>
    );
}

export default LoginScreen;
