import React from 'react';
import { Container, List, ListItem, Paper, Typography, Box, Divider, Avatar, AvatarGroup } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import UpdateIcon from '@mui/icons-material/Update';
import GroupIcon from '@mui/icons-material/Group';

const AboutUsPage = () => {
    const teamMembers = [
        { name: "Sergey", role: "Frontend Developer" },
        { name: "Leonid", role: "Backend Developer" },
        { name: "Roman", role: "Fullstack Developer" }
    ];

    return (
        <Paper
            sx={{
                minHeight: '100vh',
                backgroundColor: '#000',
                py: 8,
                px: { xs: 2, sm: 0 },
                color: '#A2D9CE'
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h2" sx={{
                        fontWeight: 800,
                        mb: 3,
                        color: '#A2D9CE',
                        textShadow: '0 0 8px rgba(162, 217, 206, 0.5)',
                        position: 'relative',
                        '&:after': {
                            content: '""',
                            display: 'block',
                            width: '100px',
                            height: '3px',
                            background: '#A2D9CE',
                            margin: '20px auto 0',
                            borderRadius: '2px',
                            opacity: 0.5
                        }
                    }}>
                        Про нас
                    </Typography>
                    <Typography variant="h5" sx={{
                        maxWidth: '800px',
                        mx: 'auto',
                        lineHeight: 1.6,
                        fontSize: '1.25rem',
                        opacity: 0.9
                    }}>
                        Ласкаво просимо на наш проект! Ми — команда ентузіастів, яка прагне зробити вивчення JavaScript доступним, зрозумілим та цікавим для кожного.
                    </Typography>
                </Box>

                <Box sx={{ mb: 8 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <CodeIcon sx={{ fontSize: 40, color: '#A2D9CE', mr: 2, opacity: 0.8 }} />
                        <Typography variant="h3" sx={{ fontWeight: 700, color: '#A2D9CE' }}>
                            Чому ми створили цей проект?
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{
                        mb: 3,
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        opacity: 0.9
                    }}>
                        JavaScript є однією з найпопулярніших мов програмування у світі. Він використовується для створення інтерактивних веб-додатків, серверних рішень, мобільних додатків та навіть ігор. Однак, через швидкий розвиток екосистеми JavaScript, багато розробників, особливо початківці, стикаються з труднощами у вивченні та використанні цієї мови.
                    </Typography>
                    <Typography variant="body1" sx={{
                        mb: 3,
                        fontSize: '1.1rem',
                        fontWeight: 500
                    }}>
                        Ми створили цей проект, щоб:
                    </Typography>
                    <List sx={{
                        bgcolor: 'rgba(30, 30, 30, 0.5)',
                        borderRadius: 2,
                        p: 3,
                        border: '1px solid rgba(162, 217, 206, 0.1)'
                    }}>
                        <ListItem sx={{ alignItems: 'flex-start', py: 2 }}>
                            <SchoolIcon sx={{ color: '#A2D9CE', mr: 2, mt: '3px', opacity: 0.8 }} />
                            <Box>
                                <Typography component="span" sx={{ fontWeight: 700, display: 'block', mb: 1 }}>
                                    Спростити вивчення JavaScript
                                </Typography>
                                <Typography sx={{ opacity: 0.9 }}>
                                    Наша документація містить чіткі пояснення, приклади коду та практичні поради, які допоможуть вам швидко опанувати основи та розширені концепції JavaScript.
                                </Typography>
                            </Box>
                        </ListItem>
                        <Divider component="li" sx={{ borderColor: 'rgba(162, 217, 206, 0.1)' }} />
                        <ListItem sx={{ alignItems: 'flex-start', py: 2 }}>
                            <UpdateIcon sx={{ color: '#A2D9CE', mr: 2, mt: '3px', opacity: 0.8 }} />
                            <Box>
                                <Typography component="span" sx={{ fontWeight: 700, display: 'block', mb: 1 }}>
                                    Надати актуальну інформацію
                                </Typography>
                                <Typography sx={{ opacity: 0.9 }}>
                                    Ми постійно оновлюємо матеріали, щоб вони відповідали сучасним стандартам та найкращим практикам.
                                </Typography>
                            </Box>
                        </ListItem>
                        <Divider component="li" sx={{ borderColor: 'rgba(162, 217, 206, 0.1)' }} />
                        <ListItem sx={{ alignItems: 'flex-start', py: 2 }}>
                            <GroupIcon sx={{ color: '#A2D9CE', mr: 2, mt: '3px', opacity: 0.8 }} />
                            <Box>
                                <Typography component="span" sx={{ fontWeight: 700, display: 'block', mb: 1 }}>
                                    Підтримати спільноту
                                </Typography>
                                <Typography sx={{ opacity: 0.9 }}>
                                    Ми віримо, що знання повинні бути доступними для всіх. Тому наш проект є відкритим та безкоштовним для кожного.
                                </Typography>
                            </Box>
                        </ListItem>
                    </List>
                </Box>

                <Box sx={{ mb: 8 }}>
                    <Typography variant="h3" sx={{
                        fontWeight: 700,
                        mb: 4,
                        position: 'relative',
                        pl: 6,
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            height: '40px',
                            width: '3px',
                            bgcolor: '#A2D9CE',
                            opacity: 0.5,
                            borderRadius: '2px'
                        }
                    }}>
                        Наша місія
                    </Typography>
                    <Typography variant="body1" sx={{
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        maxWidth: '800px',
                        bgcolor: 'rgba(30, 30, 30, 0.5)',
                        p: 4,
                        borderRadius: 2,
                        border: '1px solid rgba(162, 217, 206, 0.1)',
                        opacity: 0.9
                    }}>
                        Наша місія — допомогти розробникам усіх рівнів досвіду стати кращими у використанні JavaScript. Ми хочемо, щоб ви не лише розуміли, як працює JavaScript, але й навчилися застосовувати його у реальних проектах.
                    </Typography>
                </Box>

                <Box sx={{ mb: 8 }}>
                    <Typography variant="h3" sx={{
                        fontWeight: 700,
                        mb: 4,
                        textAlign: 'center'
                    }}>
                        Наша команда
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 4
                    }}>
                        <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': {
                                width: 80,
                                height: 80,
                                fontSize: '2rem',
                                bgcolor: 'transparent',
                                border: '2px solid #A2D9CE',
                                color: '#A2D9CE'
                            } }}>
                            {teamMembers.map((member, index) => (
                                <Avatar key={index}>
                                    {member.name.charAt(0)}
                                </Avatar>
                            ))}
                        </AvatarGroup>
                    </Box>
                    <Typography variant="body1" sx={{
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        textAlign: 'center',
                        maxWidth: '800px',
                        mx: 'auto',
                        bgcolor: 'rgba(30, 30, 30, 0.5)',
                        p: 4,
                        borderRadius: 2,
                        border: '1px solid rgba(162, 217, 206, 0.1)',
                        opacity: 0.9
                    }}>
                        Наша команда складається з досвідчених розробників, викладачів та ентузіастів, які працюють над створенням якісних матеріалів. Ми любимо JavaScript і хочемо поділитися нашими знаннями з вами.
                    </Typography>
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{
                        fontWeight: 700,
                        mb: 3
                    }}>
                        Приєднуйтесь до нас!
                    </Typography>
                    <Typography variant="body1" sx={{
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        maxWidth: '800px',
                        mx: 'auto',
                        mb: 4,
                        opacity: 0.9
                    }}>
                        Якщо ви хочете долучитися до нашого проекту, маєте ідеї для покращення або просто хочете поділитися своїм досвідом, будь ласка, зв'яжіться з нами через наші контакти. Разом ми можемо зробити вивчення JavaScript ще кращим!
                    </Typography>
                    <Box sx={{
                        display: 'inline-block',
                        px: 4,
                        py: 2,
                        bgcolor: 'transparent',
                        color: '#A2D9CE',
                        borderRadius: 2,
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        border: '2px solid #A2D9CE',
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            bgcolor: 'rgba(162, 217, 206, 0.1)'
                        },
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        Зв'язатися з нами
                    </Box>
                </Box>
            </Container>
        </Paper>
    );
};

export default AboutUsPage;