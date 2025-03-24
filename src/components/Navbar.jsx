import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import MenuItem from '@mui/material/MenuItem';
import { IoLogoOctocat } from "react-icons/io5";
import { NavLink} from "react-router-dom";
import {Breadcrumbs, FormControl, FormLabel, Link, Switch, useColorScheme} from "@mui/material";






const pages = [
    { name: 'Learn more', path: '/learn-more' },
    { name: 'About us', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const{mode,setMode} = useColorScheme()
    const handleChange = () => {
      setMode(mode ==="light"?"dark":"light");
    }



    return (
        <AppBar position="static" >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
                    <Typography
                       variant="h6"
                        noWrap
                        component={NavLink}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                        }}
                    >
                        Nekopedia <IoLogoOctocat style={{ fontSize: '2rem' }} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon color="primary" />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu} component={NavLink} to={page.path}>
                                    <Typography sx={{ textAlign: 'center' }} >{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component={NavLink}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#A2D9CE',
                            textDecoration: 'none',
                        }}
                    >
                        Nekopedia
                    </Typography>

                        <Breadcrumbs sx={{"& .MuiBreadcrumbs-separator":{display:"none"}}}>
                            {pages.map((page) => (
                                <Link
                                    underline={"hover"}
                                    key={page.name}
                                    to={page.path}
                                    component={NavLink}
                                    color="inherit"
                                     >
                                    {page.name}
                                </Link>
                            ))}
                        </Breadcrumbs>


                    <FormControl >
                            <FormLabel id="demo-theme-toggle">
                                <Switch
                                        name="theme-toggle"
                                        aria-labelledby="demo-theme-toggle"
                                        value={mode}
                                        onChange={handleChange}
                                >

                                </Switch>
                            </FormLabel>
                    </FormControl>


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;