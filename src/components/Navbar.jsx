import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    MenuItem,
    Breadcrumbs,
    Switch,
    FormControlLabel,
    Link,
    useTheme,
    useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { IoLogoOctocat } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { pages } from './route/router.config.js';

const StyledNavLink = ({ children, to }) => {
    const theme = useTheme();
    return (
        <Link
            component={NavLink}
            to={to}
            color="text.primary"
            underline="none"
            sx={{
                px: 2,
                py: 1,
                borderRadius: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                    bgcolor: theme.palette.mode === 'light' ? 'rgba(162, 217, 206, 0.1)' : 'rgba(162, 217, 206, 0.2)',
                    transform: 'translateY(-2px)'
                },
                '&.active': {
                    bgcolor: theme.palette.mode === 'light' ? 'rgba(162, 217, 206, 0.3)' : 'rgba(162, 217, 206, 0.4)',
                    fontWeight: 'bold'
                }
            }}
        >
            {children}
        </Link>
    );
};

function ResponsiveAppBar() {
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            elevation={0}
            component="header"
            sx={{
                bgcolor: 'background.paper',
                borderBottom: '1px solid',
                borderColor: 'divider',
                py: 1
            }}
        >
            <Container maxWidth="xl" component="div">
                <Toolbar
                    disableGutters
                    component="nav"
                    sx={{
                        justifyContent: 'space-between',
                        '& > *': {
                            minHeight: '64px',
                            display: 'flex',
                            alignItems: 'center'
                        }
                    }}
                >
                    {/* Desktop Logo */}
                    <Box
                        component={NavLink}
                        to="/"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            textDecoration: 'none',
                            gap: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            component="span"
                            variant="h6"
                            sx={{
                                background: 'linear-gradient(45deg, #A2D9CE 30%, #48C9B0 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 800,
                                letterSpacing: '0.3rem'
                            }}
                        >
                            Nekopedia
                        </Typography>
                        <IoLogoOctocat style={{ fontSize: '2rem', color: '#A2D9CE' }} />
                    </Box>

                    {/* Mobile Menu */}
                    {isMobile && (
                        <>
                            <IconButton
                                size="large"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                                sx={{ mr: 1 }}
                            >
                                <MenuIcon sx={{ color: '#A2D9CE' }} />
                            </IconButton>
                            <Menu
                                anchorEl={anchorElNav}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            bgcolor: 'background.paper',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            minWidth: 200,
                                            mt: 1.5
                                        }
                                    }
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page.name}
                                        onClick={handleCloseNavMenu}
                                        component={NavLink}
                                        to={page.path}
                                        sx={{
                                            '&.active': {
                                                bgcolor: 'rgba(162, 217, 206, 0.2)'
                                            }
                                        }}
                                    >
                                        <Typography component="span" variant="body2">
                                            {page.name}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    )}

                    {/* Mobile Logo */}
                    <Box
                        component={NavLink}
                        to="/"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            textDecoration: 'none',
                            gap: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            component="span"
                            variant="h6"
                            sx={{
                                background: 'linear-gradient(45deg, #A2D9CE 30%, #48C9B0 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 800,
                                letterSpacing: '0.3rem'
                            }}
                        >
                            Nekopedia
                        </Typography>
                    </Box>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <Box component="div" sx={{ mx: 4 }}>
                            <Breadcrumbs
                                separator=""
                                sx={{
                                    '& .MuiBreadcrumbs-li': {
                                        position: 'relative',
                                        '&:after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: '50%',
                                            width: 0,
                                            height: 2,
                                            bgcolor: '#A2D9CE',
                                            transition: 'all 0.3s ease'
                                        },
                                        '&:hover:after': {
                                            width: '100%',
                                            left: 0
                                        }
                                    }
                                }}
                            >
                                {pages.map((page) => (
                                    <StyledNavLink key={page.name} to={page.path}>
                                        {page.name}
                                    </StyledNavLink>
                                ))}
                            </Breadcrumbs>
                        </Box>
                    )}

                    {/* Theme Toggle */}
                    <FormControlLabel
                        control={
                            <Switch
                                onChange={theme.toggleColorMode}
                                checked={theme.palette.mode === 'dark'}
                                sx={{
                                    '& .MuiSwitch-thumb': {
                                        color: '#A2D9CE'
                                    },
                                    '& .Mui-checked .MuiSwitch-thumb': {
                                        color: '#A2D9CE'
                                    }
                                }}
                            />
                        }
                        label={theme.palette.mode === 'light' ? 'Dark' : 'Light'}
                        sx={{ m: 0 }}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;