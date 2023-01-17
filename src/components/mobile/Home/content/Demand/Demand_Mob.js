// Import Next
import Link from "next/link";

// Import Mui
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { PlaceOutlined, QueryBuilderOutlined } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";

// Import Utils
import { timeAgo } from "../../../../utils/ConvertTime";
import { statusColor } from "../../../../desktop/Home/content/Demand/Utils/ConfigColorDemand";
// Import next-translate
import useTranslation from 'next-translate/useTranslation';

const Demand_Mob = ({ demand, icon, local }) => {
  const { t } = useTranslation("basic");
  return (
    <Grid2 container spacing={2} pt={2.5} px={0}>
      {/* Start Card Demand Size xs,sm */}
      {demand.data.map((items, index) => {
        let title = items.title.replaceAll(/\s+/g, "-");
        let status = statusColor(items.type);
        let find = local.find((e) => e.code == items.code);
        return (
          <Grid2 key={index} item xs={12} className="p-relative" id="demand">
            <Link scroll={false} href={`/r/${items.code}/${title}`} title={items.title}>
            {/* <a href={`/r/${items.code}/${title}`}> */}

              {status ? (
                <Box
                  component="div"
                  className="status"
                  sx={{
                    backgroundColor: `${status.color} !important`,
                    "::before": {
                      borderLeftColor: `${status.color} !important`,
                    },
                    "::after": {
                      borderRightColor: `${status.color} !important`,
                    },
                  }}
                >
                  {status.text}
                </Box>
              ) : (
                ""
              )}
              <Card className="card" id="demandMobile">
                <Grid2
                  container
                  className="justify-between"
                  p={0}
                  sx={{ flexWrap: "nowrap" }}
                >
                  <Grid2 item xs={8} sm={10}>
                    <CardContent className="cardContent">
                      <Typography
                        component="div"
                        className="titleCard"
                        color={find ? "puper.main" : "secondary.dark"}
                      >
                        {items.title}
                      </Typography>
                      <Box
                        className="locationCard d-flex align-center"
                        py={1.5}
                      >
                        <PlaceOutlined color="secondary" />
                        <Typography
                          className="locationCard"
                          component="div"
                          color="secondary.main"
                        >
                          {items.location[0].neighbourhood?.name ??
                            items.location[0].city.name}
                        </Typography>
                      </Box>

                      <Divider />
                      <Box className=" d-flex align-center" py={1.3}>
                        <Box className="infCard d-flex align-center flex_1">
                          <QueryBuilderOutlined color="success" />
                          <Typography
                            className="locationCard"
                            component="div"
                            color="success.main"
                          >
                            {timeAgo(items.releaseDate)}
                          </Typography>
                        </Box>
                        <Box className="infCard">
                          <Typography
                            className="locationCard"
                            component="div"
                            color="successLight.main"
                          >
                            {items.budget !== 0
                              ? `${items.budget} ${t("home.demand.toman")}`
                              : t("home.demand.adaptive")}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Grid2>
                  <Grid2 item>
                    <Box className="imgNoMobileDemand">
                      {icon ?? <Box component="img" src="/imgs/logo.svg" />}
                    </Box>
                  </Grid2>
                </Grid2>
              </Card>
            {/* </a> */}
            </Link>
          </Grid2>
        );
      })}
      {/* End Card Demand Size xs,sm */}
    </Grid2>
  );
};

export default Demand_Mob;
