import * as React from 'react';
import { Box, Button, Container, Typography} from '@mui/material';
import {NavLink} from "react-router-dom";


const theme = {
    primary: '#000000',
    secondary: '#A2D9CE',
    text: '#A2D9CE',
};

function HeroSection() {
    return (
        <Box
            sx={{
                bgcolor: theme.primary,
                pt: 8,
                pb: 6,
                textAlign: 'center',
                color: theme.text,
            }}
        >
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
                <Typography variant="h5" align="center" color={theme.textSecondary} paragraph>
                    Тут ви знайдете корисну інформацію, поради та багато іншого.
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <Button
                        component={NavLink}
                        to='/learn-more'
                        variant="contained"
                        size="large"
                        sx={{
                            mr: 2,
                            bgcolor: theme.text,
                            color: theme.primary,
                            '&:hover': {
                                bgcolor: '#88C0B5',
                            },
                        }}
                    >
                        Почати
                    </Button>
                    <Button
                        component={NavLink}
                        to='/about'
                        variant="outlined"
                        size="large"
                        sx={{
                            color: theme.secondary,
                            borderColor: theme.secondary,
                            '&:hover': {
                                borderColor: '#88C0B5',
                            },
                        }}
                    >
                        Дізнатися більше
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default function MainPage() {
    return (
        <Box sx={{ bgcolor: theme.primary, minHeight: '100vh' }}>
            <HeroSection />
        </Box>
    );
}