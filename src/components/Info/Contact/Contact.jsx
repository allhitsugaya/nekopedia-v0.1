import React from 'react';
import { Container, Link, List, ListItem, Paper, Typography, Avatar, Box, Divider, useTheme } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactsPage = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const contacts = [
        {
            name: "Sergey Zhitnik",
            email: "sergeyzhitnik2004@gmail.com",
            github: "https://github.com/allhitsugaya/",
            linkedin: "https://www.linkedin.com/in/serhii-zhytnyk-4a3a73334/",
            avatar: "S"
        },
        {
            name: "Leonid Zverev",
            email: "zverev.leonid2005@gmail.com",
            github: "https://github.com/ShizaZombiPYDELb",
            linkedin: "https://www.linkedin.com/in/леонид-звєрєв-579795356/",
            avatar: "L"
        },
        {
            name: "Roman Eremeev",
            email: "eremeevroma3@gmail.com",
            github: "https://github.com/SurovGnom",
            linkedin: "https://www.linkedin.com/in/author3",
            avatar: "R"
        }
    ];

    return (
        <Paper
            sx={{
                minHeight: '100vh',
                backgroundColor: isDarkMode ? '#000' : '#f5f5f5',
                py: 6,
                color: isDarkMode ? '#A2D9CE' : '#2d3748'
            }}
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        textAlign: 'center',
                        mb: 6
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: isDarkMode ? '#A2D9CE' : '#2d3748',
                            textShadow: isDarkMode ? '0 0 8px rgba(162, 217, 206, 0.5)' : 'none'
                        }}
                    >
                        Контакти авторів проекту
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            maxWidth: '600px',
                            mx: 'auto',
                            opacity: 0.9,
                            color: isDarkMode ? '#A2D9CE' : '#4a5568'
                        }}
                    >
                        Якщо у вас є питання, пропозиції або бажання зв'язатися з авторами проекту, ви можете зробити це через наступні контакти:
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 4
                    }}
                >
                    {contacts.map((contact, index) => (
                        <Paper
                            key={index}
                            elevation={3}
                            sx={{
                                p: 3,
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                backgroundColor: isDarkMode ? '#121212' : '#ffffff',
                                border: isDarkMode ? '1px solid #1E1E1E' : '1px solid #e0e0e0',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: isDarkMode
                                        ? '0 0 15px rgba(162, 217, 206, 0.3)'
                                        : '0 0 15px rgba(0, 0, 0, 0.1)',
                                    borderColor: '#A2D9CE'
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                                <Avatar
                                    sx={{
                                        bgcolor: 'transparent',
                                        width: 60,
                                        height: 60,
                                        fontSize: '1.5rem',
                                        mb: 2,
                                        color: '#A2D9CE',
                                        border: '2px solid #A2D9CE'
                                    }}
                                >
                                    {contact.avatar}
                                </Avatar>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 600,
                                        textAlign: 'center',
                                        color: isDarkMode ? '#A2D9CE' : '#2d3748'
                                    }}
                                >
                                    {contact.name}
                                </Typography>
                            </Box>

                            <Divider sx={{
                                my: 2,
                                backgroundColor: isDarkMode
                                    ? 'rgba(162, 217, 206, 0.2)'
                                    : 'rgba(0, 0, 0, 0.12)'
                            }} />

                            <List dense>
                                <ListItem sx={{ px: 0 }}>
                                    <EmailIcon sx={{
                                        mr: 1.5,
                                        color: '#A2D9CE',
                                        fontSize: '1.2rem'
                                    }} />
                                    <Link
                                        href={`mailto:${contact.email}`}
                                        underline="hover"
                                        sx={{
                                            color: isDarkMode ? '#A2D9CE' : '#2d3748',
                                            '&:hover': {
                                                color: isDarkMode ? '#fff' : '#000'
                                            }
                                        }}
                                    >
                                        {contact.email}
                                    </Link>
                                </ListItem>

                                <ListItem sx={{ px: 0 }}>
                                    <GitHubIcon sx={{
                                        mr: 1.5,
                                        color: '#A2D9CE',
                                        fontSize: '1.2rem'
                                    }} />
                                    <Link
                                        href={contact.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="hover"
                                        sx={{
                                            color: isDarkMode ? '#A2D9CE' : '#2d3748',
                                            '&:hover': {
                                                color: isDarkMode ? '#fff' : '#000'
                                            }
                                        }}
                                    >
                                        GitHub
                                    </Link>
                                </ListItem>

                                <ListItem sx={{ px: 0 }}>
                                    <LinkedInIcon sx={{
                                        mr: 1.5,
                                        color: '#A2D9CE',
                                        fontSize: '1.2rem'
                                    }} />
                                    <Link
                                        href={contact.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="hover"
                                        sx={{
                                            color: isDarkMode ? '#A2D9CE' : '#2d3748',
                                            '&:hover': {
                                                color: isDarkMode ? '#fff' : '#000'
                                            }
                                        }}
                                    >
                                        LinkedIn
                                    </Link>
                                </ListItem>
                            </List>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Paper>
    );
};

export default ContactsPage;