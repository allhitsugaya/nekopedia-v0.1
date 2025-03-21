import * as React from 'react';
import { Container, Typography, Box, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IoLogoOctocat } from "react-icons/io5";
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#000000',
                color: '#A2D9CE',
                py: 3,
                mt: 'auto',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Box component = {NavLink} to='/'>
                        <IoLogoOctocat style={{ color: '#A2D9CE', fontSize: '2rem' }} />
                    </Box>
                    <Typography variant="body1" sx={{ fontFamily: 'monospace', fontWeight: 700 }}>
                       Copyright &copy; {new Date().getFullYear()} by allhitsugaya
                    </Typography>

                    <Box>
                        <IconButton
                            aria-label="GitHub"
                            href="https://github.com/allhitsugaya"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#A2D9CE' }}
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            aria-label="LinkedIn"
                            href="https://www.linkedin.com/in/allhitsugaya"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#A2D9CE' }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Twitter"
                            href="https://twitter.com/allhitsugaya"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#A2D9CE' }}
                        >
                            <TwitterIcon />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                        }}
                    >
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;