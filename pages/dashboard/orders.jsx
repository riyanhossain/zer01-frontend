import React from "react";
import OrdersComponent from "@/components/dashboard/orders/orders";
import useAuthRoute from "@/lib/hooks/useAuthRoute";
import { useRouter } from "next/router";

export default function Orders() {
    useAuthRoute();
    const router = useRouter();
    return (
        <section className="p-5">
            {/* header */}
            <div className="bg-[#D9D9D9] bg-opacity-30 px-4 py-6 flex items-center justify-between">
                <div className="space-x-4">
                    <button
                        className="opacity-30 hover:opacity-100 text-white font-semibold leading-[29px] font-inter px-6 py-2 bg-addgray hover:bg-primary  active:bg-opacity-90"
                        onClick={() => router.push("/dashboard/positions")}
                    >
                        Positions
                    </button>
                    <button
                        className="text-white font-semibold leading-[29px] font-inter px-6 py-2 bg-primary hover:bg-opacity-80 active:bg-opacity-90"
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

            <OrdersComponent />
        </section>
    );
}
