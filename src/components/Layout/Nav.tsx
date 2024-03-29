import { NavLink, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Typography, Stack } from "@mui/material";
import { useMemo, useState, ReactNode } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import {
  Docs,
  Github,
  PriceFeeds,
  WatchTower,
  DataProviders,
  NodeOperators,
  GrantProgram,
  Telegram,
  Twitter,
  Discord,
  Right,
} from "components/Svg";

const NavWrapper = styled("div")`
  display: flex;
  gap: 60px;
  margin-left: 120px;
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  })};
`;
const NavText = styled(Typography)<{ actived?: boolean }>`
  position: relative;
  cursor: pointer;
  line-height: 70px;
  color: ${({ actived }) => (actived ? "#fff" : "rgba(255, 255, 255, 0.70)")};
  &:hover {
    color: #fff;
  }
`;

const MobileNav = styled(Box)`
  display: block;
  position: fixed;
  top: 54px;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(22px);
  z-index: 98;
  transform: translateY(0) translateX(0);
  transition: transform 400ms ease 0s;
`;

const MenuBox = styled(Stack)`
  position: absolute;
  top: 25px;
  right: 80px;
  ${({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  })};
  .menu {
    display: block;
    cursor: pointer;
    user-select: none;
    .menu-button-line {
      width: 20px;
      height: 3px;
      color: #fff;
      margin-bottom: 4px;
      border-radius: 1px;
      background-color: #fff;
      transition: all 0.5s ease-in-out;
      &.top {
        transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg)
          rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
      }
      &.middle {
        opacity: 1;
      }
      &.last {
        transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg)
          rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
      }
    }
    &.open {
      .top {
        transform: translate3d(0, 7px, 0) scale3d(1, 1, 1) rotateX(0deg)
          rotateY(0deg) rotateZ(225deg) skew(0deg, 0deg) !important;
      }

      .middle {
        opacity: 0 !important;
      }

      .last {
        transform: translate3d(0, -7px, 0) scale3d(1, 1, 1) rotateX(0deg)
          rotateY(0deg) rotateZ(315deg) skew(0deg, 0deg) !important;
      }
    }
  }
`;

const NavItemBox = styled(Stack)`
  height: 70px;
  position: relative;
  &:hover {
    .nav-text {
      color: #fff;
    }
    .sub-menu {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const SubMenuBoxHead = styled(Stack)`
  padding-top: 30px;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translate(-50%);
  display: block;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;
`;

const SubMenuCon = styled(Stack)`
  padding: 20px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  position: relative;
  &::after {
    display: block;
    position: absolute;
    content: "";
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent rgba(255, 255, 255, 0.15) transparent;
    top: -10px;
    left: 50%;
    transform: translate(-50%);
  }
`;

const SubItemBox = styled(Box)`
  cursor: pointer;
`;

const IconBox = styled(Stack)`
  background: rgba(255, 255, 255, 0.4);
  width: 26px;
  height: 26px;
  border-radius: 50%;
  padding: 5px;
  margin-right: 10px;
`;

const SubDesc = styled(Typography)`
  color: rgba(255, 255, 255, 0.6);
  font-family: Arboria-Book;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const BraAccordion = styled(Accordion)`
  background: none;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: none;
  border-radius: 0;
  box-shadow: none;
  &::before {
    background-color: rgba(255, 255, 255, 0);
  }
  &.Mui-expanded {
    margin: 0;
  }
  &:last-of-type {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

const BraAccordionSummary = styled(AccordionSummary)`
  padding: 10px 20px;
  .MuiAccordionSummary-expandIconWrapper {
    transform: rotate(-90deg);
    &.Mui-expanded {
      transform: rotate(-180deg);
    }
  }
`;

const BraAccordionDetails = styled(AccordionDetails)`
  padding: 0px 20px 20px 20px;
`;

const SubLinkBox = styled(Stack)`
  padding: 10px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

interface subMenuItem {
  name: string;
  desc: string;
  icon: ReactNode;
  path: string;
  isComing?: boolean;
}

interface NavItem {
  name: string;
  path: string;
  subMenu?: subMenuItem[];
}

const NAV: NavItem[] = [
  {
    name: "Developer",
    path: "/developer",
    subMenu: [
      {
        name: "Docs",
        desc: "Starting integrating Bracle data feeds",
        icon: <Docs />,
        path: "",
      },
      {
        name: "Github",
        desc: "A Code-based Journey into Bracle",
        icon: <Github />,
        path: "",
      },
    ],
  },
  {
    name: "Services",
    path: "/services",
    subMenu: [
      {
        name: "Price Feeds",
        desc: "Real-time prices for smart contracts",
        icon: <PriceFeeds />,
        path: "",
      },
      {
        name: "Watch Tower",
        desc: "A Code-based Journey into Bracle",
        icon: <WatchTower />,
        path: "",
        isComing: true,
      },
    ],
  },
  {
    name: "Ecosystem",
    path: "/ecosystem",
    subMenu: [
      {
        name: "Data Providers",
        desc: "Leverage the Bracle Network to make your data accessible onchain directly through your own Bracle nodes",
        icon: <DataProviders />,
        path: "/data-provider",
      },
      {
        name: "Node Operators",
        desc: "Provide oracle computation directly to smart contracts and earn revenue by running critical data infrastructure",
        icon: <NodeOperators />,
        path: "",
      },
      {
        name: "Grant Program",
        desc: "Funding and supporting the creation of new DApps",
        icon: <GrantProgram />,
        path: "/grant-program",
      },
    ],
  },
  {
    name: "Community",
    path: "/community",
    subMenu: [
      {
        name: "Telegram",
        desc: "",
        icon: <Telegram />,
        path: "",
      },
      {
        name: "Twitter",
        desc: "",
        icon: <Twitter />,
        path: "",
      },
      {
        name: "Discord",
        desc: "",
        icon: <Discord />,
        path: "",
      },
    ],
  },
  {
    name: "Staking",
    path: "/staking",
  },
  {
    name: "Airdrop",
    path: "/airdrop",
  },
];

