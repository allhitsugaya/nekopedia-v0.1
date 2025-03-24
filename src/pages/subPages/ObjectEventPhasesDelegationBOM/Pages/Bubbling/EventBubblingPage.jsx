import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const EventBubblingPage = () => {
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                Спливання подій (Event Bubbling)
            </Typography>

            <Paragraph>
                Спливання подій - це аспект подій в DOM (Document Object Model), який означає, що події можуть поширюватися вгору по ієрархії елементів DOM після того, як вони були спровоковані. Це означає, що коли ви викликаєте подію на конкретному елементі, ця подія також буде спровокована на всіх його батьківських елементах відповідно до їх ієрархії. Спливання подій дозволяє реагувати на події на різних рівнях DOM-дерева без необхідності призначення обробників подій для кожного елемента окремо.
            </Paragraph>

            <Typography variant="h4" gutterBottom>
                Для чого це важливо?
            </Typography>

            <Paragraph>
                Спливання подій важливо, оскільки воно дозволяє створювати більш гнучкі та підтримувані веб-додатки. Деякі з основних переваг спливання подій включають:
            </Paragraph>

            <List>
                <ListItem>
                    <ListItemText
                        primary={<strong>Доступність для різних рівнів DOM</strong>}
                        secondary="Ви можете встановити обробник подій на вищому рівні DOM, і він автоматично буде спрацьовувати для всіх дочірніх елементів, які генерують цю подію. Це спрощує роботу з подіями на багатьох елементах."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={<strong>Зменшення дублювання коду</strong>}
                        secondary="За допомогою спливання подій вам не потрібно додавати обробники подій до кожного окремого елемента, що має однакову функціональність. Це зменшує дублювання коду і полегшує підтримку."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={<strong>Можливість зупинити спливання</strong>}
                        secondary="Ви можете зупинити спливання події на будь-якому етапі, якщо ви хочете завершити подальше поширення події. Це дозволяє керувати, де саме відбудеться обробка події."
                    />
                </ListItem>
            </List>

            <Typography variant="h4" gutterBottom>
                Фази подій
            </Typography>

            <Paragraph>
                Фази подій - це концепція, що описує порядок, в якому події розгортаються та обробляються в браузері. Існують три основні фази подій: фаза захоплення (capture phase), фаза цільового об'єкта (target phase) і фаза спливання (bubbling phase).
            </Paragraph>

            <Typography variant="h5" gutterBottom>
                Фаза захоплення (Capture Phase)
            </Typography>

            <Paragraph>
                Фаза захоплення - це перша фаза розгортання подій, коли подія спускається вниз від кореня DOM-дерева до цільового елемента. Під час фази захоплення обробники подій викликаються в порядку від найвищого рівня предка до цільового елемента. Проте важливо враховувати, що не всі типи подій підтримують фазу захоплення.
            </Paragraph>

            <Typography variant="h5" gutterBottom>
                Фаза цільового об'єкта (Target Phase)
            </Typography>

            <Paragraph>
                Фаза цільового об'єкта відбувається, коли подія досягає цільового елемента, на якому вона була спровокована. На цьому етапі обробник подій викликається на самому цільовому елементі.
            </Paragraph>

            <Typography variant="h5" gutterBottom>
                Фаза спливання (Bubbling Phase)
            </Typography>

            <Paragraph>
                Фаза спливання - це остання фаза розгортання подій, коли подія починає підніматися вгору від цільового елемента до кореня DOM-дерева. Під час фази спливання обробники подій викликаються в порядку від цільового елемента до найвищого рівня предка. Більшість типів подій підтримують фазу спливання.
            </Paragraph>

            <CodeBlock>
                {`
<!doctype html>
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
            // Клік на заголовку меню
            const submenu = event.target.nextElementSibling;
            submenu.classList.toggle("expanded");
        }
    });
</script>
</body>
</html>
                `}
            </CodeBlock>
        </div>
    );
};

export default EventBubblingPage;
