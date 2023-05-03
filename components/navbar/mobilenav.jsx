import Link from "next/link";
import React from "react";

export default function Mobilenav({ onClose }) {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
        onClose();
    };

    return (
        <div className="lg:hidden flex flex-col items-center space-y-8  py-8 transition-all duration-200 ease-linear h-auto">
            <Link href="/" onClick={handleClick}>
                <p className="text-[#212121] font-poppins  hover:text-[#398378]">Home</p>
            </Link>
            <Link href="/professionals" onClick={handleClick}>
                <p className="text-[#212121] font-poppins  hover:text-[#398378]">For Professionals</p>
            </Link>
            <Link href="/company" onClick={handleClick}>
                <p className="text-[#212121] font-poppins hover:text-[#398378]">For Companies</p>
            </Link>

            <Link href="/about" onClick={handleClick}>
                <p className="text-[#212121] font-poppins  hover:text-[#398378]">About Us</p>
            </Link>

            <Link href="/contact" onClick={handleClick}>
                <p className="text-[#212121] font-poppins  hover:text-[#398378]">Contact Us</p>
            </Link>
        </div>
    );
}
