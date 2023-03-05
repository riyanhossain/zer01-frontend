import React from "react";
import logo from "@/assets/footer/logo.png";
import Image from "next/image";

export default function Login() {

    // form will be handle by react-form-hook

    return (
        <section className=" flex justify-center ">
            <div className="w-11/12 lg:w-[56rem] h-[28rem] bg-slate-100 my-16 flex shadow-[0px_4px_24px_rgba(0,0,0,0.1)] overflow-hidden">
                <div className="hidden w-1/2 h-full bg-white lg:flex justify-center items-center">
                    <Image src={logo} alt="login" className="w-[80%] mx-auto" priority />
                </div>
                <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
                    <form className="flex flex-col gap-y-4 w-full items-center">
                        <input
                            type="email"
                            className="p-2 w-[90%]  focus:outline-primary font-inter"
                            placeholder="Email"
                            required
                            // onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="p-2 w-[90%] focus:outline-primary font-inter"
                            placeholder="Password"
                            required
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="submit"
                            className="p-2 w-[90%] bg-primary font-inter font-semibold text-white  cursor-pointer hover:bg-opacity-90 active:bg-opacity-80"
                            value="Login"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
}
