import { styled } from "@mui/material/styles";
import { Stack, Typography, Box } from "@mui/material";
import bg from "assets/images/privacy-bg.png";

const Containter = styled(Stack)`
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {},
  })};
`;

const Banner = styled(Stack)`
  width: 100%;
  height: 400px;
  background: linear-gradient(to right bottom, #000000, #320900);
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      height: "300px",
    },
  })};
`;

const PrCon = styled(Stack)`
  height: 100%;
  width: 960px;
  padding: 80px 0 160px 0;
  ${({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "40px 20px 50px 20px",
    },
  })};
`;

const Head = styled(Typography)`
  ${({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      fontSize: "45px",
    },
  })};
`;

const BannerInner = styled(Stack)`
  width: 100%;
  height: 500px;
  background-image: url(${bg});
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Title = styled(Typography)`
  color: #000;
  font-family: Arboria-Medium;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 20px;
`;

const InfoP = styled(Typography)`
  color: #000;
  font-family: Arboria-Book;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 20px;
`;

const PrivacyPolicy = () => {
  return (
    <Containter>
      <Banner>
        <BannerInner
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          <Head pt={70} variant="h1">
            Privacy Policy
          </Head>
        </BannerInner>
      </Banner>
      <Stack justifyContent="center" alignItems="center" direction="row">
        <PrCon>
          <Title>LIMITED LICENSE</Title>
          <InfoP>
            Nothing contained in these Terms of Use or the Site itself grants or
            will be construed to grant to you or any third party any title or
            interest in or any license or right to use or reproduce, any image,
            text, software, code, trademark, logo or service mark contained in
            the Site, including without limitation the names or logos of Bracle.
            Bracle reserves, and will enforce to the fullest extent possible,
            all rights that it may have with respect to copyright and trademark
            ownership of all material contained in the Site. Bracle grants you a
            limited, nonexclusive license to display and otherwise use portions
            of the Site solely for your own private, non-commercial
            informational purposes only, and to print pages from the Site only
            in connection with that use. You may not modify, distribute,
            transmit, perform, reproduce, publish, license, create derivative
            works from, transfer or sell any text, graphics, logos and other
            source-identifying symbols, designs, icons, images, or other
            information, software or code obtained from the Site.
          </InfoP>
          <Title>LIMITED LICENSE</Title>
          <InfoP>
            Nothing contained in these Terms of Use or the Site itself grants or
            will be construed to grant to you or any third party any title or
            interest in or any license or right to use or reproduce, any image,
            text, software, code, trademark, logo or service mark contained in
            the Site, including without limitation the names or logos of Bracle.
            Bracle reserves, and will enforce to the fullest extent possible,
            all rights that it may have with respect to copyright and trademark
            ownership of all material contained in the Site. Bracle grants you a
            limited, nonexclusive license to display and otherwise use portions
            of the Site solely for your own private, non-commercial
            informational purposes only, and to print pages from the Site only
            in connection with that use. You may not modify, distribute,
            transmit, perform, reproduce, publish, license, create derivative
            works from, transfer or sell any text, graphics, logos and other
            source-identifying symbols, designs, icons, images, or other
            information, software or code obtained from the Site.
          </InfoP>
        </PrCon>
      </Stack>
    </Containter>
  );
};

export default PrivacyPolicy;
