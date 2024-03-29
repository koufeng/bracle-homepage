import { styled } from "@mui/material/styles";
import { Stack, Typography, Box } from "@mui/material";
import BannerBg from "assets/images/banner.png";
import BannerImg from "assets/images/banner-logo.png";

const BanBox = styled(Stack)`
  width: 100%;
  height: 100vh;
  background: url(${BannerBg}) center no-repeat;
  background-size: cover;
  position: relative;
`;

const Containter = styled(Stack)`
  height: 100%;
  width: 1200px;
  ${({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  })};
`;

const PcBox = styled(Stack)`
  ${({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  })};
`;

const MBox = styled(Stack)`
  padding: 20px;
  ${({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  })};
`;

const ImgCon = styled("img")`
  width: 100%;
  height: auto;
`;

const DescPc = styled(Typography)`
  color: #fff;
  font-family: Arboria-Book;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`;

const DescM = styled(Typography)`
  color: #fff;
  font-family: Arboria-Book;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const Banner = () => {
  return (
    <BanBox justifyContent="center" alignItems="center" direction="row">
      <Containter>
        <Stack
          height={"100%"}
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          <PcBox
            justifyContent={"space-between"}
            alignItems={"center"}
            direction="row"
            height={"100%"}
            width={"100%"}
          >
            <Box width={550}>
              <Box>
                <Typography variant="h1">
                  Data-Driven Bitcoin Ecosystem Future
                </Typography>
              </Box>
              <Box>
                <DescPc mt={56}>
                  Bracle Network is a Decentralized Oracle Network and Data
                  Market built for Bitcoin and the broader blockchain ecosystem
                </DescPc>
              </Box>
            </Box>
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
              width={360}
            >
              <ImgCon src={BannerImg} />
            </Stack>
          </PcBox>
          <MBox
            justifyContent="space-between"
            alignItems="center"
            direction="column"
            height={"100%"}
          >
            <Box mt={120}>
              <Typography fontSize={50} variant="h1">
                Data-Driven Bitcoin Ecosystem Future
              </Typography>
            </Box>
            <Stack
              justifyContent="flex-end"
              alignItems="center"
              direction="row"
              mt={20}
              width={"100%"}
              pr={60}
            >
              <ImgCon
                style={{ width: "170px", height: "auto" }}
                src={BannerImg}
              />
            </Stack>
            <Box mb={120}>
              <DescM mt={30}>
                Bracle Network is a Decentralized Oracle Network and Data Market
                built for Bitcoin and the broader blockchain ecosystem
              </DescM>
            </Box>
          </MBox>
        </Stack>
      </Containter>
    </BanBox>
  );
};

export default Banner;
