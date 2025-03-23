import React from 'react';
import {NavLink} from "react-router-dom";
import './Content.css'

const TopicsListPage = () => {
    const topics = [
        { id: 1, title: "Змінні та типи данних", path: '/variables'  },
        { id: 2, title: "Оператори", path: '/operators'  },
        { id: 3, title: "Цикли",path: '/cycles'  },
        { id: 4, title: "Введення в функції", path: '/introducing-fn'  },
        { id: 5, title: "Замикання, коллбеки, функцій вищого порядку та IIFE", path: '/circuits-callbacks-fn'  },
        { id: 6, title: "Стрілкові функції", path: '/arrow-fn'  },
        { id: 7, title: "Рекурсія та вступ до теми функцій констркуторів", path: '/recursion'  },
        { id: 8, title: "Array та Object", path: '/array' },
        { id: 9, title: "DOM та Events", path: '/dom-events' },
        { id: 10, title: "Об'єкт Event, Фази подій, Делегування. BOM", path: '/obj-events'  },
        { id: 11, title: "Форми та регулярні вирази", path: '/forms'  },
        { id: 12, title: "Coding Best Practices та чистий код", path: '/best-practice'  },
        { id: 13, title: "WebStorage", path: '/web-storage'  },
        { id: 14, title: "OOП JavaScript", path: '/oop-js'  },
        { id: 15, title: "Class", path: '/class' },
        { id: 16, title: "Ведення в Асинхронність, Event Loop та Promise", path: '/promise'  },
        { id: 17, title: "Ajax та async…await", path: '/ajax'  },
        { id: 18, title: "jQuery", path: '/jquery'  },
        { id: 19, title: "TypeScript", path: '/typescript'  },
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
                        <NavLink to={topic.path} style={{textDecoration:'none', color:'#A2D9CE'}} >{topic.title}</NavLink>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TopicsListPage;