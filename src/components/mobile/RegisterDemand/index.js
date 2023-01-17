// Import Mui
import { Container } from "@mui/material";
// Import React
import { Fragment } from "react";
// Import DataEntry
import DataEntry from "../../desktop/RegisterDemand/DataEntry";
// Import MoreDetails
import MoreDetails from "../../desktop/RegisterDemand/MoreDetails";
// Import BtnStore
import BtnStore from "../../desktop/RegisterDemand/BtnStore";


const Mobile = () => {

    return (
        <Fragment>
            {/* Start Mobile To Size Mobile */}
            <Container maxWidth="psm">
                {/* Component DataEntry*/}
                <DataEntry />
                {/* Component MoreDetails*/}
                <MoreDetails />
                {/* Component BtnStore*/}
                <BtnStore />
            </Container>
            {/* End Mobile To Size Mobile */}
        </Fragment>
    )
}

export default Mobile;