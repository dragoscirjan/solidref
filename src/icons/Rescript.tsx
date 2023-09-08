import React from 'react';
import {SvgIconProps} from '@mui/material';
import {createSvgIcon} from './SvgIcon';

const SvgIcon = createSvgIcon({
  viewBox: '0 0 250 250',
});

const Rescript: React.FunctionComponent<SvgIconProps> = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <g filter="url(#filter0_i)">
        <path
          d="M0 80.0864C0 46.7186 6.38451e-06 30.0439 8.49552 18.3416C11.2413 14.5639 14.5639 11.2412 18.3417 8.49549C30.0322 -1.91535e-05 46.7186 0 80.0814 0H169.912C203.28 0 219.954 -1.91535e-05 231.657 8.49549C235.434 11.2402 238.755 14.563 241.498 18.3416C249.998 30.0372 249.998 46.7186 249.998 80.0864V169.914C249.998 203.281 249.998 219.956 241.498 231.658C238.756 235.436 235.435 238.758 231.657 241.499C219.961 250 203.28 250 169.912 250H80.0814C46.7186 250 30.0389 250 18.3417 241.499C14.563 238.757 11.2402 235.435 8.49552 231.658C6.38451e-06 219.963 0 203.281 0 169.914V80.0864Z"
          fill="url(#paint0_linear)"
        />
      </g>
      <g filter="url(#filter1_di)">
        <path
          d="M169.41 121.016C185.803 121.016 199.093 107.726 199.093 91.3333C199.093 74.9401 185.803 61.6509 169.41 61.6509C153.017 61.6509 139.728 74.9401 139.728 91.3333C139.728 107.726 153.017 121.016 169.41 121.016Z"
          fill="white"
        />
      </g>
      <path
        d="M67.416 89.6876C67.416 80.2648 67.416 75.5518 69.2571 71.9467C70.8672 68.7756 73.4421 66.1971 76.6111 64.5826C80.2112 62.7516 84.9242 62.7517 94.3519 62.7517L115.854 60.6602L117.915 62.7517V172.151C117.915 179.992 117.346 183.517 116.064 186.606C115.218 188.648 113.978 190.504 112.415 192.066C110.852 193.629 108.997 194.869 106.954 195.714C103.863 196.996 100.509 197.394 92.6699 197.394C84.8288 197.394 80.9057 197.394 77.8162 196.112C75.774 195.267 73.9184 194.027 72.3554 192.464C70.7923 190.902 69.5524 189.046 68.7064 187.004C67.4244 183.913 67.4244 179.99 67.4244 172.151L67.416 89.6876Z"
        fill="black"
        fill-opacity="0.2"
      />
      <g filter="url(#filter2_i)">
        <path
          d="M65.3176 87.5824C65.3176 78.1597 65.3176 73.4466 67.1587 69.8416C68.7688 66.6704 71.3438 64.092 74.5127 62.4775C78.1128 60.6465 82.8258 60.6465 92.2535 60.6465H115.817V170.045C115.817 177.887 115.817 181.81 114.535 184.899C113.689 186.941 112.449 188.797 110.886 190.359C109.323 191.922 107.467 193.162 105.425 194.007C102.334 195.289 98.411 195.289 90.5716 195.289C82.7304 195.289 78.8074 195.289 75.7178 194.007C73.6756 193.162 71.8201 191.922 70.257 190.359C68.6939 188.797 67.454 186.941 66.608 184.899C65.326 181.808 65.326 177.885 65.326 170.045L65.3176 87.5824Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i"
          x="0"
          y="-1.67367"
          width="249.998"
          height="251.674"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1.67367" />
          <feGaussianBlur stdDeviation="1.67367" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter1_di"
          x="136.38"
          y="56.6299"
          width="64.8321"
          height="66.5058"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx="2.11999" dy="2.11999" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-3.34735" dy="-5.02102" />
          <feGaussianBlur stdDeviation="4.23998" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.909804 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        </filter>
        <filter
          id="filter2_i"
          x="61.968"
          y="55.6255"
          width="53.849"
          height="139.664"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-3.34959" dy="-5.02102" />
          <feGaussianBlur stdDeviation="4.23998" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.909804 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <linearGradient id="paint0_linear" x1="124.999" y1="0" x2="215.066" y2="241.846" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E84F4F" />
          <stop offset="0.408823" stop-color="#DB4646" />
          <stop offset="0.998911" stop-color="#CB3939" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

export default Rescript;
