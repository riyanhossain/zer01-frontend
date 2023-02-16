import Hero from "@/components/company/hero";
import Info from "@/components/company/info";
import Intro from "@/components/company/intro";
import Order from "@/components/company/order";
import Team from "@/components/company/team";
import React from "react";

export default function Company() {
    return (
        <React.Fragment>
            <Hero />

            <Intro />

            <Info />

            <Order />

            <Team />
        </React.Fragment>
    );
}
