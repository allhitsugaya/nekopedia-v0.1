import React from 'react';

const ClassCreationPage = () => {
    return (
        <div className="page-container">
            <h1>Створення класів</h1>

            <h2>1. Створення конструктора класу</h2>
            <p>
                Почнемо з оголошення класу та визначення конструктора. Конструктор - це метод з ім'ям <code>constructor</code>, який викликається автоматично при створенні нового екземпляру класу. Основна його роль - ініціалізація об'єкта, тобто задання його початкового стану та властивостей.
            </p>
            <pre>
        <code>
          {`
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі ми визначимо клас <code>Book</code>, який має конструктор з параметрами <code>title</code>, <code>author</code> та <code>year</code>.
            </p>

            <h2>2. Створення об'єктів за допомогою конструктора</h2>
            <p>
                Тепер, коли маємо конструктор, можемо створювати нові об'єкти з його допомогою. При створенні об'єкта за допомогою класу <code>Book</code>, конструктор буде автоматично викликаний для ініціалізації властивостей об'єкта:
            </p>
            <pre>
        <code>
          {`
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
console.log(book1);
console.log(book2);
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі ми створюємо два об'єкти <code>book1</code> та <code>book2</code>, передаючи їх конструктору відповідні значення. Кожен об'єкт отримує властивості <code>title</code>, <code>author</code> та <code>year</code>, які встановлюються значеннями з конструктора.
            </p>

            <h2>3. Використання конструктора для ініціалізації об'єктів</h2>
            <p>
                Один з ключових аспектів конструктора - це можливість ініціалізувати об'єкт певним початковим станом. Давайте додамо метод до класу <code>Book</code>, який виводитиме інформацію про книгу:
            </p>
            <pre>
        <code>
          {`
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  displayInfo() {
    console.log(\`\${this.title} by \${this.author}, published in \${this.year}\`);
  }
}

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);

book1.displayInfo(); // "The Great Gatsby by F. Scott Fitzgerald, published in 1925"
book2.displayInfo(); // "To Kill a Mockingbird by Harper Lee, published in 1960"
          `}
        </code>
      </pre>
            <p>
                Тепер, при виклику методу <code>displayInfo</code>, ми можемо отримати інформацію про кожну книгу, а початковий стан об'єкта був встановлений конструктором.
            </p>

            <div className='conclusion'>
                <h2>Заключення</h2>
                <p>
                    Конструктор класу використовується для надання об'єктам початкового стану та ініціалізації їхніх
                    властивостей. Це стає основною складовою при створенні об'єктів за допомогою класів в JavaScript. З
                    його допомогою код стає більш структурованим та підтримуваним, а об'єкти отримують необхідні
                    початкові значення.
                </p>
            </div>
        </div>
    );
};

export default ClassCreationPage;