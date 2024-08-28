import React from 'react';
import { Sheet } from 'react-modal-sheet';
import img1 from "../../assets/facebook.svg";
import img2 from "../../assets/fingerPrint.svg";
import img3 from "../../assets/google.svg";
import style from "../modalSingUp/modalSingUp.module.css";

const ModalSingUp = () => {
    return (
        <Sheet isOpen={true} >
            <Sheet.Container className={style['react-modal-sheet-container']}>

                <Sheet.Content className={style.content}>

                    <div className={style.inputs}>

                        <div className={style.inputt}>
                            <p className={style.text}>Full name</p>
                            <input type="text" className={style.input} />
                        </div>

                        <div className={style.inputt}>
                            <p className={style.text}>Password</p>
                            <input type="password" className={style.input} />
                        </div>

                        <div className={style.inputt}>
                            <p className={style.text}>Email</p>
                            <input type="email" className={style.input} />
                        </div>

                        <div className={style.inputt}>
                            <p className={style.text}>Mobile Number</p>
                            <input type="number" className={style.input} />
                        </div>

                        <div className={style.inputt}>
                            <p className={style.text}>Date of birth</p>
                            <input type="date" className={style.input} />
                        </div>


                    </div>
                    <button className={style.logIn}>Log In</button>

                    <p className={style.signUp}>or sign up with</p>
                    <div className={style.group}>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                    <div className={style.haveAccount}><p>Already have an account? <span className={style.span}>Log in</span></p></div>
                </Sheet.Content>
            </Sheet.Container>
        </Sheet>

    );
}

export default ModalSingUp;
