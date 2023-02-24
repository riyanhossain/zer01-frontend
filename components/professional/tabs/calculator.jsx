import React from "react";
import Calculationofcosts from "./calculator/calculationofcosts";
import Intro from "./calculator/intro";

export default function Calculator() {
    return (
        <React.Fragment>
            <Intro />

            <Calculationofcosts />
        </React.Fragment>
    );
}
