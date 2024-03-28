import { styled } from "@mui/material/styles";
import { Stack, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import bgPc from "assets/images/home/service-pc-bg.png";
import imgPc from "assets/images/home/service-pc.png";
import bgM from "assets/images/home/service-m-bg.png";
import imgM from "assets/images/home/service-m.png";
const ServicesBox = styled(Stack)`
  width: 100%;
  background-color: #fff;
  background: url(${bgPc}) center no-repeat;
  background-size: cover;
  ${({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      background: `url(${bgM}) top center no-repeat`,
    },
  })};
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
  max-width: 510px;
`;

const Title2 = styled(Typography)`
  color: var(--black, #272727);
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

const DescBox = styled(Box)`
  width: 100%;
  max-width: 740px;
`;

const Desc = styled(Typography)`
  color: var(--black, #272727);
  font-family: Arboria-Book;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`;

const ImgCon = styled("img")`
  width: 100%;
  height: auto;
`;

const Services = () => {
  const theme = useTheme();
  const downToMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ServicesBox justifyContent="center" alignItems="center" direction="row">
      <Containter>
        <Title1>SERVICES</Title1>
        <Title2Box mt={15}>
          <Title2>How does Bracle Price Feeds Work</Title2>
        </Title2Box>
        <DescBox mt={20}>
          <Desc>
            We provide real-time data sourced directly from real-world markets.
            Our verified data is delivered with sub-second latency, ensuring
            accuracy and timeliness.
          </Desc>
        </DescBox>
        <Box mt={30}>
          <ImgCon src={downToMd ? imgM : imgPc}></ImgCon>
        </Box>
      </Containter>
    </ServicesBox>
  );
};

export default Services;
