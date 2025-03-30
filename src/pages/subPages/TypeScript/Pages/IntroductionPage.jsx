import {Container, Typography, useTheme} from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";

const IntroductionPage = () => {

    return (
        <Container>
            <BookHeader
                variant="h1"
                sx={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    mb: 4,
                }}
            >
                Вступ
            </BookHeader>

            <Paragraph>
                Ми розглянемо важливі аспекти, такі як статична типізація, переваги використання TypeScript у порівнянні зі звичайним JavaScript, і прийоми роботи з асинхронністю. За допомогою практичних прикладів та завдань, ми вивчимо, як забезпечити ефективність та безпеку вашого коду, використовуючи потужні можливості TypeScript.
            </Paragraph>
        </Container>
    );
};

export default IntroductionPage;