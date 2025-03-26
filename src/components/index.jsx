import { createTheme, ThemeProvider, Box, CssBaseline } from "@mui/material";
import { useState, useMemo } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router";

const Layout = () => {
    const [mode, setMode] = useState('dark');

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
            ...(mode === 'light' ? {
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
            } : {
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
            })
        },
        components: {
            MuiTypography: {
                styleOverrides: {
                    root: {
                        fontFamily: ["Nunito Sans", "sans-serif"].join(",")
                    }
                }
            }
        }
    }), [mode]);

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Navbar toggleColorMode={toggleColorMode} />
                <Box component="main" sx={{ flexGrow: 1, pb: 8 }}>
                    <Outlet />
                </Box>
                <Footer sx={{
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    zIndex: 1000
                }} />
            </Box>
        </ThemeProvider>
    );
};

export default Layout;