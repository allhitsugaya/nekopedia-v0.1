import React, { useState } from 'react';
import { Box, Typography, List, ListItem, Collapse } from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const EventBubblingExamplePage = () => {
    const [open, setOpen] = useState(false);

    const handleMenuClick = () => {
        setOpen(prevOpen => !prevOpen);
    };


    return (
        <Box className="page-container" sx={{ padding: 3 }}>
            <Typography variant="h3" gutterBottom>
                Приклад роботи з фазами захоплення та спливання
            </Typography>

            <Paragraph>
                Гарний приклад використання фази захоплення і спливання - це створення меню згортання. Уявімо, що ми маємо дерево елементів меню, і ми хочемо, щоб при кліку на пункт меню відкривався або закривався вміст підпунктів. Ми можемо використовувати фазу спливання для обробки кліків та фазу захоплення для відстеження кліку на заголовок меню.
            </Paragraph>

            <Typography variant="h4" gutterBottom>
                Приклад коду
            </Typography>
            <CodeBlock>
                {`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .expanded {
            display: none;
        }
    </style>
</head>
<body>
<div id="myMenu">
    <h2 class="menu-header">Батьківський елемент</h2>
    <div class="expanded">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
</div>
<script>
    const menu = document.getElementById("myMenu");

    menu.addEventListener("click", function (event) {
        if (event.target.classList.contains("menu-header")) {
    
            const submenu = event.target.nextElementSibling;
            submenu.classList.toggle("expanded");
        }
    });
</script>
</body>
</html>`}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі фаза спливання використовується для обробки кліків на пунктах меню, а фаза захоплення слугує для відстеження кліку на заголовку меню, щоб розгортати або згортати підменю.
            </Paragraph>
            <Box>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                    Демонстрація меню згортання:
                </Typography>

                <List>
                    <ListItem button onClick={handleMenuClick}>
                        <Typography variant="h6">Батьківський елемент</Typography>
                    </ListItem>
                    <Collapse in={open}>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <Typography variant="body1">Підпункт 1</Typography>
                            </ListItem>
                            <ListItem button>
                                <Typography variant="body1">Підпункт 2</Typography>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Box>
        </Box>
    );
};

export default EventBubblingExamplePage;
