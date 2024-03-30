// import styled from "@emotion/styled";
import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Logo, LogoDark } from "components/Svg";
import { NavLink } from "react-router-dom";
const LogoBox = ({ isTop }: { isTop: boolean }) => {
  // const theme = useTheme();
  // const downToMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack justifyContent="center" alignItems="center" direction="row">
      <NavLink to={"/"}>{isTop ? <Logo /> : <LogoDark />}</NavLink>
    </Stack>
  );
};

export default LogoBox;
