import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router";
import {createTheme, ThemeProvider} from "@mui/material";



const appTheme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    dark: "#628e85",
                    main: "#A2D9CE",

                },
                secondary: {
                    main: "#A2D9CE",
                    dark: "#628e85",
                    contrastText: "#111"
                },
                background: {
                  default: "#D3D3D3",
                  paper: "#FFFFFF",
                },
                text: {
                    primary: "#111",
                    secondary: "#111",
                }
            },
            components:{
                MuiSvgIcon:{
                    styleOverrides: {
                        root: {
                            color:"#111"
                        }
                    }
                }
            }
        },
        dark: {
            palette: {
                primary: {
                    dark: '#628e85',
                    main: '#A2D9CE',
                },
                secondary: {
                    main: "#1E1E1E",
                    dark: "#111",
                    contrastText: "#A2D9CE"
                },
                background: {
                    default: "#1E1E1E",
                    paper: "#212121",
                },
                text: {
                    primary: "#FFF",
                    secondary: "#FFF",
                },
            },
            components:{
                MuiSvgIcon:{
                    styleOverrides: {
                        root:{
                            color: "#A2D9CE",
                        }
                    }
                }
            }
        }
    },
    components:{
        MuiTypography:{
            styleOverrides:{
                root:{
                    fontFamily: ["Nunito Sans","sans-serif"].join(",")
                }
            }
        }
    }
});


const Layout = () => {
    return (
        <>
            <ThemeProvider theme={appTheme} defaultMode="dark">
                <Navbar/>
                <Outlet/>
                <Footer/>
            </ThemeProvider>
        </>
    )
}
export default Layout