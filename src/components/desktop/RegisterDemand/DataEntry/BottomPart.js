import { SmsOutlined, Smartphone, WhatsApp, CheckBox, CheckBoxOutlineBlankTwoTone, Done } from "@mui/icons-material";
import { Box, OutlinedInput, Typography, Checkbox, FormControlLabel } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useState } from "react";

const BottomPart = ({ selectedValue, items }) => {


    //    const all = converter.toWords(13); // => “thirteen”



    // itemCheckbox
    const formItem = [
        { text: "انتشار شماره موبایل جهت تماس", icon: <Smartphone color="puper" fontSize="19px" /> },
        { text: "انتشار شماره موبایل جهت دریافت پیامک", icon: <SmsOutlined color="puper" fontSize="19px" /> },
        { text: "انتشار شماره موبایل جهت تماس با واتس اپ", icon: <WhatsApp color="puper" fontSize="19px" /> },
    ];




    // var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    // var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    // function inWords (num) {
    //     if ((num = num.toString()).length > 9) return 'overflow';
    //     n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    //     if (!n) return; var str = '';
    //     str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    //     str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    //     str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    //     str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    //     str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    //     return str;
    // }



    // $(document).ready(function () {
    //     var form = $("#form");

    //     var numLimit = 1000000000000;

    //     var numText = "";


    //     // dictionaries that store basic numeric values
    //     var ones = {
    //         0: "صفر",
    //         1: "یک",
    //         2: "دو",
    //         3: "سه",
    //         4: "چهار",
    //         5: "پنج",
    //         6: "شش",
    //         7: "هفت",
    //         8: "هشت",
    //         9: "نو",
    //     };


    //     var tens = {
    //         10: "ده",
    //         11: "یازده",
    //         12: "دوازده",
    //         13: "سیزده",
    //         14: "چهارده",
    //         15: "پانزده",
    //         16: "شانزده",
    //         17: "هفده",
    //         18: "هجده",
    //         19: "نوزده",
    //     };

    //     var prefixes = {
    //         2: "بیست",
    //         3: "سی",
    //         4: "چهل",
    //         5: "پنجاه",
    //         6: "شصت",
    //         7: "هفتاد",
    //         8: "هشتاد",
    //         9: "نود",
    //     };

    //     var suffixes = {
    //         1: "",
    //         2: "هزار",
    //         3: "میلیون",
    //         4: "میلیارد",
    //         5: "تریلیون",
    //     };


    //     form.submit(function (e) {
    //         e.preventDefault();

    //         numText = "";
    //         var num = $("#numInput").val();
    //         var finalNumText = convertNum(num);


    //         $("#changedNum").html("Converted Number :" + finalNumText);
    //     });


    //     function convertNum(num) {
    //         var adsNum = Math.ads(num);

    //         try {
    //             if (num > numLimit) {
    //                 throw "Number is too big. It must be below or equal to" + numLimit + " (1 Trillion). "
    //             }
    //         }
    //         catch (err) {
    //             alert(err);
    //             return "ERROR";
    //         }

    //         if (num.toString().inclides("-") && adsNum != 0) {
    //             numText += "negative "
    //         }


    //         if (adsNum in ones) {
    //             numText += ones[adsNum];
    //         } else if (adsNum < 100) {
    //             numText += twoDigitLessConvert(adsNum);
    //         } else {
    //             var numArray = splitNum(adsNum);

    //             let count = numArray.length;

    //             for (let i = 0; i < numArray.length; i++) {
    //                 if (numArray[i][0 !== "000"]) {
    //                     if (numArray[i][0].length == 3) {
    //                         numText += threeDigitConvert(parseInt(numArray[i]));
    //                         numText += " " + suffixes[count];
    //                     } else {
    //                         numText += twoDigitLessConvert(parseInt(numArray[i]));
    //                         numText += " " + suffixes[count];
    //                     }
    //                     count--;
    //                 }
    //                 else {
    //                     count--;
    //                 }

    //             }
    //         }


    //         return numText;
    //     }


    //     // /**
    //     //  * Corvert any three digit number into text
    //     //  * @param {Number to convert} num
    //     //  * /

    //     function threeDigitConvert(num) {
    //         var currentNumText = "";


    //         if (num == 0) {
    //             return "";
    //         }

    //         if (num < 100) {
    //             currentNumText += twoDigitLessConvert(num);
    //             return currentNumText;
    //         }


    //         currentNumText += ones[num.toString().charAt(0)];

    //         currentNumText += " hundred ";

    //         if (num.toString().substr(1) !== "00") {
    //             currentNumText += twoDigitLessConvert(parseInt(num.toString().substr(1)));
    //         }
    //     }

    //     function twoDigitLessConvert(num) {
    //         var currentNumText = "";


    //         if (num < 10) {
    //             return ones[num];
    //         }


    //         if (num in tens) {
    //             currentNumText += tens[num];
    //         } else {
    //             currentNumText += prefixes[num.toString().charAt(0)];

    //             if (nom.toString().charAt(1) !== "0") {
    //                 currentNumText += "-" + ones[num.toString().charAt(1)];
    //             }
    //         }
    //         return currentNumText;
    //     }

    //     function splitNum(num) {
    //         let numArray = [];
    //         var numString = num.toString();
    //         var count = 0;


    //         var tempArray = [];

    //         var singleDigit = numString.split("");

    //         var digits = singleDigit.length;

    //         for (var i = digits - i; i >= 0; i--) {
    //             tempArray[0] = singleDigit[i] + tempArray[0];
    //             count++;

    //             tempArray[0] = tempArray[0].replace("undefined", "");

    //             if (count % 3 == 0) {
    //                 numArray.unshift(tempArray);
    //                 tempArray = [];
    //             }
    //         }

    //         if (tempArray.length != 0) {
    //             numArray.unshift(tempArray);
    //         }

    //         return numArray;
    //     }
    // });
    // 
    // useStatte input

    const [budget, setBudget] = useState("");


    return (
        <Grid2 id="bottom-part" container spacing={3}>
            {/* box type of interaction with sellers */}
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

    )
}

export default BottomPart;

