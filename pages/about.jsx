import Codeofethics from "@/components/about/codeofethics";
import Companies from "@/components/about/companies";
import Freelancers from "@/components/about/freelancers";
import Hero from "@/components/about/hero";
import Intro from "@/components/about/Intro";
import React from "react";

export default function About() {
    return (
        <React.Fragment>
            <Hero />

            <Intro />

            <Companies />

            <Freelancers />

            <Codeofethics />
        </React.Fragment>
    );
}
