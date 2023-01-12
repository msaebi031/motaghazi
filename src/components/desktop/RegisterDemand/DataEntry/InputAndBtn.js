import { Clear, Done } from "@mui/icons-material";
import { Button, IconButton, ListItemButton, Modal, OutlinedInput, TextareaAutosize, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system"
import { Fragment, useState } from "react";
import BottomPart from "./BottomPart";


const InputAndBtn = () => {

    // useState Input
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");



    //   selectCondition
    const items = [{ name: 'نو' }, { name: 'در حد نو' }, { name: 'کار کرده' }, { name: 'نیاز به تعمیر' }];


    // searchmodal
    const [searchModal, setSearchModal] = useState("");
    const filterItems = items.filter(items => items.name.includes(searchModal));

    const [open, setOpen] = useState(false);
    var defaultText = "انتخاب کنید";
    const [selectedValue, setSelectedValue] = useState(defaultText);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleListItemClick = (value) => {
        handleValueOnClose(value);
    };

    const handleValueOnClose = (value) => {
        setSelectedValue(value);
        setOpen(false);
    };


    const handleClose = () => {
        handleValueOnClose(selectedValue);
    };




    return (
        <Fragment>
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
                        <OutlinedInput value={title} onChange={e => setTitle(e.target.value)} name="title" type="text" color="light" className="style-input" fullWidth />
                    </Box>

                    <Box mt={3.3}>
                        <Typography color="dark.light" fontSize="12.5px" mb="13px" component="p" variant="body2">
                            موقعیت خود را انتخاب نمایید*
                        </Typography>
                        <Button className="style-btn" fullWidth >انتخاب کنید</Button>
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
                            fullWidth
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
                        <Button className="style-btn" fullWidth onClick={handleClickOpen}>
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
                                        fullWidth
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
            <BottomPart items={items} selectedValue={selectedValue} />
        </Fragment>
    )
}
export default InputAndBtn;

