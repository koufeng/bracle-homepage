import { styled } from "@mui/material/styles";
import { Stack, Typography, Box } from "@mui/material";
import babylon from "assets/images/partners/babylon.png";
import binance from "assets/images/partners/binance.png";
import bouncebit from "assets/images/partners/bouncebit.png";
import bybit from "assets/images/partners/bybit.png";
import coingecko from "assets/images/partners/coingecko.png";
import lpt from "assets/images/partners/lpt.png";
import merlinchain from "assets/images/partners/merlinchain.png";
import mirana from "assets/images/partners/mirana.png";
import okx from "assets/images/partners/okx.png";
import rockx from "assets/images/partners/rockx.png";
import timeresearch from "assets/images/partners/timeresearch.png";

const PartnersBox = styled(Stack)`
  width: 100%;
  background: #272727;
`;

const ParOut = styled(Stack)`
  height: 25px;
  width: 100%;
  padding: 25px;
  overflow: hidden;
  position: relative;
`;

const ImgCon = styled("img")`
  width: auto;
  height: 25px;
  margin-right: 50px;
`;

const ParInner = styled(Stack)`
  @keyframes move {
    0% {
      left: 0;
    }
    100% {
      left: -1976px;
    }
  }
  position: absolute;
  top: 25px;
  left: 0;
  height: 25px;
  animation: 15s move infinite linear;
  -webkit-animation: 15s move infinite linear;
  &:hover {
    animation-play-state: paused;
  }
`;

const Partners = () => {
  const ParList = [
    <ImgCon src={bouncebit} />,
    <ImgCon src={babylon} />,
    <ImgCon src={coingecko} />,
    <ImgCon src={binance} />,
    <ImgCon src={okx} />,
    <ImgCon src={bybit} />,
    <ImgCon src={rockx} />,
    <ImgCon src={mirana} />,
    <ImgCon src={timeresearch} />,
    <ImgCon src={merlinchain} />,
    <ImgCon src={lpt} />,
  ];
  return (
    <PartnersBox justifyContent="center" alignItems="center" direction="row">
      <ParOut justifyContent="start" alignItems="center" direction="row">
        <ParInner justifyContent="start" alignItems="center" direction="row">
          {ParList.map((d: any) => (
            <Box>{d}</Box>
          ))}
          {ParList.map((d: any) => (
            <Box>{d}</Box>
          ))}
        </ParInner>
      </ParOut>
    </PartnersBox>
  );
};

export default Partners;
