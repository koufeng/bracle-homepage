import { styled } from "@mui/material/styles";
import { Stack, Typography, Box } from "@mui/material";
import Containter from "components/Containter";
import { ReactNode } from "react";
import { Github, Telegram, Twitter, Discord, LogoWhite } from "components/Svg";
import Grid from "@mui/material/Unstable_Grid2";
import { NavLink } from "react-router-dom";

const Footer1Box = styled(Stack)`
  background: #272727;
`;

const Footer2Box = styled(Stack)`
  background: #191919;
`;

const Footer1Title = styled(Typography)`
  color: #fff;
  font-family: Arboria-Medium;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Footer1Info = styled(Typography)`
  color: rgba(255, 255, 255, 0.6);
  font-family: Arboria-Book;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

const Footer2Text = styled(Typography)`
  color: rgba(255, 255, 255, 0.6);
  font-family: Arboria-Medium;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

interface subConItem {
  name: string;
  path: string;
  icon?: ReactNode;
  isComing?: boolean;
}

interface FooterItem {
  name: string;
  subCon: subConItem[];
}

const Footer = () => {
  // const theme = useTheme();
  // const downToMd = useMediaQuery(theme.breakpoints.down("md"));
  const footerData: FooterItem[] = [
    {
      name: "Products & Services",
      subCon: [
        {
          name: "Prices Feeds",
          path: "/services/price-feeds",
        },
        {
          name: "Watch Tower",
          path: "",
        },
        {
          name: "Data Providers",
          path: "/ecosystem/data-provider",
        },
        {
          name: "Node Operators",
          path: "",
        },
        {
          name: "Staking &Restaking",
          path: "/staking",
        },
      ],
    },
    {
      name: "Resource",
      subCon: [
        {
          name: "Whitepaper",
          path: "",
        },
        {
          name: "Docs",
          path: "",
        },
        {
          name: "Developers",
          path: "",
        },
        {
          name: "Brand Assets",
          path: "",
        },
      ],
    },
    {
      name: "Community",
      subCon: [
        {
          name: "Twitter",
          icon: <Twitter />,
          path: "",
        },
        {
          name: "Telegram",
          icon: <Telegram />,
          path: "",
        },
        {
          name: "Discord",
          icon: <Discord />,
          path: "",
        },
        {
          name: "Github",
          icon: <Github />,
          path: "",
        },
      ],
    },
    {
      name: "Statement",
      subCon: [
        {
          name: "Privacy Policy",
          path: "/privacy-policy",
        },
        {
          name: "Terms of Service",
          path: "/terms",
        },
      ],
    },
    {
      name: "Others",
      subCon: [
        {
          name: "Bug Bounty",
          path: "",
        },
        {
          name: "Contact",
          path: "",
        },
        {
          name: "Airdrop",
          path: "",
        },
      ],
    },
  ];
  return (
    <Box>
      <Footer1Box>
        <Containter>
          <Stack py={60}>
            <Grid container spacing={10}>
              <Grid xs={12} md={2}>
                <LogoWhite />
              </Grid>
              {footerData.map((d: FooterItem, index: number) => (
                <>
                  <Grid xs={12} md={2} mb={20}>
                    <Box mb={10}>
                      <Footer1Title>{d.name}</Footer1Title>
                    </Box>
                    {d.subCon.map((subItem: subConItem) => (
                      <>
                        <NavLink to={subItem.path}>
                          <Stack
                            justifyContent="start"
                            alignItems="center"
                            direction="row"
                            mt={15}
                          >
                            {subItem?.icon && (
                              <Box mr={10}>{subItem?.icon}</Box>
                            )}
                            <Box>
                              <Footer1Info>{subItem.name}</Footer1Info>
                            </Box>
                          </Stack>
                        </NavLink>
                      </>
                    ))}
                  </Grid>
                </>
              ))}
            </Grid>
          </Stack>
        </Containter>
      </Footer1Box>
      <Footer2Box
        justifyContent="center"
        alignItems="center"
        direction="row"
        py={15}
      >
        <Footer2Text>© 2024 Bracle . All rights reserved.</Footer2Text>
      </Footer2Box>
    </Box>
  );
};

export default Footer;
