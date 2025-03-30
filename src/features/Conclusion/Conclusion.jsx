import { Typography, useTheme} from "@mui/material";


function Conclusion({children}) {
    const theme = useTheme();
    return (
            <Typography
                variant="h4"
                sx={{
                    color: theme.palette.mode === "dark" ? "light" : "dark",
                    fontWeight:400,
                    ml:4,
                }}
            >
                {children}
            </Typography>

    )
}
export default Conclusion;