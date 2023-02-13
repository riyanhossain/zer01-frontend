import React from "react";

export default function Latest() {
    return (
        <section className="container mx-auto py-20 flex justify-center">
            <div className="max-w-6xl w-full p-4 lg:p-6 shadow-[6px_6px_24px_rgba(0,0,0,0.12)] bg-white space-y-5">
                <h1 className="text-center text-[32px] leading-[42px] font-poppins font-semibold">Latest open positions</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
                    {/* card */}
                    <div className="p-5 shadow-[0px_0px_16px_rgba(68,68,68,0.08)] bg-white border-b-2 border-addgray">
                        <h1 className="text-lg font-semibold font-poppins">IT Security [IAM] engineer</h1>
                        <p className="text-sm font-semibold text-primary font-inter">$425 - $475 /month</p>
                        <div className="py-5">
                            <hr className="border-[#E7E7E7]" />
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="font-inter text-xs leading-[22px] text-addblack ">On - Site</p>
                            <p className="font-inter text-xs leading-[22px] text-addblack ">Full- Time</p>
                        </div>

                        <p className="text-sm text-addgray">
                            Lorem ipsum dolor sit amet conse cte tur. Malesuada pulvinar lacinia nisl dia m pretium vulputate egestas...
                        </p>
                    </div>

                    {/* card */}
                    <div className="p-5 shadow-[0px_0px_16px_rgba(68,68,68,0.08)] bg-white border-b-2 border-addgray">
                        <h1 className="text-lg font-semibold font-poppins">IT Security [IAM] engineer</h1>
                        <p className="text-sm font-semibold text-primary font-inter">$425 - $475 /month</p>
                        <div className="py-5">
                            <hr className="border-[#E7E7E7]" />
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="font-inter text-xs leading-[22px] text-addblack ">On - Site</p>
                            <p className="font-inter text-xs leading-[22px] text-addblack ">Full- Time</p>
                        </div>

                        <p className="text-sm text-addgray">
                            Lorem ipsum dolor sit amet conse cte tur. Malesuada pulvinar lacinia nisl dia m pretium vulputate egestas...
                        </p>
                    </div>

                    {/* card */}
                    <div className="p-5 shadow-[0px_0px_16px_rgba(68,68,68,0.08)] bg-white border-b-2 border-addgray">
                        <h1 className="text-lg font-semibold font-poppins">IT Security [IAM] engineer</h1>
                        <p className="text-sm font-semibold text-primary font-inter">$425 - $475 /month</p>
                        <div className="py-5">
                            <hr className="border-[#E7E7E7]" />
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="font-inter text-xs leading-[22px] text-addblack ">On - Site</p>
                            <p className="font-inter text-xs leading-[22px] text-addblack ">Full- Time</p>
                        </div>

                        <p className="text-sm text-addgray">
                            Lorem ipsum dolor sit amet conse cte tur. Malesuada pulvinar lacinia nisl dia m pretium vulputate egestas...
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <button className="text-white font-inter p-3 bg-primary hover:bg-opacity-80 active:bg-opacity-60"> Check open positions</button>
                </div>
            </div>
        </section>
    );
}
