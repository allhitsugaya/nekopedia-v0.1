import {Typography} from "@mui/material";


function SubHeader({children}) {
    return(
        <Typography variant="h2"
        sx={{fontSize:"24px",textAlign:"center",
        fontWeight:600}}>{children}</Typography>
    )
}
export default SubHeader;