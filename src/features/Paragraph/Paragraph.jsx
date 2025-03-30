import {Typography, useTheme} from "@mui/material";


 function Paragraph({children}) {
    const theme = useTheme();
    return < Typography variant="p" sx={{
        fontSize: 15,
        color: theme.palette.mode === 'dark' ? 'light' : 'dark',
        textAlign: 'left',
        marginLeft: theme.spacing(4),
        lineHeight: theme.spacing(3),
        fontWeight: 300,
        textWrapStyle: 'pretty',
        textIndent: '1.5rem',
        pt:2,
        pb:2
    }}  component="p">{children}</Typography>
}

export default Paragraph;