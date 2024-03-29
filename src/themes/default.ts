import { createTheme } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module "@mui/system/createTheme/createBreakpoints" {
    interface BreakpointOverrides {
        xsm: true
        xxl: true
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        subtitle14: true
        subtitle16: true
        descGray: true,
    }
}

interface ExtendedTypographyOptions extends TypographyOptions {
    subtitle14: React.CSSProperties;
    descGray: React.CSSProperties,
  }

let defaultLightTheme = createTheme({
    palette: {
        primary: {
            main: '#081120'
        }
    },
    breakpoints: {
      keys: ['xs', 'xsm', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    spacing: 1,
    typography: {
        fontFamily: 'Arboria-Book',
        fontSize: 16,
        h1: {
            color: '#fff',
            fontSize: '64px',
            fontFamily: 'Arboria-Medium',
        },
        h2: {
            color: '#fff',
            fontSize: '50px',
            fontFamily: 'Arboria-Medium',
        },
        h3: {
            color: '#fff',
            fontSize: '20px',
            fontFamily: 'Arboria-Medium',
        },
        subtitle1: {
            color: '#fff',
            fontFamily: 'Arboria-Book',
            fontSize: '16px'
        },
        subtitle2: {
            color: '#fff',
            fontFamily: 'Arboria-Book',
            fontSize: '14px'
        },
        body1: {
            color: '#fff',
            fontSize:'16px',
            fontFamily: 'Arboria-Book',
        },
        body2: {
            color: '#fff',
            fontSize:'14px',
            fontFamily: 'Arboria-Book',
        },
        descGray: {
            color: '#8F9DB3',
            fontSize:'14px',
            fontFamily: 'Arboria-Book',
        }
    }as ExtendedTypographyOptions,
    components: {
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    background: 'rgb(67, 84, 112)'
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#F2F2F2'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    border: '1px solid #435470',
                    backgroundColor: '#2B374A',
                    '.MuiInputBase-root': {
                        color: '#fff'
                    },
                    '.Mui-disabled': {
                        'text-fill-color': 'rgba(255, 255, 255, 1) !important',
                        '-webkit-text-fill-color': 'rgba(255, 255, 255, 1) !important'
                    }
                },
            }
        },
        MuiDrawer: {
            styleOverrides: {
                root: {
                    '.MuiDrawer-paper': {
                        marginTop: '80px',
                        marginBottom: '10px',
                        borderRadius: '16px',
                        height: 'calc(100% - 90px)'
                    }
                }
                
            }
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    padding: '0'
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    padding: '30px',
                    borderRadius: '16px',
                    background: '#1D2738'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '26px',
                    textTransform: 'none',
                    fontSize: '14px',
                    color: '#ffffff',
                    height: '42px',
                    fontFamily: 'Arboria-Book',
                    '&:hover': {
                        backgroundColor: '#C43E3E'
                    },
                    '&.Mui-disabled': {
                        color: '#435470 ',
                        background: '#2B374A',
                    }
                },
                contained: {
                    background: '#F13230',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                    
                },
                outlined: {
                    border: '1px solid #435470',
                    color: '#FFFFFF',
                    background: '#2B374A',
                    '&:hover': {
                        border: '1px solid #435470',
                        color: '#ffffff',
                        backgroundColor: '#435470'
                    }
                },
                sizeSmall: {
                    height: '28px'
                }
            }
        },
        MuiPagination: {
            styleOverrides:{
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontFamily: 'Arboria-Book',
                    backgroundColor: '#081120',
                    color: '#fff',
                },
                a: {
                    textDecoration: 'none',
                    color: 'inherit',
                },
                ".Toastify__toast": {
                    background: '#2B374A',
                    borderRadius: '10px',
                },
                ".Toastify__toast-body": {
                    color: "#fff",
                    background: '#2B374A',
                },
                ".Toastify__close-button": {
                    color: '#fff'
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                arrow: {
                    color: '#2B374A',
                    '&:before': {
                        border: '1px solid #435470',
                    }
                },
                tooltip: {
                    background: '#2B374A',
                    borderRadius: '5px',
                    border: '1px solid #435470',
                    padding: '12px 17px',
                },
            }
        }
    }
});

// defaultLightTheme.typography.h2 = {
//     [defaultLightTheme.breakpoints.down('md')]: {
//         fontSize: '16px'
//     }
// }

// defaultLightTheme.typography.h3 = {
//     [defaultLightTheme.breakpoints.down('md')]: {
//         fontSize: '14px'
//     }
// }
// defaultLightTheme.typography.subtitle1 = {
//     [defaultLightTheme.breakpoints.down('md')]: {
//         fontSize: '12px'
//     }
// }
// defaultLightTheme.typography.subtitle2 = {
//     [defaultLightTheme.breakpoints.down('md')]: {
//         fontSize: '12px'
//     }
// }

// defaultLightTheme.typography.body1 = {
//     [defaultLightTheme.breakpoints.down('md')]: {
//         fontSize: '12px'
//     }
// }

// defaultLightTheme.typography.body2 = {
//     [defaultLightTheme.breakpoints.down('md')]: {
//         fontSize: '12px'
//     }
// }


export default defaultLightTheme;