import React from 'react';
import {Typography, List, ListItem, ListItemText, Container} from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";

const EventBubblingPage = () => {
    return (
        <Container>
            <BookHeader>
                Спливання подій (Event Bubbling)
            </BookHeader>

            <Paragraph>
                Спливання подій - це аспект подій в DOM (Document Object Model), який означає, що події можуть поширюватися вгору по ієрархії елементів DOM після того, як вони були спровоковані. Це означає, що коли ви викликаєте подію на конкретному елементі, ця подія також буде спровокована на всіх його батьківських елементах відповідно до їх ієрархії. Спливання подій дозволяє реагувати на події на різних рівнях DOM-дерева без необхідності призначення обробників подій для кожного елемента окремо.
            </Paragraph>

            <Chapter variant="h4" gutterBottom>
                Для чого це важливо?
            </Chapter>

            <Paragraph>
                Спливання подій важливо, оскільки воно дозволяє створювати більш гнучкі та підтримувані веб-додатки. Деякі з основних переваг спливання подій включають:
            </Paragraph>

            <List>
                <ListItem>
                    <ListItemText
                        primary={<Code>Доступність для різних рівнів DOM</Code>}
                        secondary="Ви можете встановити обробник подій на вищому рівні DOM, і він автоматично буде спрацьовувати для всіх дочірніх елементів, які генерують цю подію. Це спрощує роботу з подіями на багатьох елементах."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={<Code>Зменшення дублювання коду</Code>}
                        secondary="За допомогою спливання подій вам не потрібно додавати обробники подій до кожного окремого елемента, що має однакову функціональність. Це зменшує дублювання коду і полегшує підтримку."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={<Code>Можливість зупинити спливання</Code>}
                        secondary="Ви можете зупинити спливання події на будь-якому етапі, якщо ви хочете завершити подальше поширення події. Це дозволяє керувати, де саме відбудеться обробка події."
                    />
                </ListItem>
            </List>

            <BookHeader>
                Фази подій
            </BookHeader>

            <Paragraph>
                Фази подій - це концепція, що описує порядок, в якому події розгортаються та обробляються в браузері. Існують три основні фази подій: фаза захоплення (capture phase), фаза цільового об'єкта (target phase) і фаза спливання (bubbling phase).
            </Paragraph>

            <SubHeader variant="h5" gutterBottom>
                Фаза захоплення (Capture Phase)
            </SubHeader>

            <Paragraph>
                Фаза захоплення - це перша фаза розгортання подій, коли подія спускається вниз від кореня DOM-дерева до цільового елемента. Під час фази захоплення обробники подій викликаються в порядку від найвищого рівня предка до цільового елемента. Проте важливо враховувати, що не всі типи подій підтримують фазу захоплення.
            </Paragraph>

            <SubHeader variant="h5" gutterBottom>
                Фаза цільового об'єкта (Target Phase)
            </SubHeader>

            <Paragraph>
                Фаза цільового об'єкта відбувається, коли подія досягає цільового елемента, на якому вона була спровокована. На цьому етапі обробник подій викликається на самому цільовому елементі.
            </Paragraph>

            <SubHeader variant="h5" gutterBottom>
                Фаза спливання (Bubbling Phase)
            </SubHeader>

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
        </Container>
    );
};

export default EventBubblingPage;
