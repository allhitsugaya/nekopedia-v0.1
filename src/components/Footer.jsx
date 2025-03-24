import * as React from 'react';
import {Container, Typography, Box, IconButton, Paper} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IoLogoOctocat } from "react-icons/io5";
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <Paper component="footer" >
            <Container maxWidth="xl">
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
                        <IoLogoOctocat   />
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>
                       Copyright &copy; {new Date().getFullYear()} by allhitsugaya
                    </Typography>

                    <Box>
                        <IconButton
                            aria-label="GitHub"
                            href="https://github.com/allhitsugaya"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            aria-label="LinkedIn"
                            href="https://www.linkedin.com/in/allhitsugaya"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Twitter"
                            href="https://twitter.com/allhitsugaya"
                            target="_blank"
                            rel="noopener noreferrer"
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