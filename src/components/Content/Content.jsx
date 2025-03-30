import React from 'react';
import {NavLink} from "react-router-dom";
import {Box, Button, Container, Paper, Stack, Typography} from "@mui/material";
import {topics} from "../route/router.config.js";

const TopicsListPage = () => {
    return (
        <Paper   sx={{
            minHeight: '100vh',
            backgroundColor: 'background.paper',
            py: 8,
            px: { xs: 2, sm: 0 },
            color: 'primary'
        }} >
            <Container maxWidth={"xl"}>
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
                        background: '#A2D9CE',
                        margin: '20px auto 0',
                        borderRadius: '2px',
                        opacity: 0.5
                    }
                }}>
                    Перелік тем
                </Typography>

            <Typography variantMapping="subtitle1">
                Нижче наведено список усіх доступних тем. Натисніть на тему, щоб перейти до відповідного розділу.
            </Typography>
                <Box >
            <Stack spacing={2}
                orientation="vertical"
                aria-label="Vertical button group"
                variant="contained"
                className="topics-list">
                {topics.map((topic) => (
                    <Button  key={topic.id}
                             component={NavLink}
                             to={topic.path}
                             sx={{textDecoration:'none',color:'text.secondary' }}
                    >
                        {topic.title}
                    </Button>
                ))}
            </Stack>
                </Box>
                </Box>
            </Container>
        </Paper>
    );
};

export default TopicsListPage;