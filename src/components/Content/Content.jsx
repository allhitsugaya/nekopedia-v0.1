import React from 'react';
import {NavLink} from "react-router-dom";
import {Box, Button, Container, Paper, Stack, Typography} from "@mui/material";
import {topics} from "../route/router.config.js";

const TopicsListPage = () => {
    return (
        <Paper className="page-container" >
            <Container maxWidth={"xl"}>
            <Typography variant="h4" sx={{fontWeight:"bold"}}>Перелік тем</Typography>

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
                    <Button  key={topic.id}>
                        <NavLink style={{textDecoration:"none",color:"inherit"}} to={topic.path}  >{topic.title}</NavLink>
                    </Button>
                ))}
            </Stack>
                </Box>
            </Container>
        </Paper>
    );
};

export default TopicsListPage;