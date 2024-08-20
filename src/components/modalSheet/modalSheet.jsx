import { Sheet } from 'react-modal-sheet';
import style from "../modalSheet/modalSheet.module.css"
import icon from "../../assets/icon1.svg"
import icon2 from "../../assets/icone2.svg"
import icon3 from "../../assets/icone3.svg"


function MyModal({ isOpen, setOpen }) {
    const icons = [icon, icon2, icon3]

    return (
        <>
            <Sheet isOpen={isOpen}>
                <Sheet.Container className={style['react-modal-sheet-container']}>
                    <Sheet.Content className={style.Content}>
                        <img src={icon} className={style.icon} />
                        <h1 className={style.text}>Order For Food</h1>
                        <p className={style.pr}>
                            Lorem ipsum dolor sit amet, conse ctetur <br />
                            adipiscing elit, sed do eiusmod tempor <br />
                            incididunt ut labore et dolore magna.</p>
                        <button className={style.next}>Next</button>

                    </Sheet.Content>
                </Sheet.Container>
                {/* <Sheet.Backdrop /> */}
            </Sheet>
        </>
    );
}

export default MyModal;
