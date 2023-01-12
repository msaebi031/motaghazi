import { Diversity3, ErrorOutline } from "@mui/icons-material";
import { Avatar, Box, Button, Typography } from "@mui/material";

const BoxNew = () => {
    return (
        <Box id="boxNew">
            <Box className="d-flex justify-between align-center" mt={5} py={3.5} px={5.3}>
                <Typography flex="auto" component="h6" variant="h6" fontWeight="bold" color="light.main">
                    جدید
                </Typography>
                <Button size="large" sx={{ color: "light.main" }} variant="text" startIcon={<ErrorOutline fontSize="small" color="brown.dark" />}>گزارش اشکال</Button>
                <Avatar className="avatar-boxnew" variant="rounded">
                    <Diversity3 />
                </Avatar>
            </Box>
        </Box>
    )
}

export default BoxNew;