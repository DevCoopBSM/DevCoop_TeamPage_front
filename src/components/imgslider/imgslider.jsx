import React, { useState, useEffect } from "react";
import * as S from "./style";
import image1 from "../../image/testlogo.png";
import image2 from "../../image/Logo.png";

const images = [image1, image2, image1];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(true);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleTransitionEnd = () => {
    // 이미지 전환이 끝나면 transition을 false로 설정.
    // 현재 이미지가 마지막 이미지면 첫 번째 이미지로 순간이동해서 이미지 슬라이드가 무한반복처럼 보이게 함.
    setTransition(false);
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    }
  };

  return (
    <div>
      <S.ImageSliderContainer>
        <S.TransparentBlackBox />
        <S.SliderImageWrapper
          style={{
            transform: `translateX(-${currentImageIndex * 33.333333}%)`,
            transition: transition ? "transform 0.5s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`DEVCOOP ${index + 1}`}
              className="slider-image"
              style={{ width: "100%", height: "100%" }}
            />
          ))}
        </S.SliderImageWrapper>
        <S.DevCoopText>DevCoop, but not D.C.</S.DevCoopText>
      </S.ImageSliderContainer>
    </div>
  );
};

export default ImageSlider;
