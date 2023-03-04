import React from "react";
import Details from "./positions/details";
import Positionsgrid from "./positions/positionsgrid";

export default function Postions() {
    const [detailsMode, setDetailsMode] = React.useState(true);
    return detailsMode ? <Details /> : <Positionsgrid />;
}
