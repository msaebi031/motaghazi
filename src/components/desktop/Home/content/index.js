// Import Mui
import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Import Component
import Category from "./Category";
import Demands from "./Demand";
import Swipers from "./Swiper";

const Content = () => {
  // ======= Get Size ======== //
  const theme = useTheme();
  const fullScreenMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container sx={{ maxWidth: { sm: "psm", md: "xl" } }}>
      <Grid2 container pt={{ xs: 0, md: 2.5 }} spacing={3}>
        {/* Start Grid category */}
        <Grid2 item md={3.5} className="stickyCategory">
          {fullScreenMd ? <Category /> : ""}
        </Grid2>
        {/* End Grid category */}
        {/* Start Grid Swiper , Demand */}
        <Grid2 xs={12} md={8.5}>
          <Swipers />
          <Demands />
        </Grid2>
        {/* Demand Grid Swiper , Demand */}
      </Grid2>
    </Container>
  );
};

export default Content;
