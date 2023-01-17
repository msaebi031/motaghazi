// Import Mui Icon
import { Clear, Done } from "@mui/icons-material";
// Import Mui
import { Box, Button, IconButton, ListItemButton, Modal, OutlinedInput, TextareaAutosize, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
// Import React
import { Fragment, useState } from "react";
// Import BottomPart
import BottomPart from "./BottomPart";


const InputAndBtn = () => {

    // ======= UseEstate ======== //
    const [title, setTitle] = useState("");
    const [searchModal, setSearchModal] = useState("");
    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [selectedValue, setSelectedValue] = useState(defaultText);

    // ======= Items selectCondition ======== // 
    const items = [{ name: 'نو' }, { name: 'در حد نو' }, { name: 'کار کرده' }, { name: 'نیاز به تعمیر' }];


    // ======= Const Search ======== // 
    const filterItems = items.filter(items => items.name.includes(searchModal));

    // ======= defaultText ======== // 
    var defaultText = "انتخاب کنید";


    // ======= Handlers ======== // 
    // handle open Modal
    const handleClickOpen = () => {
        setOpen(true);
    };

    // handle List Item
    const handleListItemClick = (value) => {
        handleValueOnClose(value);
    };

    // handle ValueOnClose
    const handleValueOnClose = (value) => {
        setSelectedValue(value);
        setOpen(false);
    };


    // handle OnClose
    const handleClose = () => {
        handleValueOnClose(selectedValue);
    };




    return (
        <Fragment>
            {/* Start InputAndBtn*/}
            <Grid2 id="input-andbtn" container spacing={3} mt={{ xs: 3, md: 4.5 }}>
                <Grid2 item xs={12} md={6}>
                    <Box>
                        <Box className="d-flex align-center justify-between">
                            <Typography color="dark.light" fontSize="12.5px" mb="13px" component="p" variant="body2">
                                عنوان تقاضا خود را وارد نمایید (حداقل 6 حرف)*
                            </Typography>
                            {title.length >= 1 ? (
                                <Done className="icon-input" color="successLight" />
                            ) : ""}
                        </Box>
                        <OutlinedInput fullWidth value={title} onChange={e => setTitle(e.target.value)} name="title" type="text" color="light" className="style-input" />
                    </Box>

                    <Box mt={3.3}>
                        <Typography color="dark.light" fontSize="12.5px" mb="13px" component="p" variant="body2">
                            موقعیت خود را انتخاب نمایید*
                        </Typography>
                        <Button className="style-btn"   >انتخاب کنید</Button>
                    </Box>
                </Grid2>

                <Grid2 item xs={12} md={6}>
                    <Box>
                        <Box className="d-flex align-center justify-between">
                            <Typography color="dark.light" fontSize="12.5px" component="p" variant="body2">
                                شرح تقاضای خود را وارد نمایید*
                            </Typography>
                            {description.length >= 1 ? (
                                <Done className="icon-input" color="successLight" />
                            ) : ""}
                        </Box>
                        <TextareaAutosize
                            value={description} onChange={e => setDescription(e.target.value)}

                            required
                            name="description"
                            className="text-box__textarea"
                            aria-label="empty textarea"
                        />
                    </Box>

                    <Box mt={2.5}>
                        <Typography mb="13px" color="dark.light" fontSize="12.5px" component="p" variant="body2">
                            وضعیت کالای درخواستی خود را انتخاب نمایید
                        </Typography>
                        <Button className="style-btn" onClick={handleClickOpen}>
                            {selectedValue}
                        </Button>
                        <Modal
                            id="modal-condition"
                            sx={{ display: { xs: "none", md: "block" } }}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description">
                            <Box className="modal-condition">
                                <Box border="1px solid #eee" borderRadius="5px">
                                    <OutlinedInput
                                        onChange={e => setSearchModal(e.target.value)}
                                        className="input-search-modal"
                                        name="search"
                                        value={searchModal}
                                        type="search"

                                        placeholder="جستجو کنید"
                                    />
                                    {filterItems ? (
                                        <Box >
                                            {filterItems.map((filter, index) => (
                                                <ListItemButton className="list-button-modal" onClick={() => handleListItemClick(filter.name)} key={index}>
                                                    {filter.name}
                                                </ListItemButton>
                                            ))}
                                        </Box>
                                    ) : (
                                        <Box>
                                            {items.map((item, index) => (
                                                <ListItemButton className="list-button-modal" onClick={() => handleListItemClick(item.name)} key={index}>
                                                    {item.name}
                                                </ListItemButton>
                                            ))}
                                        </Box>
                                    )}
                                </Box>
                                <IconButton className="modal-condition-btn" onClick={handleClose} aria-label="delete" size="small">
                                    <Clear color="light" />
                                </IconButton>
                            </Box>
                        </Modal>
                    </Box>
                </Grid2>
            </Grid2>
            {/* Component BottomPart*/}
            <BottomPart items={items} selectedValue={selectedValue} />
            {/* End InputAndBtn*/}
        </Fragment>
    )
}
export default InputAndBtn;

