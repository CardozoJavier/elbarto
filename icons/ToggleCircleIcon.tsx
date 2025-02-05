import React from 'react';
import { Container } from './styles/ToggleCircleIcon.styles';

const ToggleCircleIcon = ({ className, disabled }: { className: string, disabled: boolean }): JSX.Element => (
  <Container className={className} disabled={disabled} >
    <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
      <circle cx="11" cy="11" r="10" fill="white"/>
      <circle cx="11" cy="11" r="9.5" stroke="#E6E3E3"/>
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dx="1" dy="1"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>
  </Container>
);

export default ToggleCircleIcon;
