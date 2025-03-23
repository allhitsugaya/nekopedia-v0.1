import React from 'react';
import {NavLink} from "react-router-dom";
import './Content.css'
import {topics} from "../route/router.config.js";

const TopicsListPage = () => {
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