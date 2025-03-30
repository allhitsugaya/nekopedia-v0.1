import React from 'react';
import {Box, Container, List, ListItem, Typography} from "@mui/material";
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';
import Code from '../../../../../features/Code/Code.jsx';
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import Conclusion from "../../../../../features/Conclusion/Conclusion.jsx";

const SecondEventBubblingPage = () => {
    return (
        <Container>
            <BookHeader >Механізм спливання та використання спливання подій</BookHeader>


                <SubHeader >Механізм спливання</SubHeader>
                <Paragraph>
                    Механізм спливання подій полягає в тому, що коли подія спрацьовує на конкретному елементі DOM, вона спочатку обробляється на цьому елементі, а потім починає підніматися вгору по ієрархії DOM. Під час підняття події кожен батьківський елемент також спрацьовує подію, якщо для нього був призначений відповідний обробник.
                </Paragraph>
                <Paragraph>
                    Простими словами, коли подія відбувається на елементі, спочатку запускаються обробники на ньому, потім на його батькові, потім на інших предках і так до самого верху.
                </Paragraph>
                <Paragraph>
                    Скажімо у нас є 3 вкладені елементи <Code>FORM &gt; DIV &gt; P</Code> з обробником на кожному з них:
                </Paragraph>

                <CodeBlock>
                    {`
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
                    `}
                </CodeBlock>

                <Paragraph>
                    При кліку на внутрішній <Code>&lt;p&gt;</Code> спочатку виконується <Code>onclick</Code>:
                </Paragraph>

                <Box sx={{ml:2}}>
                    <List sx={{
                        pl: 2,
                        listStyleType: 'disc',
                        '& .MuiListItem-root': {
                            display: 'list-item',
                            py: 0.5,
                            pl: 1,
                            ml: 2,
                            fontSize: 14,
                            fontWeight: 800
                        }
                    }}>
                    <ListItem><Paragraph>У самого <Code>&lt;p&gt;</Code>.</Paragraph></ListItem>
                    <ListItem><Paragraph>Потім зовнішнього <Code>&lt;div&gt;</Code>.</Paragraph></ListItem>
                    <ListItem><Paragraph>Потім зовнішнього <Code>&lt;form&gt;</Code>.</Paragraph></ListItem>
                    <ListItem><Paragraph>І так далі вгору до об'єкта <Code>document</Code>.</Paragraph></ListItem>
                    </List>
                </Box>
                <Paragraph>
                    ⚠️ Майже всі події спливають. Ключове слово в цій фразі – "майже". Наприклад, подія <Code>focus</Code> не спливає. Є й інші приклади, ми з ними познайомимося. Але все ж таки це скоріше виняток, ніж правило, більшість подій саме спливають.
                </Paragraph>


                <SubHeader variant="h2" component="h2">Використання спливання подій</SubHeader>
                <Chapter variant="h3" component="h3">Відправлення події до батьківського елемента</Chapter>
                <Paragraph>
                    Однією з ключових можливостей спливання подій є здатність відправляти подію до батьківського елемента для обробки. Це корисно, коли вам потрібно забезпечити, що один обробник подій вистачить для групи елементів з однаковою функціональністю.
                </Paragraph>

                <CodeBlock>
                    {`
// HTML
<div id="parent">
    Батьківський елемент
    <button id="child">Дочірній елемент</button>
</div>
                    `}
                </CodeBlock>

                <CodeBlock>
                    {`
// JavaScript
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", function (event) {
    alert("Обробник події на батьківському елементі");
});

child.addEventListener("click", function (event) {
    alert("Обробник події на дочірньому елементі");
    event.stopPropagation(); // Зупинка спливання події
});
                    `}
                </CodeBlock>

                <Paragraph>
                    У цьому прикладі обробник події призначений для батьківського та дочірнього елемента. Коли ви клікаєте на дочірньому елементі, спочатку спрацьовує обробник для дочірнього елемента, а потім для батьківського. Однак, завдяки методу <Code>stopPropagation()</Code>, спливання події зупиняється, і обробник на батьківському елементі не спрацьовує.
                </Paragraph>


                <Conclusion>Висновок</Conclusion>
                <Paragraph>
                    Спливання подій є потужним механізмом в JavaScript та DOM, який дозволяє обробляти події на
                    батьківських елементах за умови, що вони були спровоковані на дочірньому елементі. Це полегшує
                    роботу з подіями на веб-сторінках і дозволяє створювати більш компактний та підтримуваний код.
                    Використовуючи спливання подій разом із методом <Code>stopPropagation()</Code>, ви можете точно
                    керувати тим, як події розповсюджуються вгору по DOM-дереву, що забезпечує більш високий рівень
                    контролю над вашими веб-додатками.
                </Paragraph>
        </Container>
    );
};

export default SecondEventBubblingPage;