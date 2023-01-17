// Import Mui Icons
import { SmsOutlined, Smartphone, WhatsApp, CheckBox, CheckBoxOutlineBlankTwoTone, Done } from "@mui/icons-material";
// Import Mui
import { Box, OutlinedInput, Typography, Checkbox, FormControlLabel } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
// Import React
import { Fragment, useState } from "react";


const BottomPart = ({ selectedValue, items }) => {

    //    const all = converter.toWords(13); // => “thirteen”

    // itemCheckbox
    const formItem = [
        { text: "انتشار شماره موبایل جهت تماس", icon: <Smartphone color="puper" fontSize="19px" /> },
        { text: "انتشار شماره موبایل جهت دریافت پیامک", icon: <SmsOutlined color="puper" fontSize="19px" /> },
        { text: "انتشار شماره موبایل جهت تماس با واتس اپ", icon: <WhatsApp color="puper" fontSize="19px" /> },
    ];

    // ======= UseEstate ======== //
    const [budget, setBudget] = useState("");


    return (
        <Fragment>
            {/* Start  BottomPart*/}
            <Grid2 id="bottom-part" container spacing={3}>
                <Grid2 item xs={12} md={6}>
                    <Typography mt={1.7} color="dark.light" fontSize="12.5px" component="p" variant="body2">
                        نوع تعامل با فروشندگان
                    </Typography>
                    <Box className="box-form">
                        {formItem.map((item, index) => (
                            <FormControlLabel
                                key={index}
                                control={<Checkbox
                                    icon={<CheckBox color="blue" />}
                                    checkedIcon={<CheckBoxOutlineBlankTwoTone color="brown" />}
                                    defaultChecked />} label={
                                        <Box display="flex" mt={.2}>
                                            {item.icon}
                                            < Typography color="dark.light" pr={.7} pt={.1} fontSize="12.6px" component="p" variant="body2">
                                                {item.text}
                                            </Typography>
                                        </Box>
                                    }
                            />
                        ))}
                    </Box>
                </Grid2>

                {/* budget box */}
                <Grid2 item xs={12} md={6}>
                    {selectedValue === items[0].name ? "" : (
                        <Box mt={1.7}>
                            <Box className="d-flex align-center justify-between">

                                <Typography mb="13px" color="dark.light" fontSize="12.5px" component="p" variant="body2">
                                    بودجه
                                </Typography>
                                {budget.length >= 1 ? (
                                    <Done className="icon-input" color="successLight" />
                                ) : ""}
                            </Box>
                            <Box className="style-input">
                                <Typography id="changedNum" pt={1} mb="2.5px" mr={1.7} color="lightBlue.main" fontSize="10px" component="p" variant="body2">
                                    تومان
                                </Typography>
                                <OutlinedInput
                                    value={budget}
                                    onChange={e => setBudget(e.target.value)}
                                    name="numInput"
                                    type="number"
                                    sx={{ height: "0px" }}
                                    color="light"
                                    fullWidth
                                    id="outlined-number"
                                />
                            </Box>
                        </Box>
                    )}
                </Grid2>
            </Grid2>
            {/* End  BottomPart*/}
        </Fragment>
    )
}

export default BottomPart;

