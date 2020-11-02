import React from 'react';
import * as S from './Background.styled';

const Background: React.FC = ({ children }) => {
  return (
    <S.Background>
      <S.BackgroundShape viewBox="0 0 320 553" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-6.86646e-05 -109H266C266 -109 309.592 -33.6145 426 -17.0001C513.841 -4.46275 559.476 -3.94939 634 45.0001C634 137.381 342.565 498.61 297 506C107.816 536.683 233.769 24.0342 -12.0001 133"
            fill="url(#paint0_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="-37.0001"
            y="-114"
            width="696"
            height="666.327"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="12.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.12549 0 0 0 0 0.121569 0 0 0 0 0.211765 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <linearGradient id="paint0_linear" x1="-66" y1="538" x2="636" y2="538" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8658EB" />
            <stop offset="1" stopColor="#652AE6" />
          </linearGradient>
        </defs>
      </S.BackgroundShape>
      {children}
    </S.Background>
  );
};

export default Background;
