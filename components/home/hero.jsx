import React from "react";
import Image from "next/image";
import hero from "../../assets/home/hero/hero.png";
import mask1 from "../../assets/home/hero/mask1.png";
import mask2 from "../../assets/home/hero/mask2.png";
import ornament from "../../assets/home/hero/ornament.svg";

export default function Hero() {
    return (
        <section className="bg-[#F7FCFF] relative">
            <div className="container mx-auto px-4 lg:px-8 xl:px-20">
                <div className=" py-12 lg:py-0 h-[740px]  lg:h-[580px] 2xl:min-h-[660px] flex flex-col lg:grid grid-cols-2">
                    <div className="h-full flex flex-col justify-center space-y-8 ">
                        <h1 className="text-3xl lg:text-6xl font-bold font-poppins w-[270px] lg:w-[625px]">
                            <span className="text-primary  ">Freelance</span> Service For Your IT <span className="text-primary">Project</span>
                        </h1>
                        <div className="border-l-[4px]  border-primary ">
                            <p className="font-inter text-addgray text-2xl lg:w-[500px] pl-4">
                                Work with talented people at most affordable price to get most out of your time and cost
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center relative">
                        <Image src={hero} alt="hero" height={"433.48px"} width={"469.16px"} className="z-50" />
                        <div className="absolute top-24 right-28">
                            <Image src={mask1} alt="mask1" className="h-[125.02px] w-[128.09px]" />
                        </div>
                        <div className="absolute bottom-24 left-36">
                            <Image src={mask2} alt="mask1" className="h-[113.02px] w-[122.09px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0">
                <Image src={ornament} alt="ornament" />
            </div>
        </section>
    );
}
