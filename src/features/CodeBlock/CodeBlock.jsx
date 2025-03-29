import { Box, Container, useTheme } from "@mui/material";

function CodeBlock({ children }) {
    const theme = useTheme();

    return (
        <Container>
            <Box
                component="pre"
                sx={{
                    backgroundColor: theme.palette.mode === 'dark' ? '#252525' : '#f5f5f5',
                    color: theme.palette.mode === 'dark' ? '#e0e0e0' : '#000000',
                    p: 2,
                    borderRadius: 2,
                    fontFamily: "'Fira Code', 'Consolas', monospace",
                    whiteSpace: "pre-wrap",
                    overflowX: "auto",
                    border: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#e0e0e0'}`,
                    boxShadow: theme.shadows[1],
                }}
            >
                {children}
            </Box>
        </Container>
    )
}

export default CodeBlock;