import { UserContext } from "@/context/userContext";
import React from "react";
import Calculator from "./tabs/calculator";
import Join from "./tabs/join";
import Positions from "./tabs/positions";

export default function Tabs() {
    const {
        state: { activeTab },
        dispatch,
    } = React.useContext(UserContext);

    return (
        <>
            <section className=" py-8 lg:py-12 container mx-auto px-4 lg:px-8 xl:px-20">
                <div className="flex items-center gap-x-10">
                    <button
                        className={`font-inter  ${activeTab === "join" ? "font-semibold text-primary" : "text-[#434656]"}`}
                        onClick={() => dispatch({ type: "SET_ACTIVE_TAB", payload: "join" })}
                    >
                        Join Us
                    </button>

                    <button
                        className={`font-inter ${activeTab === "positions" ? "font-semibold text-primary" : "text-[#434656]"}`}
                        onClick={() => dispatch({ type: "SET_ACTIVE_TAB", payload: "positions" })}
                    >
                        Positions
                    </button>

                    <button
                        className={`font-inter ${activeTab === "calculator" ? "font-semibold text-primary" : "text-[#434656]"}`}
                        onClick={() => dispatch({ type: "SET_ACTIVE_TAB", payload: "calculator" })}
                    >
                        Calculator
                    </button>
                </div>
                <div className="mt-2 h-0.5 bg-[#D9DBE9] relative">
                    <div
                        className={`absolute  h-full transition-all duration-150 ease-linear bg-primary ${
                            activeTab === "join" ? "w-[60px] left-0" : activeTab === "positions" ? "w-[80px] left-[90px]" : "w-[85px] left-[200px]"
                        }`}
                    ></div>
                </div>
            </section>
            {activeTab === "join" ? <Join /> : activeTab === "positions" ? <Positions /> : <Calculator />}
        </>
    );
}
