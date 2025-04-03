import { Typography, useTheme, Box } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';

const IntroductionPage = () => {
    const theme = useTheme();

    return (
        <Box>
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
        </Box>
    );
};

export default IntroductionPage;