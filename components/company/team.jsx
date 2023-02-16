import React from "react";
import Image from "next/image";
import t1 from "../../assets/company/team/t1.png";
import t2 from "../../assets/company/team/t2.png";
import t3 from "../../assets/company/team/t3.png";
import playicon from "../../assets/company/team/playicon.svg";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Team() {
    return (
        <section className="py-8 lg:py-12 container mx-auto px-4 lg:px-8 xl:px-20 ">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[478px]">
                    <div className="h-auto lg:h-[252.33px] w-full lg:w-[528.37px]">
                        <ReactPlayer
                            url={"video.mp4"}
                            width="100%"
                            height="100%"
                            light={<Image src={t3} alt="img" />}
                            playing
                            controls
                            playIcon={<Image src={playicon} alt="img" className="absolute" />}
                        />
                    </div>

                    <Image src={t1} alt="img" className="hidden lg:flex absolute bottom-0 left-0 w-[399.84px] h-[225.67px] z-10" />

                    <Image src={t2} alt="img" className="hidden lg:flex absolute bottom-6 right-12 w-[271.32px] h-[231px] z-[-1]" />
                </div>

                <div className="flex flex-col justify-center ml-0 lg:ml-40">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-addblack font-poppins ">
                        Team of Our <span className="text-primary">IT Specialist</span>
                    </h2>

                    <p className="text-addgray leading-[30px] w-full ">
                        Use our list to choose the right IT specialists for your projects according to your wishes.
                    </p>
                    <p className="text-addgray leading-[30px] w-full ">
                        Please send us a completed order if you are interested in the offered IT specialists. Based on your order, we will send you
                        the necessary documents, including detailed information about the selected IT specialists.
                    </p>

                    <p className="text-addgray leading-[30px] w-full ">
                        Outsourcing is used if it is for various reasons more effective for a company to lease external capacities than to hire
                        full-time IT specialists (e.g. due to limited financial or human resources or if it is necessary to obtain quickly a greater
                        number of IT specialists).
                    </p>
                </div>
            </div>
        </section>
    );
}
