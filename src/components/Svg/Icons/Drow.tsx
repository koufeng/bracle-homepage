import { IconProps } from "../type";

const Drow: React.FC<IconProps> = ({ width = '101px', height = '50px' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="draw-svg" width="101" height="50" viewBox="0 0 101 50" fill="none" style={{ width: width, height: height }}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M50.5 50L101 25.1729L50.5 0.345886V16.2142H0V34.1316H50.5V50Z" fill="url(#paint0_linear_224_47040)"/>
      <defs>
        <linearGradient id="paint0_linear_224_47040" x1="91.1086" y1="16.7092" x2="9.89138" y2="16.7092" gradientUnits="userSpaceOnUse">
          <stop stop-color="#D9D9D9"/>
          <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Drow;
