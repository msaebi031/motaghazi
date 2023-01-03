//Import React
import { Fragment, useState } from "react";

// Import Mui
import { Box, Button, CircularProgress } from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { addDataDemand, changeCount } from "../../../redux/demand";

// Import Utils
import http from "../../../utils/ConfigDefaults";
import Demand_Win from "./Demand_Win";
import Demand_Mob from "./Demand_Mob";

// Import InfiniteScroll
import InfiniteScroll from "react-infinite-scroller";

const Demands = () => {
  // ======= Redux ======== //
  const { demand } = useSelector((state) => state);
  const dispatch = useDispatch();

  // ======= useState ======== //
  const [loading, setLoading] = useState(false);

  // ======= Get Size ======== //
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const fullScreenMd = useMediaQuery(theme.breakpoints.up("md"));

  // ======= handels ======== //
  //  handle for Add demandand
  const handleAddDemend = () => {
    setLoading(true);
    http
      .get(
        `/requirement/requirements?limit=24&sort=createDate&sortDirection=-1&skip=${demand.count}`
      )
      .then(async (res) => {
        await dispatch(addDataDemand(res.data.requirements));
        const newCount = demand.count + 24;
        await dispatch(changeCount(newCount));
        setLoading(false);
      });
  };

  return (
    <Fragment>
      {/* Start Demand and if For Windows */}
      {fullScreenMd ? <Demand_Win demand={demand} /> : ""}
      {/* End Demand and if For Windows */}

      {/* Start Demand and if For Mobile */}
      {fullScreen ? (
        <InfiniteScroll
          pageStart={0}
          loadMore={handleAddDemend}
          hasMore={true}
          loader={
            <Box className="text-center w-100" py={2}>
              <CircularProgress color="puper" fontSize="small" />
            </Box>
          }
        >
          <Demand_Mob demand={demand} />
        </InfiniteScroll>
      ) : (
        ""
      )}

      {/* End Demand and if For Mobile */}

      {/* Start Add Demand Button */}
      <Box
        className="text-center w-100"
        py={4}
        display={{ xs: "none", md: "block" }}
      >
        {loading ? (
          <CircularProgress color="puper" />
        ) : (
          <Button
            variant="contained"
            startIcon={<AddRounded color="puperTheme" />}
            color="puperTheme"
            className="btnPlus"
            onClick={() => handleAddDemend()}
          >
            نمایش تقاضای بیشتر
          </Button>
        )}
      </Box>
      {/* End Add Demand Button */}
    </Fragment>
  );
};

export default Demands;