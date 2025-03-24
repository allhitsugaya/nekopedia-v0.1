import { Typography, useTheme } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';

const IntroductionPage = () => {
    const theme = useTheme();

    return (
        <>
            <Typography
                variant="h1"
                sx={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    mb: 4,
                }}
            >
                Вступ
            </Typography>

            <Paragraph>
                Ми розглянемо важливі аспекти, такі як статична типізація, переваги використання TypeScript у порівнянні зі звичайним JavaScript, і прийоми роботи з асинхронністю. За допомогою практичних прикладів та завдань, ми вивчимо, як забезпечити ефективність та безпеку вашого коду, використовуючи потужні можливості TypeScript.
            </Paragraph>
        </>
    );
};

export default IntroductionPage;