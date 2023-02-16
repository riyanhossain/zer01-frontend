import Link from "next/link";
import React from "react";

export default function Mobilenav() {
    return (
        <div className="lg:hidden flex flex-col items-center space-y-8  py-8 transition-all duration-200 ease-linear h-auto">
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
    );
}
