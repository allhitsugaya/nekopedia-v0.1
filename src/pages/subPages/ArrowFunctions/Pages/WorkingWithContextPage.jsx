import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';

const WorkingWithContextPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Робота з Контекстом виклику</BookHeader>

            <Paragraph sx={{ mb: 4 }}>
                Контекст виклику (<code>this</code>) - це одна з найпотужніших, але й найскладніших для розуміння концепцій JavaScript. У цьому розділі ми детально розглянемо практичні аспекти роботи з контекстом у різних ситуаціях.
            </Paragraph>

            <Box component="section" mb={6}>
                <SubHeader>1. Контекст у методах об'єктів</SubHeader>
                <Paragraph>
                    У методах об'єктів <code>this</code> автоматично посилається на об'єкт, до якого належить метод:
                </Paragraph>
                <CodeBlock>
                    {`const user = {
  name: 'Anna',
  age: 28,
  introduce() {
    console.log(\`Мене звати \${this.name}, мені \${this.age} років\`);
  }
};

user.introduce(); // Мене звати Anna, мені 28 років`}
                </CodeBlock>

                <Paragraph sx={{ mt: 2 }}>
                    Важливо пам'ятати, що значення <code>this</code> визначається у момент виклику методу, а не його оголошення:
                </Paragraph>
                <CodeBlock>
                    {`const intro = user.introduce;
intro(); // Помилка! this буде undefined (у строгому режимі)`}
                </CodeBlock>
            </Box>

            <Box component="section" mb={6}>
                <SubHeader>2. Контекст у конструкторах та класах</SubHeader>
                <Paragraph>
                    У конструкторах функцій та класах ES6, <code>this</code> посилається на новостворений екземпляр:
                </Paragraph>
                <CodeBlock>
                    {`function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.displayInfo = function() {
    console.log(\`\${this.brand} \${this.model}\`);
  };
}

const myCar = new Car('Toyota', 'Camry');
myCar.displayInfo(); // Toyota Camry`}
                </CodeBlock>

                <Paragraph sx={{ mt: 2 }}>
                    У класах ES6 синтаксис більш сучасний, але принцип роботи <code>this</code> залишається таким самим:
                </Paragraph>
                <CodeBlock>
                    {`class User {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(\`Привіт, \${this.name}!\`);
  }
}

const user = new User('Марія');
user.greet(); // Привіт, Марія!`}
                </CodeBlock>
            </Box>

            <Box component="section" mb={6}>
                <SubHeader>3. Явне зв'язування контексту</SubHeader>
                <Paragraph>
                    JavaScript надає три методи для явного управління контекстом:
                </Paragraph>

                <List sx={{ mb: 3 }}>
                    <ListItem>
                        <ListItemText
                            primary="call() - викликає функцію з вказаним контекстом та аргументами"
                            secondary="Функція викликається негайно"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="apply() - аналогічно call(), але аргументи передаються масивом"
                            secondary="Корисно для функцій зі змінною кількістю аргументів"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="bind() - створює нову функцію з постійно прив'язаним контекстом"
                            secondary="Функція не викликається негайно"
                        />
                    </ListItem>
                </List>

                <CodeBlock>
                    {`const product = {
  name: 'Телефон',
  price: 10000,
  getDescription(discount) {
    return \`\${this.name}, ціна: \${this.price - discount} грн\`;
  }
};

// Використання call
console.log(product.getDescription.call(product, 500)); // Телефон, ціна: 9500 грн

// Використання apply
console.log(product.getDescription.apply(product, [500])); // Телефон, ціна: 9500 грн

// Використання bind
const getProductDesc = product.getDescription.bind(product);
console.log(getProductDesc(500)); // Телефон, ціна: 9500 грн`}
                </CodeBlock>
            </Box>

            <Box component="section" mb={6}>
                <SubHeader>4. Практичні приклади використання</SubHeader>
                <Paragraph>
                    Розглянемо реальні сценарії, де контроль контексту є критично важливим:
                </Paragraph>

                <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
                    Обробка подій
                </Typography>
                <CodeBlock>
                    {`class ButtonComponent {
  constructor() {
    this.text = 'Натисни мене';
    this.button = document.getElementById('myButton');
    this.button.addEventListener('click', this.handleClick.bind(this));
  }
  
  handleClick() {
    console.log(\`Кнопка з текстом: \${this.text} була натиснута\`);
  }
}`}
                </CodeBlock>

                <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
                    Виклик методів з колбеками
                </Typography>
                <CodeBlock>
                    {`const dataFetcher = {
  data: [],
  fetchData(callback) {
    // Імітація асинхронного запиту
    setTimeout(() => {
      this.data = [1, 2, 3];
      callback.call(this); // Передаємо поточний контекст
    }, 1000);
  },
  displayData() {
    console.log('Отримані дані:', this.data);
  }
};

dataFetcher.fetchData(dataFetcher.displayData);`}
                </CodeBlock>
            </Box>

            <Paper
                component="section"
                sx={{
                    p: 4,
                    backgroundColor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 3,
                    borderLeft: '4px solid',
                    borderColor: 'primary.main'
                }}
            >
                <Box className='conclusion'>
                    <SubHeader>Ключові висновки</SubHeader>
                    <List>
                        <ListItem>
                            <ListItemText primary="Контекст виклику визначається способом виклику функції, а не її оголошення" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Методи об'єктів автоматично отримують посилання на свій об'єкт через this" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Для збереження контексту використовуйте bind(), або стрілкові функції" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="call() та apply() дозволяють викликати функції з явно вказаним контекстом" />
                        </ListItem>
                    </List>
                    <Paragraph sx={{ mt: 2 }}>
                        Правильне розуміння контексту виклику дозволить вам писати більш надійний та передбачуваний код, особливо при роботі з об'єктами, подіями та асинхронними операціями.
                    </Paragraph>
                </Box>
            </Paper>
        </Box>
    );
};

export default WorkingWithContextPage;