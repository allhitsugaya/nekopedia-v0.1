import React from 'react';
import { Box, Typography } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';
import Code from '../../../../features/Code/Code.jsx';

const ExecutionContextPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Контекст виклику в JavaScript</BookHeader>

            <Paragraph>
                Контекст виклику (<Code>this</Code>) - це фундаментальне поняття JavaScript, яке визначає, до якого об'єкта належить виконуваний код. Розуміння контексту виклику є критично важливим для правильної роботи з об'єктами, методами та функціями в JavaScript.
            </Paragraph>

            <Box component="section" mb={4}>
                <SubHeader>Що таке контекст виклику?</SubHeader>
                <Paragraph>
                    Контекст виклику (<Code>this</Code>) - це спеціальна змінна, яка автоматично встановлюється при виклику функції і вказує на об'єкт, у контексті якого ця функція виконується. Значення <Code>this</Code> залежить від того, як функція була викликана, а не від того, де вона була оголошена.
                </Paragraph>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Основні правила визначення контексту
                </Typography>

                <Box component="section" mb={3}>
                    <Typography variant="h6" component="h3" gutterBottom>
                        1. Глобальний контекст
                    </Typography>
                    <Paragraph>
                        У глобальній області видимості (поза будь-якою функцією) <Code>this</Code> посилається на глобальний об'єкт:
                    </Paragraph>
                    <CodeBlock>
                        {`// У браузері:
console.log(this === window); // true

// У Node.js:
console.log(this === global); // true`}
                    </CodeBlock>
                </Box>

                <Box component="section" mb={3}>
                    <Typography variant="h6" component="h3" gutterBottom>
                        2. Виклик функції без контексту
                    </Typography>
                    <Paragraph>
                        При звичайному виклику функції (не методі об'єкта) <Code>this</Code> буде або глобальний об'єкт (у нестрогому режимі), або <Code>undefined</Code> (у строгому режимі):
                    </Paragraph>
                    <CodeBlock>
                        {`function showContext() {
  console.log(this);
}

showContext(); // window (нестрогий режим) або undefined (строгий режим)`}
                    </CodeBlock>
                </Box>

                <Box component="section" mb={3}>
                    <Typography variant="h6" component="h3" gutterBottom>
                        3. Метод об'єкта
                    </Typography>
                    <Paragraph>
                        Коли функція викликається як метод об'єкта, <Code>this</Code> посилається на цей об'єкт:
                    </Paragraph>
                    <CodeBlock>
                        {`const user = {
  name: 'Anna',
  greet() {
    console.log(\`Hello, \${this.name}!\`);
  }
};

user.greet(); // Hello, Anna!`}
                    </CodeBlock>
                </Box>

                <Box component="section" mb={3}>
                    <Typography variant="h6" component="h3" gutterBottom>
                        4. Конструктори
                    </Typography>
                    <Paragraph>
                        У функціях-конструкторах <Code>this</Code> посилається на новостворений об'єкт:
                    </Paragraph>
                    <CodeBlock>
                        {`function Person(name) {
  this.name = name;
}

const john = new Person('John');
console.log(john.name); // John`}
                    </CodeBlock>
                </Box>
            </Box>

            <Box component="section" mb={4}>
                <SubHeader>Явна зміна контексту</SubHeader>
                <Paragraph>
                    JavaScript надає методи для явної зміни контексту виклику функції:
                </Paragraph>

                <Box component="section" mb={3}>
                    <Typography variant="h6" component="h3" gutterBottom>
                        call() та apply()
                    </Typography>
                    <Paragraph>
                        Обидва методи викликають функцію з вказаним контекстом, але відрізняються способом передачі аргументів:
                    </Paragraph>
                    <CodeBlock>
                        {`function introduce(greeting, punctuation) {
  console.log(\`\${greeting}, I'm \${this.name}\${punctuation}\`);
}

const person = { name: 'Mike' };

// call() приймає аргументи окремо
introduce.call(person, 'Hi', '!'); // Hi, I'm Mike!

// apply() приймає аргументи у вигляді масиву
introduce.apply(person, ['Hello', '.']); // Hello, I'm Mike.`}
                    </CodeBlock>
                </Box>

                <Box component="section" mb={3}>
                    <Typography variant="h6" component="h3" gutterBottom>
                        bind()
                    </Typography>
                    <Paragraph>
                        Метод <Code>bind()</Code> створює нову функцію з постійно прив'язаним контекстом:
                    </Paragraph>
                    <CodeBlock>
                        {`const user = {
  name: 'Sarah',
  showName() {
    console.log(this.name);
  }
};

const showUserName = user.showName.bind(user);
showUserName(); // Sarah`}
                    </CodeBlock>
                </Box>
            </Box>

            <Box component="section" mb={4}>
                <SubHeader>Стрілкові функції та контекст</SubHeader>
                <Paragraph>
                    Стрілкові функції не мають власного <Code>this</Code> - вони беруть його з зовнішнього контексту:
                </Paragraph>
                <CodeBlock>
                    {`const obj = {
  name: 'Object',
  regularFunc: function() {
    console.log(this.name);
  },
  arrowFunc: () => {
    console.log(this.name);
  }
};

obj.regularFunc(); // Object
obj.arrowFunc(); // undefined (або window.name у браузері)`}
                </CodeBlock>
            </Box>

            <Box className='conclusion' >
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Контекст виклику в JavaScript - це потужний механізм, але він може бути джерелом плутанини. Основні правила:
                </Paragraph>
                <ul>
                    <li>У методах об'єкта <Code>this</Code> посилається на сам об'єкт</li>
                    <li>У звичайних функціях <Code>this</Code> залежить від способу виклику</li>
                    <li>Стрілкові функції не мають власного <Code>this</Code></li>
                    <li>Можна явно встановити контекст за допомогою <Code>call()</Code>, <Code>apply()</Code> або <Code>bind()</Code></li>
                </ul>
                <Paragraph>
                    Розуміння цих принципів допоможе уникнути поширених помилок і писати більш передбачуваний код.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default ExecutionContextPage;