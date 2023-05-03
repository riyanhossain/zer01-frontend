import dynamic from "next/dynamic";
import React from "react";

const Hero = dynamic(() => import("../components/home/hero"));
const Latest = dynamic(() => import("../components/home/latest"));
const About = dynamic(() => import("../components/home/about"));
const Professional = dynamic(() => import("../components/home/professionals"));
const Companies = dynamic(() => import("../components/home/companies"));
const Contact = dynamic(() => import("../components/home/contact"));

export default function Home() {
    return (
        <React.Fragment>
            <main>
                <Hero />

                <Latest />

                <About />

                <Professional />

                <Companies />

                <Contact />
            </main>
        </React.Fragment>
    );
}
