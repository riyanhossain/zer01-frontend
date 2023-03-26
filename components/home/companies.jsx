import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import c1 from "../../assets/home/companies/c1.png";

export default function Companies() {
    const router = useRouter();
    return (
        <section className="py-8 lg:py-24 container mx-auto px-4 lg:px-8 xl:px-20 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6">
                <div className="space-y-3">
                    <h1 className="text-addblack text-[32px] leading-[48px] font-poppins font-semibold">
                        For <span className="text-primary">Companies</span>
                    </h1>

                    <p className="w-full lg:w-[517px] text-lg font-inter  text-addgray">
                        We will help you expand your internal teams quickly, professionally and easily. Highly qualified Zer01 are the right
                        reinforcements for your projects. Our company is a strong and reliable IT outsourcing partner.
                    </p>

                    <p className="w-full lg:w-[517px] text-lg font-inter  text-addgray">
                        We guarantee professionality, fairness, individual approach and commitment. Don’t waste your time with long recruitment
                        processes.
                    </p>

                    <p className="w-full lg:w-[517px] text-lg font-inter  text-addgray">
                        We will pre-select the right candidates for you so you can focus on your core activities..
                    </p>

                    <div className="pt-3">
                        <button
                            className="flex items-center gap-x-3 px-8 py-2.5 font-inter font-semibold text-white bg-primary hover:bg-opacity-80 active:bg-opacity-70"
                            onClick={() => router.push("/company")}
                        >
                            Read More{" "}
                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.91 0.5L0.5 1.91L5.08 6.5L0.5 11.09L1.91 12.5L7.91 6.5L1.91 0.5Z" fill="white" />
                                <path d="M8.5 0.5L7.09 1.91L11.67 6.5L7.09 11.09L8.5 12.5L14.5 6.5L8.5 0.5Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex justify-center relative">
                    <Image src={c1} alt="c1" width={580.97} height={416.47} className="z-10  " />
                    <div className=" absolute right-0 bottom-[-2rem] hidden lg:block">
                        <svg width="304" height="252" viewBox="0 0 304 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse opacity="0.6" cx="2.42627" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="15.1901" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="28.2282" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="41.2665" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="54.3043" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="67.3427" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="80.3805" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="93.4188" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="106.457" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="119.495" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="132.533" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="145.571" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="158.609" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="171.647" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="184.685" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="197.723" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="210.762" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.48" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.5071" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.5339" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5608" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5879" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="223.8" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="236.838" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="2.42627" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="249.876" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="15.4531" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="28.4801" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="41.507" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="54.534" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="67.5609" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="80.5878" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="93.6147" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="106.642" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="119.669" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="132.696" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="145.723" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="158.75" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="171.776" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="184.803" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="197.83" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="210.857" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="223.884" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="236.911" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="249.938" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="262.965" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="275.992" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="289.019" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                            <ellipse opacity="0.6" cx="302.046" cy="2.15225" rx="1.95404" ry="1.95571" fill="#499F93" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
