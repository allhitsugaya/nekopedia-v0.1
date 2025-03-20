import React from 'react';

const EventBubblingExamplePage = () => {
    return (
        <div className="page-container">
            <h1>Приклад роботи з фазами захоплення та спливання</h1>
            <p>
                Гарний приклад використання фази захоплення і спливання - це створення меню згортання. Уявімо, що ми маємо дерево елементів меню, і ми хочемо, щоб при кліку на пункт меню відкривався або закривався вміст підпунктів. Ми можемо використовувати фазу спливання для обробки кліків та фазу захоплення для відстеження кліку на заголовок меню.
            </p>

            <h2>Приклад коду</h2>
            <pre>
        <code>
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
        </code>
      </pre>
            <p>
                У цьому прикладі фаза спливання використовується для обробки кліків на пунктах меню, а фаза захоплення слугує для відстеження кліку на заголовку меню, щоб розгортати або згортати підменю.
            </p>
        </div>
    );
};

export default EventBubblingExamplePage;