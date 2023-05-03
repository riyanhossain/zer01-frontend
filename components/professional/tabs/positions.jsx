import React from "react";
import Details from "./positions/details";
import Positionsgrid from "./positions/positionsgrid";

export default function Positions() {
    const [detailsMode, setDetailsMode] = React.useState(false);
    const [positionId, setPositionId] = React.useState(null);
    return detailsMode ? (
        <Details setDetailsMode={setDetailsMode} setPositionId={setPositionId} positionId={positionId} />
    ) : (
        <Positionsgrid setDetailsMode={setDetailsMode} setPositionId={setPositionId} />
    );
}
