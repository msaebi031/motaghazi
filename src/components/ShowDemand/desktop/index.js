// Import Mui 
import { Container } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2';
// Import Mui RightSide
import RightSide from "./RightSide";
// Import Mui Attention
import Attention from "./Attention";
// Import Mui LeftSide
import LeftSide from "./LeftSide";
// Import Mui MoreDetails
import MoreDetails from "./MoreDetails";
// Import React
import { Fragment } from "react";


const Desktop = () => {


    return (
        <Fragment>
            {/* Start Desktop To Size Desktop */}
            <Container maxWidth="xl">
                <Grid2 container spacing={2}>
                    <Grid2 item xs={7.7} lg={7.8}>
                        {/* Component RightSide*/}
                        <RightSide />
                        {/* Component MoreDetails*/}
                        <MoreDetails />
                        {/* Component Attention*/}
                        <Attention />
                    </Grid2>
                    <Grid2 item xs={4.3} lg={4.2}>
                        {/* Component LeftSide*/}
                        <LeftSide />
                    </Grid2>
                </Grid2>
            </Container>
            {/* Start Desktop To Size Desktop */}
        </Fragment>
    )
}

export default Desktop;