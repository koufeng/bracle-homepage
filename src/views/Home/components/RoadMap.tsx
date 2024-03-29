import { styled } from "@mui/material/styles";
import { Stack, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const RoadBox = styled(Stack)`
  width: 100%;
  background: linear-gradient(180deg, #db7103 0%, #b65010 25.76%);
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

const RoaTitle = styled(Typography)`
  color: #fff;
  font-family: Arboria-Medium;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const RoaDesc = styled(Typography)`
  color: #fff;
  font-family: Arboria-Book;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const LineGrid = styled(Grid)`
  height: 2px;
  background: #d9d9d9;
`;

const LineGridItem = styled(Grid)`
  position: relative;
`;

const LineDot = styled(Box)`
  position: absolute;
  left: 0;
  top: -13px;
  width: 22px;
  height: 22px;
  border: 4px solid #fff;
  background: #b75010;
  border-radius: 50%;
`;

interface RoaItem {
  title: string;
  desc: string;
}

const RoadMap = () => {
  const theme = useTheme();
  const downToMd = useMediaQuery(theme.breakpoints.down("md"));
  const RoaList: RoaItem[] = [
    {
      title: "Welcome",
      desc: "As part of the claiming process, we will carefully review your wallet activity and/or Discord account to accurately determine the total number of tokens you are eligible to claim.",
    },
    {
      title: "Review Eligibility",
      desc: "Select the ecosystems supported by Bracle in which you are active. If applicable, tick the Bracle Discord checkbox.",
    },
    {
      title: "Verify Eligibility",
      desc: "Link your wallets and, if relevant, log in to your Discord account. Your token allocation will be shown for each linked wallet or account.",
    },
    {
      title: "Log in",
      desc: "Bracle is native to BTC. If you haven't already, please connect your wallet. If you don't have one, the Claim Page will guide you in creating a new wallet. The wallet you link during this process will receive your allocation.",
    },
  ];
  return (
    <RoadBox justifyContent="center" alignItems="center" direction="row">
      <Containter>
        <Title2Box mt={15}>
          <Title2>Road map</Title2>
        </Title2Box>
        <Box mt={70}>
          <Grid container rowSpacing={30}>
            {RoaList.filter((fitem, findex) => findex % 2 === 0).map(
              (d: RoaItem, index: number) => (
                <>
                  <Grid xs={3} md={3}>
                    <Stack
                      justifyContent="start"
                      alignItems="flex-end"
                      direction="row"
                      height={150}
                    >
                      <Box>
                        <RoaTitle>{d.title}</RoaTitle>
                        <RoaDesc mt={20}>{d.desc}</RoaDesc>
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid xs={3} md={3}></Grid>
                </>
              )
            )}
          </Grid>
          <LineGrid my={30} container rowSpacing={30}>
            {RoaList.map((d: RoaItem, index: number) => (
              <>
                <LineGridItem xs={3} md={3}>
                  {<LineDot></LineDot>}
                </LineGridItem>
              </>
            ))}
          </LineGrid>
          <Grid container rowSpacing={30}>
            {RoaList.filter((fitem, findex) => findex % 2 !== 0).map(
              (d: RoaItem, index: number) => (
                <>
                  <Grid xs={3} md={3}></Grid>
                  <Grid xs={3} md={3}>
                    <Stack
                      justifyContent="start"
                      alignItems="flex-start"
                      direction="row"
                      height={150}
                    >
                      <Box>
                        <RoaTitle>{d.title}</RoaTitle>
                        <RoaDesc mt={20}>{d.desc}</RoaDesc>
                      </Box>
                    </Stack>
                  </Grid>
                </>
              )
            )}
          </Grid>
        </Box>
      </Containter>
    </RoadBox>
  );
};

export default RoadMap;
