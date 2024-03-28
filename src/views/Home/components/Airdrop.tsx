import { styled } from "@mui/material/styles";
import { Stack, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import ItemBg from "assets/images/home/airdrop-bg.png";
import ItemBg2 from "assets/images/home/airdrop-bg-2.png";

import Grid from "@mui/material/Unstable_Grid2";

const ServicesBox = styled(Stack)`
  width: 100%;
  background-color: #fff;
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

const GridItem = styled(Stack)<{index: number;}>`
  background-image: ${({index}) => index === 0 || index === 3 ? `url(${ItemBg})` : `url(${ItemBg2})` };
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 200px;
  padding: ${({index}) => index === 0 || index === 3 ? `30px` : `30px 30px 30px 60px` };
`;

const StepBox = styled(Stack)`
  width: 40px;
  height: 40px;
  background: #dc7637;
  border-radius: 50%;
`;

const StepText = styled(Typography)`
  color: #fff;
  font-family: Arboria-Medium;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Title = styled(Typography)`
  color: var(--black, #272727);
  font-family: Arboria-Medium;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AirDesc = styled(Typography)`
  color: var(--black, #272727);
  font-family: Arboria-Book;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

interface AirItem {
  title: string;
  desc: string;
}

const Airdrop = () => {
  const theme = useTheme();
  const downToMd = useMediaQuery(theme.breakpoints.down("md"));
  const AirList: AirItem[] = [
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
    {
      title: "Claim Tokens",
      desc: 'Click on the "sign" button linked with each wallet. Your wallet(s) will prompt you to confirm the transaction. Confirm by clicking "sign" in the pop-up window of your wallet.',
    },
    {
      title: "Next Steps",
      desc: "You will receive your allocation in your connected wallet. From there, you can engage in sharing your experience and participate in Bracle Governance. If necessary, you can also repeat the Claim Process.",
    },
  ];
  return (
    <ServicesBox justifyContent="center" alignItems="center" direction="row">
      <Containter>
        <Title1>Airdrop</Title1>
        <Title2Box mt={15}>
          <Title2>Bracle Airdrop Process</Title2>
        </Title2Box>
        <DescBox mt={6}>
          <Desc>
            This brief guide will guide you through the Claim Process for the
            Pyth Network Retrospective Airdrop.
          </Desc>
        </DescBox>
        <Grid mt={70} container rowSpacing={30}>
          {AirList.map((d: AirItem, index: number) => (
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
          ))}
        </Grid>
      </Containter>
    </ServicesBox>
  );
};

export default Airdrop;
