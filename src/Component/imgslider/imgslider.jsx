import React, { useState, useEffect } from "react";
import * as S from "./style";
import image1 from "../../image/Logo.png";
import image2 from "../../image/Logo.png";

const images = [image1, image2]; // 이미지 파일 경로 추가

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 이미지 변경 주기 (5초마다)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
    <S.ImageSliderContainer>
      <S.TransparentBlackBox />
      <img
        src={images[currentImageIndex]}
        alt="DEVCOOP"
        className="slider-image"
      />
      <S.DevCoopText>DEVCOOP<p></p>(디씨인사이드아님)</S.DevCoopText>
    </S.ImageSliderContainer>
    </div>
  );
};

export default ImageSlider;
