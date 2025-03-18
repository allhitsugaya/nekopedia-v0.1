import * as React from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

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

function FeatureCards() {
    const cards = [
        {
            title: 'Корисні статті',
            description: 'Читайте статті, які допоможуть вам покращити свої знання.',
            image: 'https://source.unsplash.com/random?articles',
        },
        {
            title: 'Поради експертів',
            description: 'Отримуйте поради від професіоналів у різних галузях.',
            image: 'https://source.unsplash.com/random?advice',
        },
        {
            title: 'Інтерактивні матеріали',
            description: 'Вивчайте нове через інтерактивні уроки та тести.',
            image: 'https://source.unsplash.com/random?interactive',
        },
    ];

    return (
        <Container maxWidth="md" sx={{ py: 8, bgcolor: theme.primary }}>
            <Grid container spacing={4}>
                {cards.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                bgcolor: theme.primary,
                                color: theme.text,
                                border: `1px solid ${theme.secondary}`,
                            }}
                        >
                            <CardMedia
                                component="img"
                                sx={{ pt: '56.25%' }}
                                image={card.image}
                                alt={card.title}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2" color={theme.text}>
                                    {card.title}
                                </Typography>
                                <Typography color={theme.text}>
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default function MainPage() {
    return (
        <Box sx={{ bgcolor: theme.primary, minHeight: '100vh' }}>
            <HeroSection />
            <FeatureCards />
        </Box>
    );
}