import { styled } from "@mui/material/styles";
import { BannerBgOne, BannerBgTwo } from 'components/Svg'
import BannerIconStaking from "assets/images/banner-icon-staking.png";
import BannerIconPrice from "assets/images/banner-icon-price.png";
import BannerIconData from "assets/images/banner-icon-data.png";
import BannerIconGrant from "assets/images/banner-icon-grant.png";

const BanBox = styled('div')`
  width: 100%;
  height: 500px;
  background: linear-gradient(to right bottom, #000000, #320900);
  padding-top: 70px;
  box-sizing: border-box;
  position: relative;
  .banner-bg-one{
    position: absolute;
    bottom: 0;
    z-index: 1;
  }
  .banner-bg-two{
    position: absolute;
    bottom: 0;
    z-index: 1;
  }
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      height: '100%',
      paddingTop: "60px",
      '.banner-bg-one': {
        display: 'none'
      },
      '.banner-bg-two': {
        display: 'none'
      }
    },
  })};
`;

const MainTitle = styled('p')<{maxWidth?: number}>`
  max-width: ${({maxWidth}) => maxWidth ? maxWidth + 'px' : '590px'};
  color: #FFF;
  font-family: Arboria-Book;
  font-size: 64px;
  line-height: 68px;
  position: relative;
  z-index: 2;
  padding: 0 120px;
  margin-top: 90px;
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      marginTop: "0",
      padding: '300px 25px 0',
      fontSize: '50px',
      lineHeight: '50px',
    },
  })};
`; 

const MainDesc = styled('p')`
  max-width: 510px;
  color: #FFF;
  font-family: Arboria-Book;
  font-size: 18px;
  line-height: 28px;
  position: relative;
  z-index: 2;
  padding-left: 120px;
  margin-top: 34px;
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      marginTop: '30px',
      padding: '0 25px 60px',
    },
  })};
`;

const IconBox = styled('div')`
  position: absolute;
  right: 175px;
  top: 103px;
  width: 362px;
  height: 362px;
  &.staking{
    background: url(${BannerIconStaking}) center no-repeat;
    background-size: contain;
  }
  &.grant{
    background: url(${BannerIconGrant}) center no-repeat;
    background-size: contain;
  }
  &.data{
    background: url(${BannerIconData}) center no-repeat;
    background-size: contain;
  }
  &.price{
    background: url(${BannerIconPrice}) center no-repeat;
    background-size: contain;
  }
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      top: '100px',
      left: '50%',
      right: 'auto',
      transform: 'translate(-50%, 0)',
      width: '220px',
      height: '220px'
    },
  })};
`;

const BannerTem = ({title, desc, icon, titleMaxWidth} : {title: string, desc: string, icon: string, titleMaxWidth?: number}) => {
  return (
    <BanBox>
      <BannerBgOne />
      <BannerBgTwo />
      <MainTitle maxWidth={titleMaxWidth}>{ title }</MainTitle>
      <MainDesc>{ desc }</MainDesc>
      <IconBox className={icon} />
    </BanBox>
  );
};

export default BannerTem;
