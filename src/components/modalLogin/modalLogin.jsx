import React, { useState } from 'react';
import { Sheet } from 'react-modal-sheet';
import style from "../modalLogin/modalLogin.module.css";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import img1 from "../../assets/facebook.svg";
import img2 from "../../assets/fingerPrint.svg";
import img3 from "../../assets/google.svg";


const ModalLogin = () => {

    return (
        <>
            <Sheet isOpen={true} >
                <Sheet.Container className={style['react-modal-sheet-container']}>

                    <Sheet.Content className={style.content}>
                        <header className={style.wellcome}>
                            Welecome
                        </header>
                        <p className={style.pragraph}>Lorem ipsum dolor sit amet,
                            consectetur adipiscing,<br /> sed do eiusmod tempor incididunt ut labore et dolore <br />
                            magna aliqua.  </p>

                        <div className={style.inputs}>
                            <div className={style.inputt}>
                                <p className={style.text}>Email or Mobile Number</p>
                                <input type="text" className={style.input} />
                            </div>
                            <div className={style.inputt}>
                                <p className={style.text}>Password</p>
                                <div>
                                    <input type="password" className={style.input} />
                                    {/* <IoMdEyeOff className={style.icone} /> */}
                                    <p className={style.forget}>Forget password</p>
                                </div>
                            </div>
                        </div>
                        <button className={style.logIn}>Log In</button>

                        <p className={style.signUp}>or sign up with</p>
                        <div className={style.group}>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                        </div>
                        <div className={style.haveAccount}><p>Don’t have an account? <span className={style.span}>Sing Up</span></p></div>
                    </Sheet.Content>
                </Sheet.Container>
            </Sheet>
        </>
    );
}

export default ModalLogin;
