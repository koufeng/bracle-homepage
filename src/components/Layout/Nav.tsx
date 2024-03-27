import { NavLink, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Typography, Stack } from "@mui/material";
import { useMemo, useState, ReactNode } from "react";
import Modal from "@mui/material/Modal";
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
} from "components/Svg";

const NavWrapper = styled("div")`
  display: flex;
  gap: 30px;
  margin-left: 56px;
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  })};
`;
const NavText = styled(Typography)<{ actived?: boolean }>`
  position: relative;
  cursor: pointer;
  color: ${({ actived }) => (actived ? "#fff" : "rgba(255, 255, 255, 0.70)")};
  &:hover {
    color: #fff;
  }
`;

const SubBox = styled(Box)`
  ul {
    li {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      .menu-item {
        width: 100%;
        height: 55px;
        padding: 0 25px;
        line-height: 55px;
        cursor: pointer;
        display: block;
        box-sizing: border-box;
        font-family: Zen-Dots;
        font-size: 16px;
        color: #b2b2b2;
        &:hover {
          color: #f74141;
        }
      }
    }
    .sub-li {
      margin: 0 30px;
      .menu-item {
        padding: 0;
        height: 80px;
        display: flex;
        align-items: center;

        .icon-box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
`;

const MobileNavText = styled(Typography)<{ isactive?: boolean }>`
  width: 100%;
  height: 55px;
  padding: 0 25px;
  line-height: 55px;
  cursor: pointer;
  display: block;
  box-sizing: border-box;
  font-size: 16px;
  color: ${({ isactive }) => (isactive ? "#f74141" : "#b2b2b2")};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
  height: 100%;
  top: 17px;
  right: 20px;
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

const NavItemBox = styled(Stack)``;

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
        path: "",
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
        path: "",
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
                    key={index}
                    variant="body1"
                    actived={curAct.indexOf(d.path) > -1}
                  >
                    {d.name}
                  </NavText>
                  
                </NavItemBox>
                {/* <NavLink
                  style={{ fontFamily: "ZenDots-Regular" }}
                  to={d.path}
                ></NavLink> */}
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
          {NAV.map((d: { name: string; path: string }, index: number) => (
            <NavLink
              onClick={handleClose}
              style={{ fontFamily: "ZenDots-Regular", color: "#B2B2B2" }}
              to={d.path}
            >
              <MobileNavText
                isactive={curAct.indexOf(d.path) > -1}
                fontSize={"16px !important"}
                key={index}
                variant="body1"
              >
                {d.name}
              </MobileNavText>
            </NavLink>
          ))}
        </MobileNav>
      </Modal>
    </Box>
  );
};

export default Nav;
