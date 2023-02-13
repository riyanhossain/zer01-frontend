import React from "react";
import Image from "next/image";
import about1 from "../../assets/about/intro/about1.png";
import about2 from "../../assets/about/intro/about2.png";

export default function Intro() {
    return (
        <section className="container mx-auto px-4 lg:px-8 xl:px-20 py-6 lg:py-20 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5">
                <div className="relative">
                    <Image src={about1} className=" w-full lg:w-[336.02px] h-[266.48px]" />
                    <Image src={about2} className="w-[336.02px] h-[270.48px] absolute bottom-0 right-32 hidden lg:block" />
                    <div className="absolute bottom-20 left-24 hidden lg:block">
                        <svg width="78" height="70" viewBox="0 0 78 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3.74988" cy="3.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="13.7499" cy="3.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="23.7499" cy="3.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="33.7499" cy="3.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="43.7499" cy="3.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="53.7499" cy="3.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="63.7499" cy="3.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="73.7499" cy="3.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="3.74988" cy="16.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="13.7499" cy="16.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="23.7499" cy="16.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="33.7499" cy="16.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="43.7499" cy="16.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="53.7499" cy="16.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="63.7499" cy="16.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="73.7499" cy="16.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="3.74988" cy="28.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="13.7499" cy="28.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="23.7499" cy="28.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="33.7499" cy="28.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="43.7499" cy="28.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="53.7499" cy="28.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="63.7499" cy="28.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="73.7499" cy="28.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="3.74988" cy="41.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="13.7499" cy="41.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="23.7499" cy="41.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="33.7499" cy="41.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="43.7499" cy="41.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="53.7499" cy="41.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="63.7499" cy="41.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="73.7499" cy="41.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="3.74988" cy="53.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="13.7499" cy="53.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="23.7499" cy="53.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="33.7499" cy="53.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="43.7499" cy="53.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="53.7499" cy="53.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="63.7499" cy="53.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="73.7499" cy="53.75" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="3.74988" cy="66.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="13.7499" cy="66.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="23.7499" cy="66.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="33.7499" cy="66.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="43.7499" cy="66.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="53.7499" cy="66.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="63.7499" cy="66.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                            <circle cx="73.7499" cy="66.25" r="3.75" fill="#D9D9D9" fill-opacity="0.6" />
                        </svg>
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="font-poppins text-addblack text-2xl lg:text-[32px] lg:leading-[42px] font-semibold w-full lg:w-[625px]">
                        We are <span className="text-primary">Zer01 freelancers</span> and we have been providing IT freelancer outsourcing services
                        for over 9 years
                    </h1>

                    <p className="text-addgray font-inter w-full lg:w-[625px]">
                        We are innovative. We are independent. We are fair and straightforward. We are Zer01! We provide extra muscle to IT projects
                        that lack the right people. We offer freelancers projects they can be proud of. We cooperate with more than 300 global
                        companies in Slovakia and abroad.
                    </p>

                    <div className="flex items-center gap-x-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.709 0C19.4023 0 18.8378 0.0576132 18.014 0.170728C17.1902 0.284264 16.6577 0.394148 16.4175 0.498134C16.1765 0.602115 15.7413 0.962968 15.1127 1.57658C14.4835 2.19246 13.5709 3.32897 12.3775 4.98539C11.1823 6.64364 10.0677 8.39405 9.03148 10.2381C7.99478 12.0828 7.02728 13.9979 6.12938 15.9832C5.29865 14.5851 4.54796 13.6371 3.87362 13.1384C3.20097 12.6379 2.63352 12.3882 2.17215 12.3882C1.81181 12.3882 1.36041 12.5771 0.815867 12.9531C0.272017 13.3302 0 13.6994 0 14.0635C0 14.3269 0.249561 14.7174 0.748686 15.2338C1.73723 16.2606 2.61226 17.3494 3.36951 18.5021C3.83205 19.1915 4.13964 19.6144 4.29299 19.7687C4.4455 19.9215 4.91017 20 5.68729 20C6.76829 20 7.41035 19.8637 7.6146 19.5896C7.81699 19.3257 8.19149 18.5389 8.73776 17.2273C10.0875 13.9436 11.7657 10.8077 13.7716 7.82201C15.7792 4.83757 17.618 2.57977 19.292 1.05023C19.6255 0.759638 19.8259 0.571362 19.8964 0.484381C19.965 0.39712 20 0.309297 20 0.217819C19.9999 0.0735094 19.9027 1.7987e-05 19.709 1.7987e-05L19.709 0Z"
                                fill="#0BC512"
                            />
                        </svg>

                        <p className="text-addblack text-lg font-inter">
                            More than <span className="text-primary">13 800 available IT specialists</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-x-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.709 0C19.4023 0 18.8378 0.0576132 18.014 0.170728C17.1902 0.284264 16.6577 0.394148 16.4175 0.498134C16.1765 0.602115 15.7413 0.962968 15.1127 1.57658C14.4835 2.19246 13.5709 3.32897 12.3775 4.98539C11.1823 6.64364 10.0677 8.39405 9.03148 10.2381C7.99478 12.0828 7.02728 13.9979 6.12938 15.9832C5.29865 14.5851 4.54796 13.6371 3.87362 13.1384C3.20097 12.6379 2.63352 12.3882 2.17215 12.3882C1.81181 12.3882 1.36041 12.5771 0.815867 12.9531C0.272017 13.3302 0 13.6994 0 14.0635C0 14.3269 0.249561 14.7174 0.748686 15.2338C1.73723 16.2606 2.61226 17.3494 3.36951 18.5021C3.83205 19.1915 4.13964 19.6144 4.29299 19.7687C4.4455 19.9215 4.91017 20 5.68729 20C6.76829 20 7.41035 19.8637 7.6146 19.5896C7.81699 19.3257 8.19149 18.5389 8.73776 17.2273C10.0875 13.9436 11.7657 10.8077 13.7716 7.82201C15.7792 4.83757 17.618 2.57977 19.292 1.05023C19.6255 0.759638 19.8259 0.571362 19.8964 0.484381C19.965 0.39712 20 0.309297 20 0.217819C19.9999 0.0735094 19.9027 1.7987e-05 19.709 1.7987e-05L19.709 0Z"
                                fill="#0BC512"
                            />
                        </svg>

                        <p className="text-addblack text-lg font-inter">
                            More than <span className="text-primary">1 270 allocated Zer01</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-x-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.709 0C19.4023 0 18.8378 0.0576132 18.014 0.170728C17.1902 0.284264 16.6577 0.394148 16.4175 0.498134C16.1765 0.602115 15.7413 0.962968 15.1127 1.57658C14.4835 2.19246 13.5709 3.32897 12.3775 4.98539C11.1823 6.64364 10.0677 8.39405 9.03148 10.2381C7.99478 12.0828 7.02728 13.9979 6.12938 15.9832C5.29865 14.5851 4.54796 13.6371 3.87362 13.1384C3.20097 12.6379 2.63352 12.3882 2.17215 12.3882C1.81181 12.3882 1.36041 12.5771 0.815867 12.9531C0.272017 13.3302 0 13.6994 0 14.0635C0 14.3269 0.249561 14.7174 0.748686 15.2338C1.73723 16.2606 2.61226 17.3494 3.36951 18.5021C3.83205 19.1915 4.13964 19.6144 4.29299 19.7687C4.4455 19.9215 4.91017 20 5.68729 20C6.76829 20 7.41035 19.8637 7.6146 19.5896C7.81699 19.3257 8.19149 18.5389 8.73776 17.2273C10.0875 13.9436 11.7657 10.8077 13.7716 7.82201C15.7792 4.83757 17.618 2.57977 19.292 1.05023C19.6255 0.759638 19.8259 0.571362 19.8964 0.484381C19.965 0.39712 20 0.309297 20 0.217819C19.9999 0.0735094 19.9027 1.7987e-05 19.709 1.7987e-05L19.709 0Z"
                                fill="#0BC512"
                            />
                        </svg>

                        <p className="text-addblack text-lg font-inter">
                            <span className="text-primary">189 010 </span> man-days <span className="text-primary">supplied</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-x-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.709 0C19.4023 0 18.8378 0.0576132 18.014 0.170728C17.1902 0.284264 16.6577 0.394148 16.4175 0.498134C16.1765 0.602115 15.7413 0.962968 15.1127 1.57658C14.4835 2.19246 13.5709 3.32897 12.3775 4.98539C11.1823 6.64364 10.0677 8.39405 9.03148 10.2381C7.99478 12.0828 7.02728 13.9979 6.12938 15.9832C5.29865 14.5851 4.54796 13.6371 3.87362 13.1384C3.20097 12.6379 2.63352 12.3882 2.17215 12.3882C1.81181 12.3882 1.36041 12.5771 0.815867 12.9531C0.272017 13.3302 0 13.6994 0 14.0635C0 14.3269 0.249561 14.7174 0.748686 15.2338C1.73723 16.2606 2.61226 17.3494 3.36951 18.5021C3.83205 19.1915 4.13964 19.6144 4.29299 19.7687C4.4455 19.9215 4.91017 20 5.68729 20C6.76829 20 7.41035 19.8637 7.6146 19.5896C7.81699 19.3257 8.19149 18.5389 8.73776 17.2273C10.0875 13.9436 11.7657 10.8077 13.7716 7.82201C15.7792 4.83757 17.618 2.57977 19.292 1.05023C19.6255 0.759638 19.8259 0.571362 19.8964 0.484381C19.965 0.39712 20 0.309297 20 0.217819C19.9999 0.0735094 19.9027 1.7987e-05 19.709 1.7987e-05L19.709 0Z"
                                fill="#0BC512"
                            />
                        </svg>

                        <p className="text-addblack text-lg font-inter">
                            <span className="text-primary">Extra muscle</span> for 1 016 IT projects
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
