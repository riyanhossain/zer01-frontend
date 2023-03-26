import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import about from "../../assets/home/about/about.png";

export default function About() {

    const router = useRouter();
    return (
        <section className=" py-8 lg:py-20 container mx-auto px-4 lg:px-8 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8">
                <div className="flex flex-col justify-center gap-y-3">
                    <h1 className="text-[32px] leading-[48px] font-semibold text-addblack font-poppins">
                        About <span className="text-primary">Us</span>
                    </h1>

                    <p className="font-inter text-addgray text-lg mt-2">
                        We are Zer01 freelancers and we have been providing IT freelancer outsourcing services for over 9 years. We are innovative. We
                        are independent. We are fair and straightforward.
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

                    <div className="mt-3">
                        <button className="flex items-center gap-x-3 px-8 py-2.5 font-inter font-semibold text-white bg-primary hover:bg-opacity-80 active:bg-opacity-70" onClick={() => router.push("/about")}>
                            Read More{" "}
                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.91 0.5L0.5 1.91L5.08 6.5L0.5 11.09L1.91 12.5L7.91 6.5L1.91 0.5Z" fill="white" />
                                <path d="M8.5 0.5L7.09 1.91L11.67 6.5L7.09 11.09L8.5 12.5L14.5 6.5L8.5 0.5Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="relative flex justify-center lg:justify-end ">
                    <div className=" w-full md:w-[385.78px] h-[473.29px] bg-primary rotate-[-13deg] lg:mr-12 hidden md:block" />
                    <Image
                        src={about}
                        alt="about"
                        width={"465.39px"}
                        height={"465.39px"}
                        className="w-full md:w-[359.74px] h-[400px] md:h-[465.39px]  lg:absolute top-0 lg:right-16"
                    />
                </div>
            </div>
        </section>
    );
}
