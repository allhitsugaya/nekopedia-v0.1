import * as React from 'react';
import {Box, Button, Container, Paper, Typography} from '@mui/material';
import {NavLink} from "react-router-dom";

function HeroSection() {
    return (
        <Paper sx={{
            minHeight: 'calc(100vh - 128px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            py: 8,
            mb: 8
        }}>
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="inherit"
                    gutterBottom
                >
                    Ласкаво просимо на Nekopedia
                </Typography>
                <Typography variant="h5" align="center">
                    Тут ви знайдете корисну інформацію, поради та багато іншого.
                </Typography>
                <Box sx={{
                    mt: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2
                }}>
                    <Button
                        component={NavLink}
                        to='/learn-more'
                        variant="contained"
                    >
                        Почати
                    </Button>
                    <Button
                        component={NavLink}
                        to='/about'
                        variant="outlined"
                    >
                        Дізнатися більше
                    </Button>
                </Box>
            </Container>
        </Paper>
    );
}

export default function MainPage() {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <HeroSection />
        </Box>
    );
}