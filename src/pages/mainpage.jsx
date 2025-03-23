import * as React from 'react';
import {Box, Button, Container,Typography} from '@mui/material';
import {NavLink} from "react-router-dom";




function HeroSection() {
    return (
            <Box
                sx={{

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
                    <Typography variant="h5" align="center" >
                        Тут ви знайдете корисну інформацію, поради та багато іншого.
                    </Typography>
                    <Box sx={{ mt: 4 }}>
                        <Button
                            component={NavLink}
                            to='/learn-more'
                            variant="contained"
                            sx={{
                            }}
                        >
                            Почати
                        </Button>
                        <Button
                            component={NavLink}
                            to='/about'
                            variant="outlined"
                            sx={{
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
        <Box >
            <HeroSection />
        </Box>
    );
}