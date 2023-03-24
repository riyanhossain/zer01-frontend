import Activepositions from "@/components/dashboard/positions/activepositions";
import { UserContext } from "@/context/userContext";
import useAuthRoute from "@/lib/hooks/useAuthRoute";
import React from "react";
import { useRouter } from "next/router";
import Inactivepositions from "@/components/dashboard/positions/inactivepositions";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx/xlsx.mjs";
import { convert } from "html-to-text";

export default function Positions() {
    const {
        state: { currentTab, xlsx },
        dispatch,
    } = React.useContext(UserContext);

    const router = useRouter();

    useAuthRoute();

    const exportXLSX = () => {
        const parsedXLSX = xlsx.map((doc) => {
            return {
                ...doc,
                requirements: convert(doc?.requirements),
                language: convert(doc?.language),
            };
        });


        // Convert JSON to XLSX
        const xlsxData = XLSX.utils.json_to_sheet(parsedXLSX);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, xlsxData, "Sheet1");

        // Save XLSX file
        const blob = new Blob([XLSX.write(wb, { bookType: "xlsx", type: "array" })], {
            type: "application/octet-stream",
        });
        saveAs(blob, "positions.xlsx");
    };

    return (
        <section className="p-5">
            {/* header */}
            <div className="bg-[#D9D9D9] bg-opacity-30 px-4 py-6 flex items-center justify-between">
                <div className="space-x-4">
                    <button
                        className="text-white font-semibold leading-[29px] font-inter px-6 py-2 bg-primary hover:bg-opacity-80 active:bg-opacity-90"
                        onClick={() => router.push("/dashboard/positions")}
                    >
                        Positions
                    </button>
                    <button
                        className="opacity-30 hover:opacity-100 text-white font-semibold leading-[29px] font-inter px-6 py-2 bg-addgray hover:bg-primary  active:bg-opacity-90"
                        onClick={() => router.push("/dashboard/orders")}
                    >
                        Orders
                    </button>
                </div>

                <div>
                    <button
                        className="opacity-30 hover:opacity-100 text-white font-semibold leading-[29px] font-inter px-6 py-2 bg-addgray hover:bg-primary  active:bg-opacity-90"
                        onClick={() =>
                            dispatch({
                                type: "LOGOUT",
                            })
                        }
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* second header */}
            <div className="px-4 py-6 flex items-center justify-between">
                <div className="space-x-4">
                    <button
                        className={`text-white font-semibold leading-[29px] font-inter px-6 py-2 ${
                            currentTab === "active" ? "bg-primary" : "bg-addgray opacity-30 hover:opacity-100 hover:bg-primary  active:bg-opacity-90"
                        } hover:bg-opacity-80 active:bg-opacity-90`}
                        onClick={() =>
                            dispatch({
                                type: "SET_CURRENT_TAB",
                                payload: "active",
                            })
                        }
                    >
                        Active/Closed Positions
                    </button>
                    <button
                        className={`text-white font-semibold leading-[29px] font-inter px-6 py-2 ${
                            currentTab === "inactive"
                                ? "bg-primary"
                                : "bg-addgray opacity-30 hover:opacity-100 hover:bg-primary  active:bg-opacity-90"
                        } hover:bg-opacity-80 active:bg-opacity-90`}
                        onClick={() =>
                            dispatch({
                                type: "SET_CURRENT_TAB",
                                payload: "inactive",
                            })
                        }
                    >
                        Inactive positions
                    </button>
                </div>

                <div className="space-x-3">
                    <button
                        className="hover:opacity-100 text-white font-semibold leading-[29px] font-inter px-6 py-2 bg-secondary hover:bg-opacity-80  active:bg-opacity-90"
                        onClick={exportXLSX}
                    >
                        Export as XLSX
                    </button>

                    <button
                        className="opacity-30 hover:opacity-100 text-white font-semibold leading-[29px] font-inter px-6 py-2 bg-addgray hover:bg-primary  active:bg-opacity-90"
                        onClick={() => router.push("/dashboard/positions/addnewjob")}
                    >
                        Add new job
                    </button>
                </div>
            </div>

            {/* tabs */}
            {currentTab === "active" ? <Activepositions /> : <Inactivepositions />}
        </section>
    );
}
