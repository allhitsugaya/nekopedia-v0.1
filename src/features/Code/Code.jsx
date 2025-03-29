import { Typography, useTheme } from "@mui/material";

function Code({ children }) {
    const theme = useTheme();

    return (
        <Typography
            variant="p"
            component="code"
            sx={{
                fontSize: '0.95rem',
                fontWeight: 600,
                fontFamily: "'Fira Code', 'Consolas', monospace",
                color: theme.palette.mode === 'dark' ? '#e0e0e0' : '#000000',
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(187, 134, 252, 0.1)' : 'rgba(187, 134, 252, 0.1)',
                padding: '0.2em 0.4em',
                borderRadius: '4px',
                display: 'inline',
                lineHeight: 1.5,
            }}
        >
            {children}
        </Typography>
    );
}

export default Code;