import Addnewjob from "@/components/dashboard/positions/addnewjob";
import { UserContext } from "@/context/userContext";
import useAuthRoute from "@/lib/hooks/useAuthRoute";
import React from "react";
import { useRouter } from "next/router";

export default function AddNewJob() {
    const [currentTab, setCurrentTab] = React.useState("active");
    const { state, dispatch } = React.useContext(UserContext);

    const router = useRouter();

    useAuthRoute();

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
                        className="opacity-30 hover:opacity-100 text-white font-semibold leading-[29px] font-inter px-6 py-2 bg-addgray hover:bg-primary  active:bg-opacity-90"
                        onClick={() => router.push("/dashboard/positions")}
                    >
                        Active/Closed Positions
                    </button>
                    <button
                        className="opacity-30 hover:opacity-100 text-white font-semibold leading-[29px] font-inter px-6 py-2 bg-addgray hover:bg-primary  active:bg-opacity-90"
                        onClick={() => router.push("/dashboard/positions")}
                    >
                        Inactive positions
                    </button>
                </div>

                <div>
                    <button
                        className="text-white font-semibold leading-[29px] font-inter px-6 py-2  hover:bg-opacity-80 active:bg-opacity-90"
                        onClick={() => router.push("/dashboard/positions/addnewjob")}
                    >
                        Add new job
                    </button>
                </div>
            </div>

            {/* tabs */}
            <Addnewjob />
        </section>
    );
}
