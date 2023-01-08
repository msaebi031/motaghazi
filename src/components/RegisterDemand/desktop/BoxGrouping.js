import { SaveAsOutlined } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";


const BoxGrouping = () => {
    return (
        <Box mt={{xs:"17px" ,md:"40px"}} p={{xs:"1px 18px 1px 0px",md:"20px 40px 20px 40px"}}  className="d-flex justify-between align-center" bgcolor="light.main" id="boxgrouping">
            <Typography flex="inherit" component="h6" variant="body1" fontSize={{xs:"16px",md:"1.1rem"}} fontWeight={{xs:"500",md:"600"}} color="brown.contrastText">
                گوشی موبایل
                {/* namegrouping */}
            </Typography>
            <Divider sx={{display:{xs:"none",md:"block"}}} orientation="vertical" variant="middle" flexItem />
            <Button sx={{fontSize:{xs:"14px",md:" 0.9375rem"}, color: "brown.contrastText", px: 2, py: 2.2 }} variant="contained" endIcon={<SaveAsOutlined color="warning" />}>
                تغییر دسته بندی
            </Button>
        </Box>
    )
}

export default BoxGrouping;