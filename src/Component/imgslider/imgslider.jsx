import React, { useState, useEffect } from "react";
import * as S from "./style";
import image1 from "../../image/testlogo.png";
import image2 from "../../image/Logo.png";

const images = [image1, image2]; // 이미지 파일 경로 추가

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(true); // 화면 전환 트랜지션 활성화
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 이미지 변경 주기 (5초마다)

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleTransitionEnd = () => {
    setTransition(false); // 화면 전환 트랜지션 비활성화
  };

  return (
    <div>
      <S.ImageSliderContainer>
        <S.TransparentBlackBox />
        <S.SliderImageWrapper
          style={{
            transform: `translateX(-${currentImageIndex * 50}%)`,
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
              style={{ width: "100%" }}
            />
          ))}
        </S.SliderImageWrapper>
        <S.DevCoopText>DevCoop, but not D.C.</S.DevCoopText>
      </S.ImageSliderContainer>
    </div>
  );
};

export default ImageSlider;
