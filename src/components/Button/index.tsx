import { styled } from '@mui/material/styles'
import { Button, Stack, Box } from '@mui/material'
// import { Loading } from 'components/Svg'

const ButtonBox = styled(Button)<{height?: number; fontSize?: number; bg?: string, padding?: string, isDisabled?: boolean}>`
  width: 250px;
  border-radius: 4px;
  text-align: center;
  height: ${({height}) => height ? height + 'px' : '56px' };
  line-height: ${({height}) => height ? height + 'px' : '56px' };
  background-color: ${({bg}) => bg ? bg : '#DC7637' };
  span {
    color: ${({isDisabled}) => isDisabled ? '#435470' : '#fff' };
    font-size: ${({fontSize}) => fontSize ? fontSize + 'px' : '16px' };
    font-family: Arboria-Medium;
  }
  &.Mui-disabled{
    background-color: #2B374A;
  }
  &:hover{
    opacity: 0.9;
    background-color: #DC7637;
  }
`

const LoadingBox = styled('div')`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  animation: rotate 2s  linear infinite;

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export function ButtonPrimary({ onAction, text, height, bg, fontSize, disabled, padding, loading }: { onAction: (() => void) | undefined; text: string; height?: number; bg?: string, fontSize?: number; disabled?: boolean, padding?: string, loading?: boolean }) {
  return (
    <ButtonBox onClick={onAction} variant="contained" isDisabled={disabled} disabled={disabled || loading} padding={padding} height={height} fontSize={fontSize} bg={bg}>
      <Stack justifyContent="center" alignItems="center" direction="row">
        {/* { loading && (<LoadingBox><Loading /></LoadingBox>) } */}
        <span>{ `${text}` }</span>
      </Stack>
    </ButtonBox>
  )
}
