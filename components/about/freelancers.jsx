import Image from "next/image";
import React from "react";
import f1 from "../../assets/about/freelancers/f1.png";
import f2 from "../../assets/about/freelancers/f2.png";
import f3 from "../../assets/about/freelancers/f3.png";

export default function Freelancers() {
    return (
        <section className="relative">
            <div className="container mx-auto px-4 lg:px-8 xl:px-20 py-12 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5">
                    <div className="space-y-4 py-6 lg:py-16 flex flex-col justify-center">
                        <h1 className="text-3xl font-semibold font-poppins text-addblack uppercase">
                            OFFER FOR <span className="text-primary">IT FREELANCERS</span>
                        </h1>

                        <p className="text-addblack text-sm font-inter font-medium w-full lg:w-[519px]">
                            Are you interested in freelancing, but you don’t know how and where to start?
                        </p>

                        <p className="text-addgray font-inter w-full lg:w-[516px]">
                            We are here for those who want to step out the line and enter the real world of IT freelancing with a helmet coat of arms
                            on their chest. We will help you experience the freelance IT world of direct communication, relationships and solidarity
                            that we have created together and improve every day. We will also advise you on accounting, too.
                        </p>
                    </div>

                    <div className="relative h-auto lg:h-[366px]">
                        <Image src={f3} className="w-[183.94px] h-[275.51px] z-20 absolute top-0 left-44 hidden lg:block" />
                        <Image src={f2} className=" w-full lg:w-[332.32px] h-[221.64px] z-0 lg:absolute top-0 right-0" />
                        <Image src={f1} className="w-[311.79px] h-[207.56px] z-30 absolute bottom-0 right-36 hidden lg:block" />
                    </div>
                </div>
            </div>
            <div className="absolute z-40 right-0 top-[30%] hidden lg:block">
                <svg width="159" height="256" viewBox="0 0 159 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="137.5" cy="128" rx="137.5" ry="128" fill="#398378" fill-opacity="0.6" />
                </svg>
            </div>
        </section>
    );
}
