import React from 'react';
import {Container, Link, List, ListItem, Paper, Typography} from "@mui/material";


const ContactsPage = () => {
    return (
        <Paper className="page-container">
            <Container>
            <Typography variant="h4" sx={{fontWeight:"bold"}}>Контакти авторів проекту</Typography>

            <Typography variantMapping="subtitle1" >
                Якщо у вас є питання, пропозиції або бажання зв'язатися з авторами проекту, ви можете зробити це через наступні контакти:
            </Typography>

            <Typography className="contacts-list">
                <Typography className="contact-item">
                    <Typography component="h1" variant="h3">Sergey Zhitnik</Typography>
                    <List>
                        <ListItem>
                            <Typography component="span" sx={{fontWeight:"bold"}}>Email:</Typography>{' '}
                            <Link href="mailto:sergeyzhitnik2004@gmail.com">sergeyzhitnik2004@gmail.com</Link>
                        </ListItem>
                        <ListItem>
                            <Typography component="span" sx={{fontWeight:"bold"}}>GitHub:</Typography>{' '}
                            <Link href="https://github.com/allhitsugaya/" target="_blank" rel="noopener noreferrer">
                                https://github.com/allhitsugaya/
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Typography component="span" sx={{fontWeight:"bold"}}>LinkedIn:</Typography>{' '}
                            <Link href="https://www.linkedin.com/in/serhii-zhytnyk-4a3a73334/" target="_blank" rel="noopener noreferrer">
                                https://www.linkedin.com/in/serhii-zhytnyk-4a3a73334/
                            </Link>
                        </ListItem>
                    </List>
                </Typography>

                <Typography className="contact-item">
                    <Typography component="h1" variant="h3">Leonid Zverev</Typography>
                    <List>
                        <ListItem>
                            <Typography component="span" sx={{fontWeight:"bold"}}>Email:</Typography>{' '}
                            <Link href="mailto:zverev.leonid2005@gmail.com">zverev.leonid2005@gmail.com</Link>
                        </ListItem>
                        <ListItem>
                            <Typography component="span" sx={{fontWeight:"bold"}}>GitHub:</Typography>{' '}
                            <Link href="https://github.com/ShizaZombiPYDELb" target="_blank" rel="noopener noreferrer">
                                https://github.com/ShizaZombiPYDELb
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Typography component="span" sx={{fontWeight:"bold"}}>LinkedIn:</Typography>{' '}
                            <Link href="https://www.linkedin.com/in/леонид-звєрєв-579795356/" target="_blank" rel="noopener noreferrer">
                                https://www.linkedin.com/in/леонид-звєрєв-579795356/
                            </Link>
                        </ListItem>
                    </List>
                </Typography>

                <Typography className="contact-item">
                    <Typography component="h1" variant="h3">Roman Eremeev</Typography>
                    <List>
                        <ListItem>
                            <Typography component="span" sx={{fontWeight:"bold"}}>Email:</Typography>{' '}
                            <Link href="mailto:eremeevroma3@gmail.com">eremeevroma3@gmail.com</Link>
                        </ListItem>
                        <ListItem>
                            <Typography component="span" sx={{fontWeight:"bold"}}>GitHub:</Typography>{' '}
                            <Link href="https://github.com/SurovGnom" target="_blank" rel="noopener noreferrer">
                                https://github.com/SurovGnom
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Typography component="span" sx={{fontWeight:"bold"}}>LinkedIn:</Typography>{' '}
                            <Link href="https://www.linkedin.com/in/author3" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/author3
                            </Link>
                        </ListItem>
                    </List>
                </Typography>
            </Typography>
            </Container>
        </Paper>
    );
};

export default ContactsPage;