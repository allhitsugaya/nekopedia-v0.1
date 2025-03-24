import React from 'react';
import {Container, List, ListItem, Paper, Typography} from "@mui/material";


const AboutUsPage = () => {
    return (
        <Paper className="page-container">
            <Container maxWidth="xl">
            <Typography variant="h4" sx={{fontWeight:"bold"}}>Про нас</Typography>

            <Typography variantMapping="subtitle1">
                Ласкаво просимо на наш проект! Ми — команда ентузіастів, яка прагне зробити вивчення JavaScript доступним, зрозумілим та цікавим для кожного.
            </Typography>

            <Typography variant="h4">Чому ми створили цей проект?</Typography>
            <Typography variantMapping="subtitle1">
                JavaScript є однією з найпопулярніших мов програмування у світі. Він використовується для створення інтерактивних веб-додатків, серверних рішень, мобільних додатків та навіть ігор. Однак, через швидкий розвиток екосистеми JavaScript, багато розробників, особливо початківці, стикаються з труднощами у вивченні та використанні цієї мови.
            </Typography>
            <Typography variantMapping="subtitle1">
                Ми створили цей проект, щоб:
            </Typography>
            <List>
                <ListItem>
                    <Typography component="span" sx={{fontWeight:"bold"}}>Спростити вивчення JavaScript:</Typography> Наша документація містить чіткі пояснення, приклади коду та практичні поради, які допоможуть вам швидко опанувати основи та розширені концепції JavaScript.
                </ListItem>
                <ListItem>
                    <Typography component="span" sx={{fontWeight:"bold"}}>Надати актуальну інформацію:</Typography> Ми постійно оновлюємо матеріали, щоб вони відповідали сучасним стандартам та найкращим практикам.
                </ListItem>
                <ListItem>
                    <Typography component="span" sx={{fontWeight:"bold"}}>Підтримати спільноту:</Typography> Ми віримо, що знання повинні бути доступними для всіх. Тому наш проект є відкритим та безкоштовним для кожного.
                </ListItem>
            </List>

            <Typography variant="h4">Наша місія</Typography>
            <Typography>
                Наша місія — допомогти розробникам усіх рівнів досвіду стати кращими у використанні JavaScript. Ми хочемо, щоб ви не лише розуміли, як працює JavaScript, але й навчилися застосовувати його у реальних проектах.
            </Typography>

            <Typography variant="h4">Наша команда</Typography>
            <Typography>
                Наша команда складається з досвідчених розробників, викладачів та ентузіастів, які працюють над створенням якісних матеріалів. Ми любимо JavaScript і хочемо поділитися нашими знаннями з вами.
            </Typography>

            <Typography variant="h4">Приєднуйтесь до нас!</Typography>
            <Typography variantMapping="subtitle1">
                Якщо ви хочете долучитися до нашого проекту, маєте ідеї для покращення або просто хочете поділитися своїм досвідом, будь ласка, зв'яжіться з нами через наші контакти. Разом ми можемо зробити вивчення JavaScript ще кращим!
            </Typography>
            </Container>
        </Paper>
    );
};

export default AboutUsPage;