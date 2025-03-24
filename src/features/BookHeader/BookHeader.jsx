import {Box, Typography} from "@mui/material";

function BookHeader({children}) {
    return (
        <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography
            component="h1"
            variant="h4"
            sx={{fontWeight:800}}>
            {children}
        </Typography>
        </Box>
    )
}

export default BookHeader;