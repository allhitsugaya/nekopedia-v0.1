import React from 'react';
import './Contact.css'

const ContactsPage = () => {
    return (
        <div className="page-container">
            <h1>Контакти авторів проекту</h1>

            <p>
                Якщо у вас є питання, пропозиції або бажання зв'язатися з авторами проекту, ви можете зробити це через наступні контакти:
            </p>

            <div className="contacts-list">
                <div className="contact-item">
                    <h2>Sergey Zhitnik</h2>
                    <ul>
                        <li>
                            <strong>Email:</strong>{' '}
                            <a href="mailto:sergeyzhitnik2004@gmail.com">sergeyzhitnik2004@gmail.com</a>
                        </li>
                        <li>
                            <strong>GitHub:</strong>{' '}
                            <a href="https://github.com/allhitsugaya/" target="_blank" rel="noopener noreferrer">
                                https://github.com/allhitsugaya/
                            </a>
                        </li>
                        <li>
                            <strong>LinkedIn:</strong>{' '}
                            <a href="https://www.linkedin.com/in/author1" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/author1
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="contact-item">
                    <h2>Leonid Zverev</h2>
                    <ul>
                        <li>
                            <strong>Email:</strong>{' '}
                            <a href="mailto:zverev.leonid2005@gmail.com">zverev.leonid2005@gmail.com</a>
                        </li>
                        <li>
                            <strong>GitHub:</strong>{' '}
                            <a href="https://github.com/ShizaZombiPYDELb" target="_blank" rel="noopener noreferrer">
                                https://github.com/ShizaZombiPYDELb
                            </a>
                        </li>
                        <li>
                            <strong>LinkedIn:</strong>{' '}
                            <a href="https://www.linkedin.com/in/леонид-звєрєв-579795356/" target="_blank" rel="noopener noreferrer">
                                https://www.linkedin.com/in/леонид-звєрєв-579795356/
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="contact-item">
                    <h2>Ім'я автора 3</h2>
                    <ul>
                        <li>
                            <strong>Email:</strong>{' '}
                            <a href="mailto:author3@example.com">author3@example.com</a>
                        </li>
                        <li>
                            <strong>GitHub:</strong>{' '}
                            <a href="https://github.com/author3" target="_blank" rel="noopener noreferrer">
                                github.com/author3
                            </a>
                        </li>
                        <li>
                            <strong>LinkedIn:</strong>{' '}
                            <a href="https://www.linkedin.com/in/author3" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/author3
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactsPage;