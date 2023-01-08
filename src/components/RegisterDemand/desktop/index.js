import { Container, useMediaQuery, useTheme } from "@mui/material";
import { Fragment } from "react";
import BoxNew from "./BoxNew";
import BoxGrouping from "./BoxGrouping";
import DataEntry from "./DataEntry";
import { Box } from "@mui/system";
import MoreDetails from "./MoreDetails";
import BtnStore from "./BtnStore";


const Desktop = () => {

 
    return (
        <Fragment>
            <Container maxWidth="xl">
                <BoxNew />
                <BoxGrouping />
                <DataEntry />
                <MoreDetails/>
                <BtnStore/>
            </Container>
        </Fragment>
    )
}

export default Desktop;