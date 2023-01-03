// Import Mui
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  OutlinedInput,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// Import Mui Icons
import { ClearRounded, KeyboardArrowRightRounded } from "@mui/icons-material";
// Import React
import { Fragment, useState } from "react";

const Base = ({ all, open, handleClose, title, component }) => {

  // ======= Get Size ======== //
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const fullScreenMd = useMediaQuery(theme.breakpoints.up("md"));

  // UseState
  const [search, setSearch] = useState("");

  // ======= Handles ======== //
  // Handle Filtered
  const filtered = all.filter((entry) =>
    Object.values(entry).some(
      (val) => typeof val === "string" && val.includes(search)
    )
  );

  return (
    <Fragment>
      {/* Start Base */}
      <Dialog
        id="dialogCategoryLocation"
        fullScreen={fullScreen}
        open={open}
        onClose={() => handleClose()}
      >
        <DialogContent sx={{ minWidth: { md: "390px" } }}>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <Box
              sx={{
                backgroundImage: "linear-gradient(-90deg, #6449d9, #7e31b0)",
              }}
              className="GruopMob"
            >
              <Container maxWidth="sm">
                <Button
                  startIcon={<KeyboardArrowRightRounded />}
                  onClick={() => handleClose()}
                >
                  {title}
                </Button>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  placeholder={`${title} خود را جستجو کنید`}
                  color="success"
                  fullWidth
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Container>
            </Box>
            <Container maxWidth="sm">
              <Box className="boxGruopMob card" my={3}>
                {/* Start Search For If */}
                {!search ? (
                  fullScreen ? (
                    component
                  ) : (
                    ""
                  )
                ) : filtered.length > 0 ? (
                  filtered.map((item, index) => (
                    <Box className="groupList">
                      <Box className="d-flex">
                        <Typography component="span" variant="body1">
                          {item.name}
                        </Typography>
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Typography
                    component="p"
                    variant="subtitle2"
                    color="secondary"
                    p={2}
                  >
                    نتیجه ای پیدا نکردم ...
                  </Typography>
                )}
                {/* End Search For If */}
              </Box>
            </Container>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }} className="GruopWin">
            <IconButton
              onClick={() => handleClose()}
              aria-label="close"
              size="small"
            >
              <ClearRounded />
            </IconButton>
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder={`${title} خود را جستجو کنید`}
              color="success"
              fullWidth
              onChange={(e) => setSearch(e.target.value)}
            />
            <Box className="boxGruopWin" mt={0.1}>
              {/* Start Search For If */}
              {!search ? (
                fullScreenMd ? (
                  component
                ) : (
                  ""
                )
              ) : filtered.length > 0 ? (
                filtered.map((item, index) => (
                  <Box className="groupList">
                    <Box className="d-flex">
                      <Typography component="span" variant="body1">
                        {item.name}
                      </Typography>
                    </Box>
                  </Box>
                ))
              ) : (
                <Typography
                  component="p"
                  variant="subtitle2"
                  color="secondary"
                  p={2}
                >
                  نتیجه ای پیدا نکردم ...
                </Typography>
              )}
              {/* End Search For If */}
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
      {/* Start Base */}
    </Fragment>
  );
};

export default Base;
