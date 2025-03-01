import React from "react";

function Mainpage() {
    return (
        <div className="max-w-3xl mx-auto bg-black p-6 rounded-lg shadow-md mt-6">
            <h1 className="text-3xl font-bold text-center text-gray-800">
                JavaScript Навчання
            </h1>
            <p className="text-lg text-gray-700 mt-4 text-center">
                Цей сайт створений трьома студентами{" "}
                <span className="bg-yellow-300 px-2 py-1 rounded">Hillel IT School</span>, щоб
                допомогти вам освоїти JavaScript від основ до просунутого рівня.
            </p>

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800">📌 Що ви знайдете на сайті?</h2>
                <p className="text-gray-700 mt-2">
                    Сайт структурований так, щоб навіть новачок міг поступово розібратися в JavaScript.
                </p>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800">🔹 1. Основи JavaScript</h2>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>
                        <b>Змінні та типи даних:</b> let, const, var, числа, рядки, булеві значення.
                    </li>
                    <li>
                        <b>Оператори:</b> арифметичні (+, -, *), логічні (&&, ||, !), тернарний оператор.
                    </li>
                    <li>
                        <b>Умови:</b> if/else, switch/case.
                    </li>
                    <li>
                        <b>Цикли:</b> for, while, do...while.
                    </li>
                    <li>
                        <b>Функції:</b> function, стрілкові функції (=>).
                    </li>
                </ul>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800">🔹 2. Поглиблені теми</h2>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>Робота з <b>DOM</b> (взаємодія з веб-сторінкою).</li>
                    <li>Асинхронні запити <b>AJAX</b> та робота з API.</li>
                    <li>Сучасні фреймворки: <b>React, Vue, Angular</b>.</li>
                </ul>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800">🔹 3. Практичні завдання</h2>
                <p className="text-gray-700 mt-2">
                    На сайті ви знайдете безліч реальних задач та прикладів, які допоможуть закріпити знання.
                </p>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800">🔹 4. Підтримка спільноти</h2>
                <p className="text-gray-700 mt-2">
                    Ви можете приєднатися до спільноти початківців, обговорювати питання та ділитися досвідом.
                </p>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800">🔥 Чому варто обрати цей сайт?</h2>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>
                        <b>Простота:</b> доступний навіть для новачків.
                    </li>
                    <li>
                        <b>Повнота:</b> покриває основи та складні теми.
                    </li>
                    <li>
                        <b>Практика:</b> реальні завдання для відпрацювання.
                    </li>
                    <li>
                        <b>Безкоштовно:</b> ніяких оплат, тільки знання!
                    </li>
                </ul>
            </div>

            <div className="text-center text-gray-500 text-sm mt-6">
                🚀 Вчіться, пробуйте, експериментуйте! Успіхів у вивченні JavaScript! 💻✨
            </div>
        </div>
    );
}

export default Mainpage;
