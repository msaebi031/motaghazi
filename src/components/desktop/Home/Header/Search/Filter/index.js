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
  Save,
} from "@mui/icons-material";

// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { handleOpenCategory } from "../../../../../redux/category";
import { handleOpenFilter } from "../../../../../redux/filter";
// Import React
import { Fragment } from "react";
import { LoadingButton } from "@mui/lab";
// Import next-translate
import useTranslation from 'next-translate/useTranslation';
// Import Router
import { useRouter } from "next/router";
import { SetRouterCategory } from "../../../content/Category/utils";

const Filter = () => {
  const { t } = useTranslation("basic");
  // ======= Redux ======== //
  const { category, filter } = useSelector((state) => state);
  const dispatch = useDispatch();
  // ======= UseRouter ======== //
  const router = useRouter();

  const handleClearAll = () => {
    const pathname = router.asPath.split("/");
    router.replace(SetRouterCategory("all", pathname[2]), null, {
      scroll: false,
    });
    dispatch(handleOpenFilter());
  };

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
                {t("home.filter.filters")}
              </Button>

              <IconButton onClick={() => handleClearAll()}>
                <Typography component="span" variant="caption">
                  {t("home.filter.clear-all")}
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

            {filter.count ? (
              <Button
                variant="contained"
                color="success"
                fullWidth
                size="large"
                sx={{ color: "#fff", py: 2.5 }}
                className="down"
                onClick={() => dispatch(handleOpenFilter())}
              >
                {t("home.filter.view")} {filter.count} {t("home.filter.item")}
              </Button>
            ) : (
              <LoadingButton
                loading={true}
                variant="outlined"
                className="down"
                sx={{ p: 2 }}
                fullWidth
              >
                <Save />
              </LoadingButton>
            )}
          </Container>
        </DialogContent>
      </Dialog>
      {/* End Filter*/}
    </Fragment>
  );
};

export default Filter;
