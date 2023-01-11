// Import Mui
import {
  Box,
  Button,
  Container,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
// Import Utils
import Selector from "../Utils";
// Import Mui Icons
import {
  SearchRounded,
  WidgetsOutlined,
  FilterAltOutlined,
} from "@mui/icons-material";
// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { handleOpenCategory } from "../../../../redux/category";
import { handleOpenLocation } from "../../../../redux/location";
import { handleOpenFilter } from "../../../../redux/filter";
// Import React
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
// Import next-i18next
import { useTranslation } from "next-i18next";

const Search_Child = () => {
  const { t } = useTranslation("basic");
  const [search, setSearch] = useState("");
  const router = useRouter();
  // ======= Redux ======== //
  const dispatch = useDispatch();
  const { category, location, filter } = useSelector((state) => state);

  const handleSubmit = () => {
    router.replace(
      {
        query: { ...router.query, search },
      },
      null,
      {
        scroll: false,
      }
    );
  };

  return (
    <Fragment>
      {/*Start Search_Child */}
      <Container maxWidth="xl">
        <Box
          mt={2.5}
          className="card"
          id="search"
          display={{ xs: "none", md: "block" }}
        >
          <Box component="form" noValidate className="w-100">
            <Grid2 container spacing={1.5} className="align-center">
              <Grid2 item md={4.7}>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  placeholder={t("home.search.search-among-all-requests")}
                  fullWidth
                  color="success"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Grid2>
              <Grid2
                item
                sm={5}
                md={3}
                onClick={() => dispatch(handleOpenLocation())}
              >
                <Selector
                  name={t("home.search.location")}
                  dic={location.label}
                />
              </Grid2>
              <Grid2 item md={3} onClick={() => dispatch(handleOpenCategory())}>
                <Selector
                  name={t("home.search.grouping")}
                  dic={category.label}
                />
              </Grid2>
              <Grid2 item md={1.3}>
                <Button
                  sx={{ py: 1.5 }}
                  variant="contained"
                  endIcon={<SearchRounded />}
                  color="successLight"
                  onClick={() => handleSubmit()}
                >
                  {t("home.search.search")}
                </Button>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="psm">
        <Grid2
          container
          spacing={2}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Grid2 item xs={6} mt={2}>
            <Box
              className="cardSearch d-flex align-center justify-center"
              py={2}
              px={1}
              sx={
                !filter.count > 0
                  ? {
                      boxShadow: "0 0 18px rgb(159 171 180 / 20%) !important",
                      backgroundColor: "#fbfbfb !important",
                    }
                  : { boxShadow: "0 0 18px rgb(159 171 180 / 60%)" }
              }
              onClick={() =>
                filter.count > 0 ? dispatch(handleOpenFilter()) : ""
              }
            >
              <FilterAltOutlined fontSize="small" />
              <Typography
                component="span"
                variant="caption"
                color="secondary.dark"
                pr={1}
              >
                {!filter.count > 0
                  ? t("home.search.filters")
                  : t("home.search.filtersAcase")}
              </Typography>
            </Box>
          </Grid2>

          <Grid2 item xs={6} mt={2}>
            <Box
              className="cardSearch d-flex align-center justify-center"
              py={2}
              px={1}
              onClick={() => dispatch(handleOpenCategory())}
            >
              <WidgetsOutlined fontSize="small" />
              <Typography
                component="span"
                variant="caption"
                color="secondary.dark"
                pr={1}
              >
                {category.label}
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
      {/*End Search_Child */}
    </Fragment>
  );
};

export default Search_Child;
