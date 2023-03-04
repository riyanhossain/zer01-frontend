import React from "react";
import SendApplicationModal from "./modal";

export default function Details() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    return (
        <section className="container mx-auto px-4 lg:px-8 xl:px-20 ">
            <div className="p-4 lg:py-8 lg:px-20 shadow-[0px_4px_24px_rgba(0,0,0,0.1)] border-2 border-primary">
                <button>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 30L0 15L15 0L17.6719 2.625L7.17187 13.125H30V16.875H7.17187L17.6719 27.375L15 30Z" fill="#757575" />
                    </svg>
                </button>

                {/* table */}

                <div className="flex justify-center">
                    <div className="grid grid-cols-2 w-full lg:w-[538px] border border-primary">
                        <div className="col-span-1  border-b border-r border-[#E8E8E8]">
                            <p className="text-primary text-xl font-semibold font-inter leading-[22px] text-center">Internal ID:</p>
                        </div>
                        <div className="col-span-1  border-b border-[#E8E8E8]">
                            <p className="text-xl font-semibold font-inter leading-[22px] text-center">Z01-DRAD23</p>
                        </div>

                        <div className="col-span-1  border-b border-r border-[#E8E8E8]">
                            <p className="text-primary text-xl font-semibold font-inter leading-[22px] text-center">Position:</p>
                        </div>
                        <div className="col-span-1  border-b border-[#E8E8E8]">
                            <p className="text-xl font-semibold font-inter leading-[22px] text-center">Java Developer</p>
                        </div>

                        <div className="col-span-1  border-b border-r border-[#E8E8E8]">
                            <p className="text-primary text-xl font-semibold font-inter leading-[22px] text-center">Seniority level:</p>
                        </div>
                        <div className="col-span-1  border-b border-[#E8E8E8]">
                            <p className="text-xl font-semibold font-inter leading-[22px] text-center">5 years*</p>
                        </div>

                        <div className="col-span-1  border-b border-r border-[#E8E8E8]">
                            <p className="text-primary text-xl font-semibold font-inter leading-[22px] text-center">Job area:</p>
                        </div>
                        <div className="col-span-1  border-b border-[#E8E8E8]">
                            <p className="text-xl font-semibold font-inter leading-[22px] text-center">TELECOM</p>
                        </div>

                        <div className="col-span-1  border-b border-r border-[#E8E8E8]">
                            <p className="text-primary text-xl font-semibold font-inter leading-[22px] text-center">Collaboration form:</p>
                        </div>
                        <div className="col-span-1  border-b border-[#E8E8E8]">
                            <p className="text-xl font-semibold font-inter leading-[22px] text-center">B2B</p>
                        </div>

                        <div className="col-span-1  border-b border-r border-[#E8E8E8]">
                            <p className="text-primary text-xl font-semibold font-inter leading-[22px] text-center">Rate:</p>
                        </div>
                        <div className="col-span-1  border-b border-[#E8E8E8]">
                            <p className="text-xl font-semibold font-inter leading-[22px] text-center">35$/h</p>
                        </div>

                        <div className="col-span-1  border-b border-r border-[#E8E8E8]">
                            <p className="text-primary text-xl font-semibold font-inter leading-[22px] text-center">Location:</p>
                        </div>
                        <div className="col-span-1  border-b border-[#E8E8E8]">
                            <p className="text-xl font-semibold font-inter leading-[22px] text-center">Remote</p>
                        </div>

                        <div className="col-span-1  border-b border-r border-[#E8E8E8]">
                            <p className="text-primary text-xl font-semibold font-inter leading-[22px] text-center">Start Date:</p>
                        </div>
                        <div className="col-span-1  border-b border-[#E8E8E8]">
                            <p className="text-xl font-semibold font-inter leading-[22px] text-center">1.3.2023</p>
                        </div>

                        <div className="col-span-1  border-b border-r border-[#E8E8E8]">
                            <p className="text-primary text-xl font-semibold font-inter leading-[22px] text-center">Project Duration:</p>
                        </div>
                        <div className="col-span-1  border-b border-[#E8E8E8]">
                            <p className="text-[15px] font-semibold font-inter leading-[22px] text-center">6 months* possibility of extension</p>
                        </div>
                    </div>
                </div>

                <div className="p-5  border border-primary mt-[30px]">
                    <p className="text-primary text-xl font-bold font-inter leading-[30px] text-center">Project description</p>
                </div>

                <div className="p-5  border border-primary mt-[30px]">
                    <p className="text-primary text-xl font-bold font-inter leading-[30px] text-center">Project requirements</p>
                </div>

                {/* language */}
                <div className="flex justify-center">
                    <div className=" p-3 w-[50%]  border border-primary mt-[30px]">
                        <p className="text-primary text-xl font-bold font-inter leading-[30px] text-center">Language skills</p>
                    </div>
                </div>

                <div className="mt-[30px] flex justify-center">
                    <button className="uppercase font-inter font-extrabold px-6 py-1.5 text-white bg-primary hover:bg-opacity-80 active:bg-opacity-60" onClick={() => setIsOpen(true)}>
                        I AM INTERESTED IN THIS POSITION
                    </button>
                </div>
            </div>

            <SendApplicationModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        </section>
    );
}
