import React from "react";
import Calculator from "./tabs/calculator";
import Join from "./tabs/join";
import Postions from "./tabs/postions";

export default function Tabs() {
    const [activeTab, setActiveTab] = React.useState("join");

    return (
        <>
            <section className=" py-8 lg:py-12 container mx-auto px-4 lg:px-8 xl:px-20">
                <div className="flex items-center gap-x-10">
                    <button
                        className={`font-inter  ${activeTab === "join" ? "font-semibold text-primary" : "text-[#434656]"}`}
                        onClick={() => setActiveTab("join")}
                    >
                        Join Us
                    </button>

                    <button
                        className={`font-inter ${activeTab === "postions" ? "font-semibold text-primary" : "text-[#434656]"}`}
                        onClick={() => setActiveTab("postions")}
                    >
                        Postions
                    </button>

                    <button
                        className={`font-inter ${activeTab === "calculator" ? "font-semibold text-primary" : "text-[#434656]"}`}
                        onClick={() => setActiveTab("calculator")}
                    >
                        Calculator
                    </button>
                </div>
                <div className="mt-2 h-0.5 bg-[#D9DBE9] relative">
                    <div
                        className={`absolute  h-full transition-all duration-150 ease-linear bg-primary ${
                            activeTab === "join" ? "w-[60px] left-0" : activeTab === "postions" ? "w-[80px] left-[90px]" : "w-[85px] left-[200px]"
                        }`}
                    ></div>
                </div>
            </section>
            {activeTab === "join" ? <Join /> : activeTab === "postions" ? <Postions /> : <Calculator />}
        </>
    );
}
