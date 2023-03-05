import Activepositions from "@/components/dashboard/positions/activepositions";
import React from "react";

export default function Positions() {
    const [currentTab, setCurrentTab] = React.useState("active");
    return (
        <section className="p-5">
            {/* header */}
            <div className="bg-[#D9D9D9] bg-opacity-30 px-4 py-6 flex items-center justify-between">
                <div className="space-x-4">
                    <button className="text-white font-semibold leading-[29px] font-inter px-6 py-2 bg-primary hover:bg-opacity-80 active:bg-opacity-90">
                        Positions
                    </button>
                    <button className="opacity-30 hover:opacity-100 text-white font-semibold leading-[29px] font-inter px-6 py-2 bg-addgray hover:bg-primary  active:bg-opacity-90">
                        Orders
                    </button>
                </div>

                <div>
                    <button className="opacity-30 hover:opacity-100 text-white font-semibold leading-[29px] font-inter px-6 py-2 bg-addgray hover:bg-primary  active:bg-opacity-90">
                        Logout
                    </button>
                </div>
            </div>

            {/* second header */}
            <div className="px-4 py-6 flex items-center justify-between">
                <div className="space-x-4">
                    <button className="text-white font-semibold leading-[29px] font-inter px-6 py-2 bg-primary hover:bg-opacity-80 active:bg-opacity-90">
                        Active/Closed Positions
                    </button>
                    <button className="opacity-30 hover:opacity-100 text-white font-semibold leading-[29px] font-inter px-6 py-2 bg-addgray hover:bg-primary  active:bg-opacity-90">
                        Inactive positions
                    </button>
                </div>

                <div>
                    <button className="opacity-30 hover:opacity-100 text-white font-semibold leading-[29px] font-inter px-6 py-2 bg-addgray hover:bg-primary  active:bg-opacity-90">
                        Add new job
                    </button>
                </div>
            </div>

            {/* tabs */}
            <Activepositions />

        </section>
    );
}
