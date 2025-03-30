import * as React from 'react';
import {Box, Button, Container, Paper, Typography} from '@mui/material';
import {NavLink} from "react-router-dom";




function HeroSection() {
    return (
        <Paper sx={{
            minHeight: '100vh',
            backgroundColor: 'background.paper',
            py: 8,
            px: { xs: 2, sm: 0 },
            color: '#A2D9CE'
        }}
        >
                <Container maxWidth="sm">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h2" sx={{
                            fontWeight: 800,
                            mb: 3,
                            color: 'text.primary',
                            textShadow: '0 0 8px rgba(162, 217, 206, 0.5)',
                            position: 'relative',
                            '&:after': {
                                content: '""',
                                display: 'block',
                                width: '100px',
                                height: '3px',
                                background: 'background.paper',
                                margin: '20px auto 0',
                                borderRadius: '2px',
                                opacity: 0.5
                            }
                        }}>
                        Ласкаво просимо на Nekopedia
                    </Typography>
                    <Typography variant="h5" align="center"  sx={{color:'text.primary'}}>
                        Тут ви знайдете корисну інформацію, поради та багато іншого.
                    </Typography>
                    <Box sx={{ mt: 4}}>
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
                    </Box>
                </Container>
        </Paper>

    );
}

export default function MainPage() {
    return (
            <HeroSection />
    );
}