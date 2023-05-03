import React from "react";
import Image from "next/image";
import p1 from "../../assets/home/professionals/p1.png";
import p2 from "../../assets/home/professionals/p2.png";
import p3 from "../../assets/home/professionals/p3.png";
import { useRouter } from "next/router";

export default function Professional() {
    const router = useRouter();
    return (
        <section className="py-8 lg:py-24 bg-[#FBFBFB]">
            <div className="container mx-auto px-4 lg:px-8 xl:px-20 ">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative hidden lg:block">
                        <div>
                            <svg width="99" height="288" viewBox="0 0 99 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="97" height="286" stroke="#13BEFF" strokeWidth="2" stroke-dasharray="2 2" />
                            </svg>
                        </div>
                        <div className="absolute top-8 left-6">
                            <Image src={p3} alt="p3" className="w-[299px] h-[199px] z-0" />
                        </div>
                        <div className="absolute bottom-[-1.5rem] left-24">
                            <Image src={p2} alt="p2" className="w-[228px] h-[168px]" />
                        </div>

                        <div className="absolute top-32 right-40">
                            <Image src={p1} alt="p1" className="w-[281px] h-[225px]" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-addblack text-[32px] leading-[48px] font-poppins font-semibold">
                            For <span className="text-primary">Professionals</span>
                        </h1>

                        <p className="w-full lg:w-[405px] text-lg font-inter font-semibold text-addblack mt-2">
                            Are you interested in freelancing, but you don’t know how and where to start?
                        </p>
                        <p className="w-full lg:w-[405px] text-lg font-inter  text-addgray">
                            We are here for those who want to step out the line and enter the real world of IT freelancing with a helmet coat of arms
                            on their chest. We will help you experience the freelance IT world of direct communication, relationships and solidarity
                            that we have created together and improve every day.
                        </p>

                        <div className="pt-3">
                            <button
                                className="flex items-center gap-x-3 px-8 py-2.5 font-inter font-semibold text-white bg-primary hover:bg-opacity-80 active:bg-opacity-70"
                                onClick={() => router.push("/professionals")}
                            >
                                Read More{" "}
                                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.91 0.5L0.5 1.91L5.08 6.5L0.5 11.09L1.91 12.5L7.91 6.5L1.91 0.5Z" fill="white" />
                                    <path d="M8.5 0.5L7.09 1.91L11.67 6.5L7.09 11.09L8.5 12.5L14.5 6.5L8.5 0.5Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
