import React from 'react';
import { NavLink } from "react-router-dom";
import { Box, Button, Container, Paper, Typography, useTheme } from "@mui/material";
import { topics } from "../route/router.config.js";

const TopicsListPage = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Paper
            sx={{
                minHeight: '100vh',
                backgroundColor: isDarkMode ? '#121212' : '#f5f5f5',
                py: 6,
                px: { xs: 2, sm: 4 }
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ mb: 6 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            color: isDarkMode ? '#A2D9CE' : '#2d3748',
                            position: 'relative',
                            '&:after': {
                                content: '""',
                                display: 'block',
                                width: '80px',
                                height: '4px',
                                background: '#A2D9CE',
                                marginTop: '16px',
                                borderRadius: '2px'
                            }
                        }}
                    >
                        Перелік тем
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: isDarkMode ? '#A2D9CE' : '#4a5568',
                            maxWidth: '800px',
                            lineHeight: 1.6
                        }}
                    >
                        Нижче наведено список усіх доступних тем. Натисніть на тему, щоб перейти до відповідного розділу.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                        gap: 3
                    }}
                >
                    {topics.map((topic) => (
                        <Button
                            key={topic.id}
                            component={NavLink}
                            to={topic.path}
                            sx={{
                                height: '120px',
                                p: 3,
                                borderRadius: 2,
                                backgroundColor: isDarkMode ? 'rgba(30, 30, 30, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                                border: '1px solid',
                                borderColor: isDarkMode ? 'rgba(162, 217, 206, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                                color: isDarkMode ? '#A2D9CE' : '#2d3748',
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '1.1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                                    backgroundColor: isDarkMode ? 'rgba(162, 217, 206, 0.1)' : 'rgba(162, 217, 206, 0.2)',
                                    borderColor: '#A2D9CE'
                                },
                                '&.active': {
                                    backgroundColor: isDarkMode ? 'rgba(162, 217, 206, 0.3)' : 'rgba(162, 217, 206, 0.4)'
                                }
                            }}
                        >
                            {topic.title}
                        </Button>
                    ))}
                </Box>
            </Container>
        </Paper>
    );
};

export default TopicsListPage;