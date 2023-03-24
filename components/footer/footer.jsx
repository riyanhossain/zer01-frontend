import React from "react";
import Image from "next/image";
import logo from "../../assets/footer/logo.png";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <section className="py-8 lg:py-16 container mx-auto px-4 lg:px-8 xl:px-20 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[25%_10%_40%_25%] gap-y-5">
                    <div className="flex flex-col items-center lg:items-start">
                        <Image src={logo} alt="logo" className="w-[204px] h-[175px]" />
                    </div>

                    <div className="space-y-3 flex flex-col items-center lg:items-start">
                        <h1 className="text-lg  font-poppins font-medium text-addblack border-b-4 border-primary w-[86px] text-center">Pages</h1>

                        <ul className="space-y-3 flex flex-col items-center lg:items-start">
                            <li>
                                <Link
                                    href="/"
                                    className="text-addgray text-sm font-inter hover:text-primary transition-colors duration-200 ease-in-out"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/professional"
                                    className="text-addgray text-sm font-inter hover:text-primary transition-colors duration-200 ease-in-out"
                                >
                                    For Professional
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/company"
                                    className="text-addgray text-sm font-inter hover:text-primary transition-colors duration-200 ease-in-out"
                                >
                                    For Companies
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="text-addgray text-sm font-inter hover:text-primary transition-colors duration-200 ease-in-out"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="text-addgray text-sm font-inter hover:text-primary transition-colors duration-200 ease-in-out"
                                >
                                    Contact Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-addgray text-sm font-inter hover:text-primary transition-colors duration-200 ease-in-out"
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/gdpr"
                                    className="text-addgray text-sm font-inter hover:text-primary transition-colors duration-200 ease-in-out"
                                >
                                    GDPR
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3 flex flex-col items-center ">
                        <h1 className="text-lg  font-poppins font-medium text-addblack border-b-4 border-primary w-[86px] text-center">Follow Us</h1>

                        <p className="text-sm font-inter text-addgray">You can find us on social networks.</p>

                        <div>
                            <ul className="flex items-center space-x-8">
                                <li>
                                    <a href="/" target="_blank">
                                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M25.2301 2.82999C25.0837 2.28214 24.796 1.78232 24.3959 1.38046C23.9958 0.978605 23.4973 0.688775 22.9501 0.539978C20.9501 -2.19941e-05 12.8801 0 12.8801 0C12.8801 0 4.88008 -2.19941e-05 2.82008 0.539978C2.27288 0.688775 1.77432 0.978605 1.37422 1.38046C0.974115 1.78232 0.686452 2.28214 0.54005 2.82999C-0.180017 6.95883 -0.180017 11.1812 0.54005 15.31C0.685842 15.8592 0.973118 16.3606 1.37318 16.7642C1.77324 17.1678 2.27213 17.4594 2.82008 17.61C4.82008 18.15 12.8801 18.15 12.8801 18.15C12.8801 18.15 20.9401 18.15 22.9501 17.61C23.498 17.4594 23.9969 17.1678 24.397 16.7642C24.797 16.3606 25.0843 15.8592 25.2301 15.31C25.9367 11.18 25.9367 6.95998 25.2301 2.82999ZM10.2301 12.9V5.23999L16.96 9.06998L10.2301 12.9Z"
                                                fill="#010000"
                                                fill-opacity="0.6"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="/" target="_blank">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.29 2C14.29 2 14.66 2.00001 15.85 2.06001C16.5669 2.07146 17.2768 2.2033 17.95 2.45001C18.4409 2.63361 18.8849 2.92393 19.25 3.3C19.6261 3.6592 19.9136 4.1008 20.09 4.59001C20.3417 5.26185 20.4737 5.97259 20.48 6.69C20.54 7.88 20.55 8.24001 20.55 11.26C20.55 14.28 20.55 14.63 20.48 15.82C20.4737 16.5374 20.3417 17.2482 20.09 17.92C19.9136 18.4092 19.6261 18.8508 19.25 19.21C18.8849 19.5861 18.4409 19.8764 17.95 20.06C17.2768 20.3067 16.5669 20.4386 15.85 20.45C14.66 20.45 14.31 20.51 11.29 20.51C8.27004 20.51 7.92004 20.51 6.73004 20.45C6.01302 20.4397 5.30291 20.3078 4.63 20.06C4.13909 19.8764 3.69508 19.5861 3.33002 19.21C2.95723 18.8481 2.67018 18.4073 2.48999 17.92C2.2383 17.2482 2.10635 16.5374 2.10004 15.82C2.04004 14.63 2.03003 14.27 2.03003 11.26C2.03003 8.25001 2.03004 7.88 2.10004 6.69C2.10635 5.97259 2.2383 5.26185 2.48999 4.59001C2.67018 4.1027 2.95723 3.66191 3.33002 3.3C3.69508 2.92393 4.13909 2.63361 4.63 2.45001C5.30291 2.20219 6.01302 2.07032 6.73004 2.06001C7.92004 2.06001 8.27004 2 11.29 2ZM11.29 0C8.22004 0 7.84 7.32392e-06 6.63 0.0700073C5.69362 0.0850199 4.76679 0.26092 3.89001 0.590012C3.13668 0.877334 2.45441 1.32422 1.89001 1.90001C1.31275 2.46122 0.868552 3.14462 0.590027 3.90001C0.261813 4.7774 0.0826455 5.7035 0.0599976 6.64C0.00999756 7.84 0 8.23 0 11.3C0 14.37 -2.44007e-06 14.75 0.0599976 15.95C0.0826455 16.8865 0.261813 17.8126 0.590027 18.69C0.868552 19.4454 1.31275 20.1288 1.89001 20.69C2.45441 21.2658 3.13668 21.7127 3.89001 22C4.76679 22.3291 5.69362 22.505 6.63 22.52C7.84 22.58 8.22004 22.59 11.29 22.59C14.36 22.59 14.74 22.59 15.95 22.52C16.8864 22.505 17.8132 22.3291 18.69 22C19.4433 21.7127 20.1256 21.2658 20.69 20.69C21.2673 20.1288 21.7115 19.4454 21.99 18.69C22.3182 17.8126 22.4974 16.8865 22.52 15.95C22.52 14.75 22.58 14.36 22.58 11.3C22.58 8.24 22.58 7.84 22.52 6.64C22.4974 5.7035 22.3182 4.7774 21.99 3.90001C21.7115 3.14462 21.2673 2.46122 20.69 1.90001C20.1256 1.32422 19.4433 0.877334 18.69 0.590012C17.8132 0.26092 16.8864 0.0850199 15.95 0.0700073C14.74 0.0100073 14.36 0 11.29 0"
                                                fill="#010000"
                                                fill-opacity="0.6"
                                            />
                                            <path
                                                d="M11.2903 5.45996C10.1431 5.45996 9.02173 5.80013 8.06792 6.43744C7.11412 7.07475 6.37074 7.98058 5.93175 9.04039C5.49277 10.1002 5.37788 11.2664 5.60168 12.3915C5.82547 13.5166 6.37787 14.55 7.18902 15.3612C8.00016 16.1723 9.03365 16.7247 10.1587 16.9485C11.2838 17.1723 12.45 17.0574 13.5098 16.6185C14.5696 16.1795 15.4755 15.4361 16.1128 14.4823C16.7501 13.5285 17.0903 12.4071 17.0903 11.26C17.0903 9.72171 16.4792 8.24645 15.3915 7.15874C14.3038 6.07103 12.8285 5.45996 11.2903 5.45996ZM11.2903 15.02C10.5438 15.0219 9.81351 14.8023 9.19201 14.3888C8.5705 13.9753 8.08571 13.3866 7.79912 12.6973C7.51254 12.008 7.43706 11.2492 7.58221 10.5169C7.72735 9.7847 8.08665 9.11203 8.61449 8.58418C9.14234 8.05634 9.81499 7.69707 10.5472 7.55193C11.2795 7.40678 12.0383 7.48228 12.7276 7.76886C13.4169 8.05544 14.0056 8.54021 14.4191 9.16171C14.8326 9.78322 15.0522 10.5135 15.0502 11.26C15.0502 12.2572 14.6541 13.2135 13.949 13.9187C13.2438 14.6238 12.2875 15.02 11.2903 15.02Z"
                                                fill="#010000"
                                                fill-opacity="0.6"
                                            />
                                            <path
                                                d="M18.67 5.22967C18.67 5.49907 18.59 5.7624 18.4401 5.98626C18.2902 6.21012 18.0772 6.38443 17.8281 6.48707C17.579 6.5897 17.3051 6.61604 17.041 6.56275C16.7769 6.50946 16.5346 6.37894 16.3448 6.18774C16.155 5.99653 16.0263 5.75328 15.9749 5.48881C15.9236 5.22434 15.952 4.95057 16.0565 4.70225C16.1609 4.45392 16.3368 4.24221 16.5617 4.09399C16.7867 3.94576 17.0506 3.86768 17.32 3.86967C17.4981 3.86966 17.6745 3.9049 17.8389 3.97336C18.0034 4.04183 18.1527 4.14217 18.2781 4.26859C18.4036 4.39501 18.5029 4.54502 18.5701 4.70997C18.6374 4.87491 18.6713 5.05154 18.67 5.22967Z"
                                                fill="#010000"
                                                fill-opacity="0.6"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="/" target="_blank">
                                        <svg width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.63 24.94H7.63V12.39H11.12L11.5 8.17999H7.63V5.75C7.63 4.75 7.83003 4.36 8.78003 4.36H11.5V0H8.03003C4.29003 0 2.60999 1.63999 2.60999 4.78999V8.14H0V12.4H2.63V24.94Z"
                                                fill="#010000"
                                                fill-opacity="0.6"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="/" target="_blank">
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 15.7984C1.97657 17.0671 4.26409 17.7674 6.61212 17.8228C8.96016 17.8782 11.2782 17.2865 13.3124 16.1124C15.3466 14.9384 17.0185 13.2273 18.1451 11.1665C19.2718 9.10563 19.8097 6.77454 19.7 4.42842C20.5815 3.79045 21.3432 3.00162 21.95 2.0984C21.127 2.46327 20.254 2.70262 19.36 2.80842C20.3062 2.24804 21.0169 1.36324 21.36 0.318401C20.4753 0.841123 19.5082 1.20973 18.5 1.40843C17.8197 0.690255 16.9221 0.215682 15.9456 0.0578111C14.969 -0.100059 13.9676 0.0675043 13.0956 0.53474C12.2237 1.00198 11.5296 1.74296 11.1202 2.6435C10.7108 3.54405 10.6088 4.55422 10.83 5.51841C9.03908 5.42946 7.28697 4.96403 5.68799 4.15248C4.08901 3.34092 2.67903 2.20148 1.54999 0.808421C0.975546 1.79784 0.799532 2.96888 1.05774 4.08345C1.31595 5.19801 1.989 6.1724 2.94 6.80842C2.23826 6.78364 1.55258 6.59165 0.940002 6.24842C0.926291 7.29748 1.27954 8.31835 1.93872 9.13456C2.5979 9.95077 3.52155 10.511 4.54999 10.7184C3.89878 10.9013 3.21372 10.9287 2.54999 10.7984C2.83579 11.6932 3.39445 12.4762 4.14764 13.0375C4.90084 13.5988 5.81083 13.9103 6.75 13.9284C5.80698 14.6754 4.72377 15.2258 3.56439 15.547C2.40501 15.8682 1.19299 15.9537 0 15.7984Z"
                                                fill="#010000"
                                                fill-opacity="0.6"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="/" target="_blank">
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.66039 6.87988H0.400391V20.6499H4.66039V6.87988Z" fill="#010000" fill-opacity="0.6" />
                                            <path
                                                d="M2.52004 5.07993C3.02324 5.08389 3.51628 4.9383 3.9366 4.66162C4.35693 4.38494 4.68556 3.98964 4.88088 3.52588C5.0762 3.06212 5.12939 2.55079 5.03365 2.05676C4.93791 1.56274 4.69758 1.1083 4.34316 0.751069C3.98874 0.39384 3.53624 0.149932 3.04299 0.0502935C2.54974 -0.0493449 2.038 -0.000238076 1.57271 0.191407C1.10742 0.383052 0.709517 0.708586 0.429524 1.12671C0.149531 1.54483 3.54336e-05 2.0367 1.98338e-05 2.53992C-0.00129598 2.87216 0.0628714 3.20142 0.188802 3.50888C0.314732 3.81634 0.499963 4.09599 0.733968 4.33185C0.967972 4.56771 1.24612 4.75516 1.55257 4.88351C1.85902 5.01187 2.18779 5.07862 2.52004 5.07993Z"
                                                fill="#010000"
                                                fill-opacity="0.6"
                                            />
                                            <path
                                                d="M11.4904 13.4298C11.4904 11.4898 12.3804 10.3398 14.0804 10.3398C15.7804 10.3398 16.4104 11.4498 16.4104 13.4298V20.6398H20.7004V11.9398C20.7004 8.24976 18.6104 6.46976 15.7004 6.46976C14.8715 6.45757 14.0536 6.66027 13.3264 7.05808C12.5991 7.45588 11.9872 8.03526 11.5504 8.73978V6.88977H7.40039V20.6398H11.4904V13.4298Z"
                                                fill="#010000"
                                                fill-opacity="0.6"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="text-lg  font-poppins font-medium text-addblack border-b-4 border-primary w-[86px] text-center">Contact</h1>

                        <div className="space-y-1 mt-3">
                            <p className="text-primary font-poppins text-center lg:text-start">Phone:</p>
                            <p className="text-addgray font-inter text-center lg:text-start">+4(0) 743 430 098</p>
                        </div>

                        <div className="space-y-1 mt-3">
                            <p className="text-primary font-poppins text-center lg:text-start">Email:</p>
                            <p className="text-addgray font-inter text-center lg:text-start">contact@zero1code.com</p>
                        </div>
                        <div className="space-y-1 mt-3">
                            <p className="text-primary font-poppins text-center lg:text-start">Location:</p>
                            <p className="text-addgray font-inter text-center lg:text-start">
                                Str. 13 Septembrie , Nr. 12A, Cluj-Napoca, Cluj, Romania
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-4 lg:px-8 xl:px-20 py-4 lg:py-6 border-t border-[#E7E7E7]">
                <p className="text-sm text-[#484848] text-center lg:text-start">© {new Date().getFullYear()}, Zer01 CODE. All Rights Reserved </p>
            </section>
        </footer>
    );
}
