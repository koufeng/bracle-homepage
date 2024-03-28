import { styled } from "@mui/material/styles";
import { Stack, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import imgPc from "assets/images/home/staking-pc.png";
import imgM from "assets/images/home/staking-m.png";
const ServicesBox = styled(Stack)`
  width: 100%;
  background-color: #272727;
`;

const Containter = styled(Stack)`
  height: 100%;
  width: 1200px;
  padding: 80px 0 160px 0;
  ${({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "40px 20px 50px 20px",
    },
  })};
`;

const Title1 = styled(Typography)`
  color: #959595;
  font-family: Arboria-Bold;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Title2Box = styled(Box)`
  width: 100%;
  max-width: 920px;
`;

const Title2 = styled(Typography)`
  color: #fff;
  font-family: Arboria-Book;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 55px;
  ${({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      fontSize: "36px",
      lineHeight: "40px",
    },
  })};
`;

const ImgCon = styled("img")`
  width: 100%;
  height: auto;
`;

const Staking = () => {
  const theme = useTheme();
  const downToMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ServicesBox justifyContent="center" alignItems="center" direction="row">
      <Containter>
        <Title1>STAKING & RESTAKING</Title1>
        <Title2Box mt={15}>
          <Title2>Powering Bracle Network security and earning rewards through staking</Title2>
        </Title2Box>
        <Box mt={90}>
          <ImgCon src={downToMd ? imgM : imgPc}></ImgCon>
        </Box>
      </Containter>
    </ServicesBox>
  );
};

export default Staking;
