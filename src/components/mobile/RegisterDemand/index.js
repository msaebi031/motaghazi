import { Container } from "@mui/material";
import { Fragment } from "react";
import DataEntry from "../../desktop/RegisterDemand/DataEntry";
import MoreDetails from "../../desktop/RegisterDemand/MoreDetails";
import BtnStore from "../../desktop/RegisterDemand/BtnStore";


const Mobile = () => {


    return (
        <Fragment>
            <Container maxWidth="psm">
                <DataEntry />
                <MoreDetails />
                <BtnStore />
            </Container>
        </Fragment>
    )
}

export default Mobile;