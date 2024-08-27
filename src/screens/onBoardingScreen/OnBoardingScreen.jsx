import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import style from './OnBoardingScreen.module.css';
import { IoIosArrowForward } from 'react-icons/io';
import MyModal from '../../components/modalGetStarted/modalSheet';
import image1 from "../../assets/image.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

import { useNavigate } from 'react-router-dom';

const images = [
  {
    label: 'Image 1',
    imgPath: image2,
  },
  {
    label: 'Image 2',
    imgPath: image1,
  },
  {
    label: 'Image 3',
    imgPath: image3,
  },
];

const OnBoardingScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setModalOpen] = useState(true);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setModalOpen(false);
    }
  };

  return (
    <div className={style.page}>
      <SwitchTransition>
        <CSSTransition
          key={currentSlide}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames={{
            enter: style.fadeEnter,
            enterActive: style.fadeEnterActive,
            exit: style.fadeExit,
            exitActive: style.fadeExitActive,
          }}
        >
          <img src={images[currentSlide].imgPath} className={style.img} alt="Onboarding" />
        </CSSTransition>
      </SwitchTransition>
      <div className={style.skip}>
        <p onClick={handleNext}>Skip</p>
        <IoIosArrowForward className={style.IoIo} />
      </div>
      <MyModal
        isOpen={isModalOpen}
        currentSlide={currentSlide}
        setOpen={setModalOpen}
        handleNext={handleNext}
      />
    </div>
  );
};

export default OnBoardingScreen;
