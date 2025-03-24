import {Typography, useTheme} from "@mui/material";


 function Paragraph({children}) {
    const theme = useTheme();
    return < Typography variant="p" sx={{
        fontSize: 16,
        color: theme.palette.mode === 'dark' ? 'light' : 'dark',
        textAlign: 'left',
        marginLeft: theme.spacing(4),
        lineHeight: theme.spacing(3),
        fontWeight: 300,
    }}  component="p">{children}</Typography>
}

export default Paragraph;