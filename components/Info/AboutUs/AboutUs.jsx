import React from 'react';
import {Typography} from "@mui/material";


const AboutUsPage = () => {
    return (
        <Typography >
        <div className="page-container">
            <h1>Про нас</h1>

            <p>
                Ласкаво просимо на наш проект! Ми — команда ентузіастів, яка прагне зробити вивчення JavaScript доступним, зрозумілим та цікавим для кожного.
            </p>

            <h2>Чому ми створили цей проект?</h2>
            <p>
                JavaScript є однією з найпопулярніших мов програмування у світі. Він використовується для створення інтерактивних веб-додатків, серверних рішень, мобільних додатків та навіть ігор. Однак, через швидкий розвиток екосистеми JavaScript, багато розробників, особливо початківці, стикаються з труднощами у вивченні та використанні цієї мови.
            </p>
            <p>
                Ми створили цей проект, щоб:
            </p>
            <ul>
                <li>
                    <strong>Спростити вивчення JavaScript:</strong> Наша документація містить чіткі пояснення, приклади коду та практичні поради, які допоможуть вам швидко опанувати основи та розширені концепції JavaScript.
                </li>
                <li>
                    <strong>Надати актуальну інформацію:</strong> Ми постійно оновлюємо матеріали, щоб вони відповідали сучасним стандартам та найкращим практикам.
                </li>
                <li>
                    <strong>Підтримати спільноту:</strong> Ми віримо, що знання повинні бути доступними для всіх. Тому наш проект є відкритим та безкоштовним для кожного.
                </li>
            </ul>

            <h2>Наша місія</h2>
            <p>
                Наша місія — допомогти розробникам усіх рівнів досвіду стати кращими у використанні JavaScript. Ми хочемо, щоб ви не лише розуміли, як працює JavaScript, але й навчилися застосовувати його у реальних проектах.
            </p>

            <h2>Наша команда</h2>
            <p>
                Наша команда складається з досвідчених розробників, викладачів та ентузіастів, які працюють над створенням якісних матеріалів. Ми любимо JavaScript і хочемо поділитися нашими знаннями з вами.
            </p>

            <h2>Приєднуйтесь до нас!</h2>
            <p>
                Якщо ви хочете долучитися до нашого проекту, маєте ідеї для покращення або просто хочете поділитися своїм досвідом, будь ласка, зв'яжіться з нами через наші контакти. Разом ми можемо зробити вивчення JavaScript ще кращим!
            </p>
        </div>
        </Typography>
    );
};

export default AboutUsPage;