const Nav = () => {
  const location = useLocation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleClose = () => setIsOpenMenu(false);

  const curAct = useMemo(() => {
    let path = "";
    let pathArr = NAV.map((e) => {
      return e.path;
    });
    if (location.pathname && pathArr.indexOf(location.pathname) > -1) {
      path = location.pathname;
    }
    return path;
  }, [location]);
  return (
    <Box>
      <NavWrapper>
        {NAV.map((d: NavItem, index: number) => (
          <>
            {d?.subMenu ? (
              <>
                <NavItemBox>
                  <NavText
                    className="nav-text"
                    key={index}
                    variant="body1"
                    actived={curAct.indexOf(d.path) > -1}
                  >
                    {d.name}
                  </NavText>
                  <SubMenuBoxHead className="sub-menu">
                    <SubMenuCon width={d.name === "Community" ? 180 : 300}>
                      {d.subMenu.map(
                        (subItem: subMenuItem, subIndex: number) => (
                          <SubItemBox>
                            <Stack
                              mt={subIndex > 0 ? 20 : 0}
                              justifyContent="start"
                              alignItems="center"
                              direction="row"
                            >
                              <IconBox
                                justifyContent="center"
                                alignItems="center"
                                direction="row"
                              >
                                {subItem.icon}
                              </IconBox>
                              <Typography mr={12} variant="h3">
                                {subItem.name}
                              </Typography>
                              <Right />
                            </Stack>
                            {subItem?.desc && (
                              <Stack
                                mt={4}
                                justifyContent="start"
                                alignItems="center"
                                direction="row"
                              >
                                <Box width={36} mr={10}></Box>
                                <SubDesc variant="body2">
                                  {subItem.desc}
                                </SubDesc>
                              </Stack>
                            )}
                          </SubItemBox>
                        )
                      )}
                    </SubMenuCon>
                  </SubMenuBoxHead>
                </NavItemBox>
              </>
            ) : (
              <NavLink style={{ fontFamily: "ZenDots-Regular" }} to={d.path}>
                <NavText
                  key={index}
                  variant="body1"
                  actived={curAct.indexOf(d.path) > -1}
                >
                  {d.name}
                </NavText>
              </NavLink>
            )}
          </>
        ))}
      </NavWrapper>
      <MenuBox>
        <div
          className={isOpenMenu ? "open menu" : "menu"}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <div className="menu-button-line top"></div>
          <div className="menu-button-line middle"></div>
          <div className="menu-button-line last"></div>
        </div>
      </MenuBox>
      <Modal
        open={isOpenMenu}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MobileNav>
          {NAV.map((d: NavItem, index: number) => (
            <>
              {d?.subMenu ? (
                <>
                  <BraAccordion>
                    <BraAccordionSummary
                      expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                    >
                      {d.name}
                    </BraAccordionSummary>
                    <BraAccordionDetails>
                      {d.subMenu.map(
                        (subItem: subMenuItem, subIndex: number) => (
                          <SubItemBox>
                            {subIndex > 0 && (
                              <Box my={20}>
                                <Divider
                                  style={{
                                    borderColor: "rgba(255, 255, 255, 0.15)",
                                  }}
                                />
                              </Box>
                            )}
                            <Stack
                              justifyContent="start"
                              alignItems="center"
                              direction="row"
                            >
                              <IconBox
                                justifyContent="center"
                                alignItems="center"
                                direction="row"
                              >
                                {subItem.icon}
                              </IconBox>
                              <Typography mr={12} variant="h3">
                                {subItem.name}
                              </Typography>
                              <Right />
                            </Stack>
                            {subItem?.desc && (
                              <Stack
                                mt={4}
                                justifyContent="start"
                                alignItems="center"
                                direction="row"
                              >
                                <Box width={36} mr={10}></Box>
                                <SubDesc variant="body2">
                                  {subItem.desc}
                                </SubDesc>
                              </Stack>
                            )}
                          </SubItemBox>
                        )
                      )}
                    </BraAccordionDetails>
                  </BraAccordion>
                </>
              ) : (
                <>
                  <NavLink
                    style={{ fontFamily: "ZenDots-Regular" }}
                    to={d.path}
                  >
                    <SubLinkBox
                      justifyContent="space-between"
                      alignItems="center"
                      direction="row"
                    >
                      <Typography my={12} variant="h3">{d.name}</Typography>
                      <ExpandMoreIcon
                        style={{ color: "#fff", transform: "rotate(-90deg)" }}
                      />
                    </SubLinkBox>
                  </NavLink>
                </>
              )}
            </>
          ))}
        </MobileNav>
      </Modal>
    </Box>
  );
};

export default Nav;
