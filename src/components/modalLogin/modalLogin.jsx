import React from 'react';
import { Sheet } from 'react-modal-sheet';
import { useState } from 'react';
import style from "../modalLogin/modalLogin.module.css";


const ModalLogin = () => {
    return (
        <>
            <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
            <Sheet.Container className={style['react-modal-sheet-container']}>
                    <Sheet.Header />
                    <Sheet.Content>

                        this is my modallll!!!!!!!!!

                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    );
}

export default ModalLogin;
