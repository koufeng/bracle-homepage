import { SvgIcon } from "@mui/material";
import { IconProps } from "../type";

const Twitter: React.FC<IconProps> = ({ fontSize = "20px" }) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      className="twitter-svg"
      viewBox="0 0 20 18"
      fill="none"
      style={{ fill: "none", fontSize: fontSize }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
      >
        <path
          d="M15.7467 0H18.8257L12.1405 7.6246L20 18H13.8326L9.00601 11.7046L3.45816 18H0.39759L7.54506 9.84922L0 0H6.3153L10.6704 5.75075L15.7467 0ZM14.6741 16.1723H16.3662L5.42765 1.73536H3.57836L14.6741 16.1723Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  );
};

export default Twitter;
