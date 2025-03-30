import {Typography} from "@mui/material";


function SubHeader({children}) {
    return(
        <Typography variant="h2"
        sx={{fontSize:"1.5rem",textAlign:"center",pt:4,m:2,
        fontWeight:600}}>{children}</Typography>
    )
}
export default SubHeader;