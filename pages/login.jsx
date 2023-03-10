import React from "react";
import logo from "@/assets/footer/logo.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login } from "@/lib/api/login";
import { UserContext } from "@/context/userContext";

export default function Login() {
    const { state, dispatch } = React.useContext(UserContext);

    const router = useRouter();
    // form will be handle by react-form-hook
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // react-query
    const mutation = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            dispatch({
                type: "SET_USER",
                payload: {
                    user: data.data.user,
                    token: data.data.token,
                },
            });
            router.push("/dashboard/positions");
        },
        onError: (error) => {
            toast.error(error?.response.data.message);
        },
    });

    const onSubmit = (data) => {
        mutation.mutate(data);
    };

    return (
        <section className=" flex justify-center ">
            <div className="w-11/12 lg:w-[56rem] h-[28rem] bg-slate-100 my-16 flex shadow-[0px_4px_24px_rgba(0,0,0,0.1)] overflow-hidden">
                <div className="hidden w-1/2 h-full bg-white lg:flex justify-center items-center">
                    <Image src={logo} alt="login" className="w-[80%] mx-auto" priority />
                </div>
                <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
                    <form className="flex flex-col gap-y-4 w-full items-center" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="email"
                            className="p-2 w-[90%]  focus:outline-primary font-inter"
                            placeholder="Email"
                            required
                            {...register("email", { required: true })}
                        />
                        <input
                            type="password"
                            className="p-2 w-[90%] focus:outline-primary font-inter"
                            placeholder="Password"
                            required
                            {...register("password", { required: true })}
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
