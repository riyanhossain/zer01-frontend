import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/nav/logo.svg";
import Mobilenav from "./mobilenav";

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className=" bg-[#3983781A] ">
            <div className="container mx-auto px-4 lg:px-8 xl:px-20 ">
                <div className="flex items-center justify-between relative py-5 lg:py-7">
                    <Link href="/">
                        <Image src={logo} width={100} height={100} className="absolute w-auto h-auto z-50 top-0" priority alt="logo"/>
                    </Link>

                    <div className="hidden lg:flex items-center space-x-8 ml-64">
                        <Link href="/">
                            <p className="text-[#212121] font-poppins  hover:text-[#398378]">Home</p>
                        </Link>
                        <Link href="/professional">
                            <p className="text-[#212121] font-poppins  hover:text-[#398378]">For Professional</p>
                        </Link>
                        <Link href="/company">
                            <p className="text-[#212121] font-poppins hover:text-[#398378]">For Companies</p>
                        </Link>

                        <Link href="/about">
                            <p className="text-[#212121] font-poppins  hover:text-[#398378]">About Us</p>
                        </Link>

                        <Link href="/contact">
                            <p className="text-[#212121] font-poppins  hover:text-[#398378]">Contact Us</p>
                        </Link>
                    </div>

                    <div>
                        {!isOpen ? (
                            <button className="  lg:hidden w-10 h-10 " onClick={(prev) => setIsOpen(true)}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M5 12H18" stroke="#398378" strokeWidth="2" strokeLinecap="round"></path>{" "}
                                        <path d="M5 17H11" stroke="#398378" strokeWidth="2" strokeLinecap="round"></path>{" "}
                                        <path d="M5 7H15" stroke="#398378" strokeWidth="2" strokeLinecap="round"></path>{" "}
                                    </g>
                                </svg>
                            </button>
                        ) : (
                            <button className="  lg:hidden w-10 h-10 " onClick={(prev) => setIsOpen(false)}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <g clip-path="url(#clip0_429_11083)">
                                            {" "}
                                            <path
                                                d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006"
                                                stroke="#398378"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                stroke-linejoin="round"
                                            ></path>{" "}
                                        </g>{" "}
                                        <defs>
                                            {" "}
                                            <clipPath id="clip0_429_11083">
                                                {" "}
                                                <rect width="24" height="24" fill="white"></rect>{" "}
                                            </clipPath>{" "}
                                        </defs>{" "}
                                    </g>
                                </svg>
                            </button>
                        )}
                    </div>

                    <div className="hidden lg:flex"></div>
                </div>

                {isOpen ? <Mobilenav /> : null}
            </div>
        </nav>
    );
}
