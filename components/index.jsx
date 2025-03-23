import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router";
import {createTheme, ThemeProvider} from "@mui/material";



const theme = createTheme({
    palette: {
        primary: {
            main:'#A2D9CE'
        },
        secondary: {
            main:'#88C0B5',
        },
        dark:{
            main:'#000000'
        },
    },
    typography:{
        allVariants: {
            fontFamily: ["Nunito Sans",
                'sans-serif',
            ].join(','),
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#000000'
                }
            }
        },
        MuiButton:{
            styleOverrides: {
                root: {
                    size:'large'
                }
            }
        }
    }

});


const Layout = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar/>
                <main>
                    <Outlet/>
                </main>
                <Footer/>
            </ThemeProvider>
        </>
    )
}
export default Layout