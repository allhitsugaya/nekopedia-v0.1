import React from 'react';

const TopicsListPage = () => {
    const topics = [
        { id: 1, title: "Змінні та типи данних", link: "/" },
        { id: 2, title: "Оператори", link: "/" },
        { id: 3, title: "Цикли", link: "/" },
        { id: 4, title: "Введення в функції", link: "/" },
        { id: 5, title: "Замикання, коллбеки, функцій вищого порядку та IIFE", link: "/" },
        { id: 6, title: "Стрілкові функції", link: "/" },
        { id: 7, title: "Рекурсія та вступ до теми функцій констркуторів", link: "/" },
        { id: 8, title: "Array та Object", link: "/" },
        { id: 9, title: "DOM та Events", link: "/" },
        { id: 10, title: "Об'єкт Event, Фази подій, Делегування. BOM", link: "/" },
        { id: 11, title: "Форми та регулярні вирази", link: "/" },
        { id: 12, title: "Coding Best Practices та чистий код", link: "/" },
        { id: 13, title: "WebStorage", link: "/" },
        { id: 14, title: "OOP JavaScript", link: "/" },
        { id: 15, title: "Class", link: "/" },
        { id: 16, title: "Ведення в Асинхронність, Event Loop та Promise", link: "/" },
        { id: 17, title: "Ajax та async…await", link: "/" },
        { id: 18, title: "jQuery", link: "/" },
        { id: 19, title: "TypeScript", link: "/" },
    ];

    return (
        <div className="page-container">
            <h1>Перелік тем</h1>

            <p>
                Нижче наведено список усіх доступних тем. Натисніть на тему, щоб перейти до відповідного розділу.
            </p>

            <ol className="topics-list">
                {topics.map((topic) => (
                    <li key={topic.id}>
                        <a href={topic.link}>{topic.title}</a>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TopicsListPage;