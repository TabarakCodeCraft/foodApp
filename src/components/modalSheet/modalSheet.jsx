import React from 'react';
import { Sheet } from 'react-modal-sheet';
import style from "../modalSheet/modalSheet.module.css";
import icon from "../../assets/icon1.svg";
import icon2 from "../../assets/icone2.svg";
import icon3 from "../../assets/icone3.svg";
import { Stepper } from 'react-form-stepper';

const modalContent = [
    {
        icon: icon,
        text: "Order For Food",
        description: " favorite meals from a variety of cuisines,\nand get them delivered right to your doorstep.\nEnjoy fresh and hot meals anytime, anywhere."
    },
    {
        icon: icon2,
        text: "Easy Payment",
        description: "Experience seamless with easy payment options,\n credit cards, debit cards, and digital wallets.\nYour payments are secure and hassle-free."
    },
    {
        icon: icon3,
        text: "Fast Delivery",
        description: "Get your orders with express delivery service.\nTrack order in real-time and enjoy it any delays.\nFast, reliable, and efficient delivery."
    }
];

function MyModal({ isOpen, currentSlide, handleNext }) {
    const { icon, text, description } = modalContent[currentSlide] || modalContent[0];

    return (
        <Sheet isOpen={isOpen} disableDrag={true}>
            <Sheet.Container className={style['react-modal-sheet-container']}>
                <Sheet.Content className={style.Content}>
                    
                    <img src={icon} className={style.icon} alt="icon" />
                    <h1 className={style.text}>{text}</h1>
                    <p className={style.pr}>
                        {description.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <Stepper
                        steps={[{ label: '' }, { label: '' }, { label: ' ' }]}
                        activeStep={currentSlide}
                        className={style.stepper}
                    />

                    <button className={style.next} onClick={handleNext}>
                        {currentSlide < modalContent.length - 1 ? 'Next' : 'Get Started'}
                    </button>
                </Sheet.Content>
            </Sheet.Container>
        </Sheet>
    );
}

export default MyModal;
