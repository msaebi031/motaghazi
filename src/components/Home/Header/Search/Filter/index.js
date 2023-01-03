// Import Mui
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
// Import Mui Icons
import {
  KeyboardArrowRightRounded,
  FilterAltOutlined,
  FileDownloadDoneRounded,
  RemoveRounded,
} from "@mui/icons-material";
// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { handleOpenCategory } from "../../../../redux/category";
import { handleOpenFilter } from "../../../../redux/filter";
// Import React
import { Fragment } from "react";


const Filter = () => {

  
  // ======= Redux ======== //
  const { category, filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Fragment>
      {/* Start Filter*/}
    <Dialog
      id="dialogCategoryLocation"
      fullScreen
      open={filter.open}
      onClose={() => dispatch(handleOpenFilter())}
    >
      <DialogContent>
        <Box
          sx={{
            backgroundImage: "linear-gradient(-90deg, #6449d9, #7e31b0)",
          }}
          className="GruopMob"
          pb={2}
        >
          <Container maxWidth="sm" className="d-flex justify-between">
            <Button
              startIcon={<KeyboardArrowRightRounded />}
              onClick={() => dispatch(handleOpenFilter())}
            >
              فیلتر ها
            </Button>

            <IconButton>
              <Typography component="span" variant="caption">
                پاک کردن همه
              </Typography>
              <FilterAltOutlined />
            </IconButton>
          </Container>
        </Box>

        <Container maxWidth="sm">
          <Box className="boxGruopMob card" my={3} p={2}>
            <Box
              className="d-flex align-center"
              onClick={() => dispatch(handleOpenCategory())}
            >
              <FileDownloadDoneRounded color="successLight" />
              <Typography
                component="span"
                variant="subtitle2"
                color="secondary.dark"
                pr={1}
                className="flex_1"
              >
                {category.label}
              </Typography>
              <RemoveRounded color="puperTheme" fontSize="large" />
            </Box>
          </Box>

          <Button
            variant="contained"
            color="success"
            fullWidth
            size="large"
            sx={{ color: "#fff", py: 2.5 }}
            className="down"
            onClick={() => dispatch(handleOpenFilter())}
          >
            مشاهده 1200 ایتم
          </Button>
        </Container>
      </DialogContent>
    </Dialog>
    {/* End Filter*/}
    </Fragment>
  );
};

export default Filter;
