import {Box, Typography} from "@mui/material";

function Chapter({children}) {
    return (
        <Box sx={{ mb: 3, textAlign: 'center' }}>
            <Typography
                variant="h3"
                sx={{
                    fontSize: '1.25rem',
                    mt: 3,
                    mb: 2,
                    fontWeight: 400,
                }}
            >
                {children}
            </Typography>
        </Box>
    )
}

export default Chapter;