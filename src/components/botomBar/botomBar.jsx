import React from 'react';
import style from "../botomBar/botomBar.module.css";
import icon1 from "../../assets/home.svg";
import icon2 from "../../assets/dish.svg";
import icon3 from "../../assets/fav.svg";
import icon4 from "../../assets/orders.svg";
import icon5 from "../../assets/account.svg";


const BotomBar = () => {
    return (

        <div className={style.botomBar}>
            <div className={style.allIcons}>
                
                <img src={icon1} className={style.icon} />
                <img src={icon2} className={style.icon} />
                <img src={icon3} className={style.icon} />
                <img src={icon4} className={style.icon} />
                <img src={icon5} className={style.icon} />

            </div>
        </div>
    );
}

export default BotomBar;
