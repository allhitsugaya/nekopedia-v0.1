import React from 'react';
import { Box } from '@mui/material';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';

const IntroductionPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Вступ</BookHeader>

            <Paragraph>
                Веб-сторінки стали неодмінною частиною нашого щоденного життя. Ми використовуємо їх для доступу до інформації, розваг, комунікації та багато інших цілей. Проте, чи замислювалися ви коли-небудь, як веб-сторінки розуміють наші дії та реагують на них? В цьому розділі ми розглянемо саме це питання.
            </Paragraph>

            <Paragraph>
                «Document Object Model», коротко DOM, визначає структуру веб-сторінки і надає їй об'єктне подання. Він дозволяє нам взаємодіяти з вмістом сторінки, змінювати її структуру та вигляд, а також створювати динамічні ефекти. Наша подорож розпочнеться з огляду основних концепцій DOM і того, як веб-сторінка відображається в об'єктах JavaScript.
            </Paragraph>

            <Paragraph>
                Після того, як ми ознайомимося з основами DOM, ми перейдемо до подій. Події дозволяють сторінці реагувати на дії користувача, такі як кліки, натискання клавіш та багато інших. Вони важливі для створення інтерактивних та відгукливих веб-сторінок.
            </Paragraph>

            <Paragraph>
                В ході цієї подорожі ми розглянемо, як вибирати елементи сторінки за допомогою JavaScript, як їх змінювати та як створювати обробники подій. Ми також розглянемо різні методи для динамічної зміни сторінки і взаємодії з користувачем. Після завершення ви будете мати розуміння того, як взаємодіяти з веб-сторінками за допомогою DOM та подій, і зможете створювати динамічні та інтерактивні веб-додатки.
            </Paragraph>

            <Paragraph>
                Давайте розпочнемо нашу подорож у світі DOM та подій та дізнаємося, як вони допомагають нам взаємодіяти з веб-середовищем та створювати захоплюючі веб-додатки.
            </Paragraph>
        </Box>
    );
};

export default IntroductionPage;