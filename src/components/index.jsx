import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router";
import {createTheme, ThemeProvider} from "@mui/material";
import * as React from "react";



const appTheme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    dark: "#628e85",
                    main: "#A2D9CE",

                },
                background: {
                  default: "#b1b1b1",
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
                background: {
                    default: "rgba(162, 217, 206, 0.2)",
                    paper: "#212121",
                },
                text: {
                    primary: "#A2D9CE",
                    secondary: "#A2D9CE",
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
            <ThemeProvider theme={appTheme}  >
                <Navbar/>
                <Outlet/>
                <Footer/>
            </ThemeProvider>
        </>
    )
}
export default Layout