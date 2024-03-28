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

const RoadMap = () => {
  const theme = useTheme();
  const downToMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <RoadBox justifyContent="center" alignItems="center" direction="row">
      <Containter>
        <Title2Box mt={15}>
          <Title2>Road map</Title2>
        </Title2Box>
        <Grid mt={70} container rowSpacing={30}>
          {/* {AirList.map((d: AirItem, index: number) => (
            <Grid xs={4} md={4}>
              <GridItem index={index}>
                <Stack
                  justifyContent="start"
                  alignItems="center"
                  direction="row"
                >
                  <StepBox justifyContent="center"
                  alignItems="center"
                  direction="row">
                    <StepText>{index + 1}</StepText>
                  </StepBox>
                  <Title ml={15}>{d.title}</Title>
                </Stack>
                <AirDesc mt={45}>{d.desc}</AirDesc>
              </GridItem>
            </Grid>
          ))} */}
        </Grid>
      </Containter>
    </RoadBox>
  );
};

export default RoadMap;
