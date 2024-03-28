import { styled } from "@mui/material/styles";
import { BannerBgOne, BannerBgTwo } from 'components/Svg'
import BannerIconStaking from "assets/images/banner-icon-staking.png";
import BannerIconPrice from "assets/images/banner-icon-price.png";
import BannerIconData from "assets/images/banner-icon-data.png";
import BannerIconGrant from "assets/images/banner-icon-grant.png";

const BanWapper = styled('div')`
  width: 100%;
  height: 500px;
  position: relative;
  background: linear-gradient(to right bottom, #000000, #320900);
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
      '.banner-bg-one': {
        display: 'none'
      },
      '.banner-bg-two': {
        display: 'none'
      }
    },
  })};
`;

const BanBox = styled('div')`
  width: 100%;
  height: 100%;
  max-width: 1140px;
  position: relative;
  padding-top: 70px;
  box-sizing: border-box;
  margin: 0 auto;
  
  .content-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
  }
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      height: '100%',
      paddingTop: "60px",
      '.content-box': {
        marginTop: '40px',
        flexDirection: 'column-reverse',
        padding: '0 25px 60px',
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
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
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
  margin-top: 34px;
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      marginTop: '30px',
    },
  })};
`;

const IconBox = styled('div')`
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
      width: '220px',
      height: '220px'
    },
  })};
`;

const BannerTem = ({title, desc, icon, titleMaxWidth} : {title: string, desc: string, icon: string, titleMaxWidth?: number}) => {
  return (
    <BanWapper>
      <BannerBgOne />
      <BannerBgTwo />
      <BanBox>
        <div className="content-box">
          <div>
            <MainTitle maxWidth={titleMaxWidth}>{ title }</MainTitle>
            <MainDesc>{ desc }</MainDesc>
          </div>
          <IconBox className={icon} />
        </div>
      </BanBox>
    </BanWapper>
  );
};

export default BannerTem;
