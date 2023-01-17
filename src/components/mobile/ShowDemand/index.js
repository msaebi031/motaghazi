// Import Mui
import { Container, Typography } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2';
// Import BtnModal
import BtnModal from "./BtnModal";
// Import Attention
import Attention from "../../desktop/ShowDemand/Attention";
// Import React
import { Fragment } from "react";
// Import ShareBox
import ShareBox from "../../desktop/ShowDemand/ShareBox";
// Import Demand_Information
import Demand_Information from "../../desktop/ShowDemand/Demand_Information";



const Mobile = () => {
    return (
        <Fragment>
            {/* Start Mobile To Size Mobile */}
            <Container maxWidth="psm">
                <Grid2 container spacing={2}>
                    <Grid2 item xs={12}>
                        {/* Component Information and MoreDetails*/}
                        <Demand_Information />
                        {/* Component BtnModal */}
                        <BtnModal />
                        {/* Component Attention */}
                        <Attention />
                    </Grid2>
                    <Grid2 item xs={12}>
                        {/*Component LeftSide */}
                        <ShareBox />
                    </Grid2>
                </Grid2>
            </Container>
            {/* End Mobile To Size Mobile */}
        </Fragment>
    )
}

export default Mobile;