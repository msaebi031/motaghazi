// Import Next
import Link from "next/link";

// Import Mui
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { PlaceOutlined, QueryBuilderOutlined } from "@mui/icons-material";

// Import Utils
import { timeAgo } from "../../../utils/ConvertTime";
import { statusColor } from "./Utils/ConfigColorDemand";

const Demand_Win = ({ demand }) => {
  return (
    <Grid2 container spacing={2} pt={2.5} px={0}>
      {/* Start Card Demand Size md,lg */}
      {demand.data.map((item, index) => {
        let title = item.title.replaceAll(/\s+/g, "-");
        let status = statusColor(item.type);
        return (
          <Grid2
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            className="p-relative"
            id="demand"
          >
            <Link href={`/r/${item.code}/${title}`} title={item.title}>
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
              <Card className="card">
                <CardMedia component="img" image="/imgs/noImgCard.png" />
                <CardContent className="cardContent">
                  <Typography
                    component="div"
                    className="titleCard"
                    color="secondary.dark"
                  >
                    {item.title}
                  </Typography>
                  <Box className="locationCard d-flex align-center" py={2}>
                    <PlaceOutlined color="secondary" />
                    <Typography
                      className="locationCard"
                      component="div"
                      color="secondary.main"
                    >
                      {item.location[0].neighbourhood?.name ??
                        item.location[0].city.name}
                    </Typography>
                  </Box>

                  <Divider />
                  <Box className=" d-flex align-center" py={1.7}>
                    <Box className="infCard d-flex align-center flex_1">
                      <QueryBuilderOutlined color="success" />
                      <Typography
                        className="locationCard"
                        component="div"
                        color="success.main"
                      >
                        {timeAgo(item.releaseDate)}
                      </Typography>
                    </Box>
                    <Box className="infCard">
                      <Typography
                        className="locationCard"
                        component="div"
                        color="successLight.main"
                      >
                        {item.budget !== 0 ? `${item.budget} تومان` : "توافقی"}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid2>
        );
      })}
      {/* End Card Demand Size md,lg */}
    </Grid2>
  );
};

export default Demand_Win;
