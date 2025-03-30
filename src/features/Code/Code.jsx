import {Typography, useTheme} from "@mui/material";


function Code({children}) {
    const theme = useTheme();
    return < Typography variant="p" sx={{
        fontSize: 14,
        fontWeight: 600,
        fontFamily: "monospace",
        color: theme.palette.mode === 'dark' ? 'light' : 'dark',
    }}  component="code">{children}</Typography>
}

export default Code;