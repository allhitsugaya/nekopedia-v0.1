import {Box, Container, useTheme} from "@mui/material";


function CodeBlock({children}) {
    const theme = useTheme();
    return (
        <Container>
        <Box
            component="pre"
            sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.mode === "dark" ? "light" : "dark",
                p: 2,
                borderRadius: 2,
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                overflowX: "auto",
                mb:0
            }}
        >
            {children}
        </Box>
    </Container>
    )
}
export default CodeBlock;