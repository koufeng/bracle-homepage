import { Box, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import Nav from "./Nav";
import LogoBox from "./Logo";
import { useState, useEffect } from "react";
import _ from "lodash";

const Wrapper = styled("div")<{ isTop: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 60px;
  background: ${({ isTop }) =>
    isTop ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 1)"};
  animation: ${({ isTop }) =>
    isTop ? " up 0.5s forwards" : "down 0.5s forwards"};
  box-shadow: 0px 2px 10px 0px rgba(81, 45, 45, 0.05);
  backdrop-filter: blur(20px);
  z-index: 99;
  box-sizing: border-box;
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      top: 0,
      padding: "0px 25px",
    },
  })};
  @keyframes down {
    from {
      background: rgba(255, 255, 255, 0.15);
    }
    to {
      background-color: rgba(255, 255, 255, 1);
    }
  }
  @keyframes up {
    from {
      background: rgba(255, 255, 255, 1);
    }
    to {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
`;
const Flex = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  const theme = useTheme();
  const upToLg = useMediaQuery(theme.breakpoints.up("lg"));
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handleScroll = _.debounce(() => {
      if (document.body.scrollTop <= 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    }, 50);
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (document.body.scrollTop <= 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  }, []);
  return (
    <Wrapper isTop={isTop}>
      <Flex>
        <LogoBox isTop={isTop} />
        <Nav isTop={isTop} />
      </Flex>
    </Wrapper>
  );
};

export default Header;
