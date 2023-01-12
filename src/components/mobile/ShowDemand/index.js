// Import Mui
import { Container, Typography } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2';
// Import RightSide
import RightSide from "../../desktop/ShowDemand/RightSide";
// Import LeftSide
import LeftSide from "./LeftSide";
// Import BtnModal
import BtnModal from "./BtnModal";
// Import Attention
import Attention from "../../desktop/ShowDemand/Attention";
// Import MoreDetails
import MoreDetails from "../../desktop/ShowDemand/MoreDetails";
// Import React
import { Fragment } from "react";



const Mobile = () => {


    return (
        <Fragment>
            {/* Start Mobile To Size Mobile */}
            <Container maxWidth="psm">
                <Grid2 container spacing={2}>
                    <Grid2 item xs={12}>
                        {/* Component RightSide */}
                        <RightSide />
                        {/* Component MoreDetails */}
                        <MoreDetails />
                        {/* Component BtnModal */}
                        <BtnModal />
                        {/* Component Attention */}
                        <Attention />
                    </Grid2>
                    <Grid2 item xs={12}>
                        {/*Component LeftSide */}
                        <LeftSide />
                    </Grid2>
                </Grid2>
            </Container>
            {/* End Mobile To Size Mobile */}
        </Fragment>
    )
}

export default Mobile;