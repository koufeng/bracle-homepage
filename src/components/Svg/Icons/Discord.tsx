import { SvgIcon } from "@mui/material";
import { IconProps } from "../type";

const Discord: React.FC<IconProps> = ({ width = "20px", height = "20px" }) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      className="discord-svg"
      fill="none"
      style={{ fill: "none", width, height }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
      >
        <path
          d="M17.789 3.69933C16.4296 3.06332 14.9761 2.60109 13.4565 2.33789C13.2699 2.6753 13.0519 3.12912 12.9016 3.49014C11.2862 3.24721 9.68567 3.24721 8.10001 3.49014C7.94972 3.12912 7.72674 2.6753 7.53844 2.33789C6.01721 2.60109 4.56204 3.06501 3.20267 3.7027C0.460812 7.846 -0.28246 11.8864 0.0891771 15.8694C1.90772 17.2275 3.67011 18.0524 5.40275 18.5923C5.83055 18.0035 6.21209 17.3776 6.54078 16.718C5.91478 16.4801 5.31521 16.1866 4.74869 15.8458C4.89898 15.7345 5.046 15.618 5.18803 15.4983C8.64342 17.1144 12.3978 17.1144 15.8119 15.4983C15.9556 15.618 16.1026 15.7345 16.2512 15.8458C15.683 16.1883 15.0818 16.4818 14.4558 16.7197C14.7845 17.3776 15.1644 18.0052 15.5939 18.5939C17.3282 18.0541 19.0922 17.2292 20.9107 15.8694C21.3468 11.2521 20.1658 7.24879 17.789 3.69933ZM7.01153 13.4199C5.97426 13.4199 5.12361 12.4515 5.12361 11.2723C5.12361 10.0931 5.95609 9.12307 7.01153 9.12307C8.06699 9.12307 8.91761 10.0914 8.89945 11.2723C8.90109 12.4515 8.06699 13.4199 7.01153 13.4199ZM13.9884 13.4199C12.9511 13.4199 12.1005 12.4515 12.1005 11.2723C12.1005 10.0931 12.9329 9.12307 13.9884 9.12307C15.0438 9.12307 15.8945 10.0914 15.8763 11.2723C15.8763 12.4515 15.0438 13.4199 13.9884 13.4199Z"
          fill="white"
          className="fill-color"
        />
      </svg>
    </SvgIcon>
  );
};

export default Discord;
