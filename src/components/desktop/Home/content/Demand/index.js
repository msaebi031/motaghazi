//Import React
import { Fragment, useEffect, useState } from "react";

// Import Mui
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { AddRounded, ErrorRounded } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { addDataDemand, changeCount } from "../../../../redux/demand";

// Import Utils
import http from "../../../../utils/ConfigDefaults";
import Demand_Win from "./Demand_Win";
import Demand_Mob from "../../../../mobile/Home/content/Demand/Demand_Mob";

// Import InfiniteScroll
import InfiniteScroll from "react-infinite-scroller";
// Import next-i18next
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Demands = () => {
  const { t } = useTranslation("basic");
  const router = useRouter();
  // ======= Redux ======== //
  const { demand, location } = useSelector((state) => state);
  const dispatch = useDispatch();

  // ======= useState ======== //
  const [loading, setLoading] = useState(false);
  const [localStorages, setLocalStorages] = useState([]);

  // ======= Get Size ======== //
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const fullScreenMd = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("historyCard"));
    setLocalStorages(local);
  }, []);

  // ======= handels ======== //
  //  handle for Add demandand
  const handleAddDemend = () => {
    setLoading(true);
    const { location, search, category } = router.query;
    const locations =
      location && location != "iran" ? `&location=${location}` : "";
    const categorys = category ? `&category=${category}` : "";
    const searchs = search ? `&searchType=title&search=${search}` : "";
    http
      .get(
        `/requirement/requirements?limit=24&sort=createDate&sortDirection=-1&skip=${demand.count}${searchs}${locations}${categorys}`
      )
      .then(async (res) => {
        await dispatch(addDataDemand(res.data.requirements));
        const newCount = demand.count + 24;
        await dispatch(changeCount(newCount));
        setLoading(false);
      });
  };

  if (demand.data.length <= 0) {
    return (
      <Box p={2} className="notFoundDemand">
        <ErrorRounded />
        <Typography
          component="span"
          color="secondary.dark"
          variant="p"
          pr={6}
          fontSize={{ xs: 14, sm: 16 }}
        >
          {t("home.demand.notFound")}
        </Typography>
      </Box>
    );
  }

  if (demand.loading)
    return (
      <Box
        className="text-center w-100"
        py={4}
        display={{ xs: "none", md: "block" }}
      >
        <CircularProgress color="puper" />
      </Box>
    );

  return (
    <Fragment>
      {/* Start Demand and if For Windows */}
      {fullScreenMd ? (
        <Demand_Win demand={demand} icon={demand.icon} local={localStorages} />
      ) : (
        ""
      )}
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
          <Demand_Mob
            demand={demand}
            icon={demand.icon}
            local={localStorages}
          />
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
            {t("home.demand.moreDemand")}{" "}
          </Button>
        )}
      </Box>
      {/* End Add Demand Button */}
    </Fragment>
  );
};

export default Demands;
