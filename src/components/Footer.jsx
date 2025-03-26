import * as React from 'react';
import {
    Container,
    Typography,
    Box,
    IconButton,
    Paper,
    Link
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IoLogoOctocat } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
    return (
        <Paper
            component="footer"
            sx={{
                py: 3,
                boxShadow: '0px -2px 4px -1px rgba(0,0,0,0.2)',
                width: '100%',
                mt: 'auto',
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Link component={RouterLink} to="/" sx={{ color: 'inherit' }}>
                        <IoLogoOctocat size={24} style={{ color: '#A2D9CE' }} />
                    </Link>

                    <Typography variant="body1" sx={{ fontWeight: 700 }}>
                        Copyright &copy; {new Date().getFullYear()} by allhitsugaya
                    </Typography>

                    <Box>
                        <IconButton
                            aria-label="GitHub"
                            href="https://github.com/allhitsugaya"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            aria-label="LinkedIn"
                            href="https://www.linkedin.com/in/allhitsugaya"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Twitter"
                            href="https://twitter.com/allhitsugaya"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                        >
                            <TwitterIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Paper>
    );
}

export default Footer;