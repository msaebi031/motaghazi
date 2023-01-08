import { Container } from "@mui/material";
import { Fragment } from "react";
import DataEntry from "../desktop/DataEntry";
import MoreDetails from "../desktop/MoreDetails";
import BtnStore from "../desktop/BtnStore";


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