import React from "react";
import { createPosition } from "@/lib/api/position";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import ImageUploading from "react-images-uploading";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});

export default function Order() {
    const queryClient = useQueryClient();
    const router = useRouter();
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    const acceptType = ["pdf", "application/pdf"];

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        setImages(imageList);
        setValue("attatchment", imageList[0]);
    };

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            jobType: "Full-Time",
            location: "Remote",
            status: "Order",
            collaborationForm: "None",
        },
    });

    // const onDescriptionChange = (editorState) => {
    //     setValue("description", editorState);
    // };

    const onRequirmentsChange = (editorState) => {
        setValue("requirements", editorState);
    };

    const onLanguagesChange = (editorState) => {
        setValue("language", editorState);
    };

    // const description = watch("description");
    const requirments = watch("requirements");
    const languages = watch("language");

    const clearForm = () => {
        setValue("jobTitle", "");
        setValue("jobType", "Full-Time");
        setValue("collaborationForm", "None");
        setValue("companyName", "");
        setValue("seniorityLevel", "");
        setValue("location", "Remote");
        setValue("status", "Order");
        setValue("description", "");
        setValue("requirements", "");
        setValue("language", "");
        setValue("rate", "");
        setValue("startDate", "");
        setValue("endDate", "");
        setValue("name", "");
        setValue("phone", "");
        setValue("email", "");
        setValue("address", "");
        setValue("attachment", "");
    };

    // Mutations
    const mutation = useMutation({
        mutationFn: createPosition,
        onSuccess: (data) => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["positions"] });

            toast.success(data?.data.message);

            clearForm();
        },
        onError: (error) => {
            toast.error(error.message || "Something went wrong!");
        },
    });

    const onSubmit = (data) => {
        // errors && toast.error(errors.root.message);
        mutation.mutate(data);
    };
    return (
        <section className="py-8 lg:py-12 container mx-auto px-4 lg:px-8 xl:px-20 ">
            <div className="bg-white shadow-[0px_0px_24px_rgba(0,0,0,0.08)] p-5">
                <h1 className=" text-2xl lg:text-3xl text-addblack font-poppins font-semibold">Order of IT Specialist</h1>
                <p className="font-inter leading-[30px] text-addgray mt-8">
                    By sending a message through this form, S.C. 01 CODE S.R.L, CLUJ-NAPOCA, CLUJ, ROMÂNIA, CUI: 47254471,
                    authorized to process my personal data in the range of e-mail address and telephone number on the basis of pre-contractual
                    relations for the purpose of processing my request. I confirm that I've read the information in the{" "}
                    <Link href={"/privacy"} className="text-primary">
                        Privacy Policy
                    </Link>
                </p>

                <hr className="my-3" />

                <form className="grid grid-cols-1 lg:grid-cols-4 gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <GoogleReCaptcha onVerify={(token) => setValue("token", token)} />
                    <label htmlFor="name">
                        <span className="font-poppins text-sm">Contact Name</span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Contact Name"
                            id="name"
                            className="w-full font-poppins border border-addwhite focus:border-primary outline-none  px-3 py-2 mt-2 placeholder:text-addgray text-sm"
                            required
                            {...register("name", { required: "Name is required" })}
                        />
                    </label>

                    <label htmlFor="phone">
                        <span className="font-poppins text-sm">Phone Number</span>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+40 123 123 123"
                            id="name"
                            className="w-full font-poppins border border-addwhite focus:border-primary outline-none  px-3 py-2 mt-2 placeholder:text-addgray text-sm"
                            required
                            {...register("phone", { required: "Phone number is required" })}
                        />
                    </label>

                    <label htmlFor="email">
                        <span className="font-poppins text-sm">Email</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            id="email"
                            className="w-full font-poppins border border-addwhite focus:border-primary outline-none  px-3 py-2 mt-2 placeholder:text-addgray text-sm"
                            required
                            {...register("email", { required: "Email is required" })}
                        />
                    </label>

                    <label htmlFor="cname">
                        <span className="font-poppins text-sm">Company Name</span>
                        <input
                            type="text"
                            name="cname"
                            placeholder="Company Name"
                            id="cname"
                            className="w-full font-poppins border border-addwhite focus:border-primary outline-none  px-3 py-2 mt-2 placeholder:text-addgray text-sm"
                            required
                            {...register("companyName", { required: "Company name is required" })}
                        />
                    </label>

                    <label htmlFor="salary">
                        <span className="font-poppins text-sm">Rate/Salary</span>
                        <input
                            type="text"
                            name="salary"
                            placeholder="$0 - $1000"
                            id="salary"
                            className="w-full font-poppins border border-addwhite focus:border-primary outline-none  px-3 py-2 mt-2 placeholder:text-addgray text-sm"
                            required
                            {...register("rate", { required: "Rate/Salary is required" })}
                        />
                    </label>

                    <label htmlFor="jname">
                        <span className="font-poppins text-sm">Position/Job Name</span>
                        <input
                            type="text"
                            name="jname"
                            placeholder="Position/Job Name"
                            id="jname"
                            className="w-full font-poppins border border-addwhite focus:border-primary outline-none  px-3 py-2 mt-2 placeholder:text-addgray text-sm"
                            required
                            {...register("jobTitle", { required: "Job name is required" })}
                        />
                    </label>

                    <label htmlFor="colForm">
                        <span className="font-poppins text-sm">Collaboration Form</span>
                        <select
                            name="collaborationForm"
                            id="collaborationForm"
                            className="w-full font-poppins border border-addwhite focus:border-primary outline-none  px-3 py-2 mt-2 placeholder:text-addgray text-sm"
                            required{...register("collaborationForm")}
                        >
                            <option value="Remote">B2B</option>
                            <option value="On-Site">Employee</option>
                        </select>
                    </label>

                    <div>
                        <label htmlFor="level" className="space-y-2">
                            <span className="leading-[25px] font-inter">Seniority level</span>
                            <input
                                type="text"
                                name="level"
                                id="level"
                                className="w-full font-poppins border border-addwhite focus:border-primary outline-none  px-3 py-2 mt-2 placeholder:text-addgray text-sm"
                                placeholder="Senior level, >5 years"
                                required
                                {...register("seniorityLevel")}
                            />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="sdate" className="space-y-2">
                            <span className="leading-[25px] font-inter">Start date</span>
                            <input
                                type="date"
                                name="sdate"
                                id="sdate"
                                className="w-full border border-[#E3E3E3] focus:border-primary outline-none leading-[25px] font-inter px-6 py-2"
                                placeholder="Start date"
                                required
                                {...register("startDate")}
                            />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="ldate" className="space-y-2">
                            <span className="leading-[25px] font-inter">End date</span>
                            <input
                                type="date"
                                name="ldate"
                                id="ldate"
                                className="w-full border border-[#E3E3E3] focus:border-primary outline-none leading-[25px] font-inter px-6 py-2"
                                placeholder="Last date"
                                required
                                {...register("endDate")}
                            />
                        </label>
                    </div>

                    <label htmlFor="adress" className="space-y-2">
                        <span className="leading-[25px] font-inter">Company Location</span>
                            <input
                                type="text"
                                name="adress"
                                placeholder="Enter location"
                                id="adress"
                                className="w-full border border-[#E3E3E3] focus:border-primary outline-none leading-[25px] font-inter px-6 py-2"
                                required
                                {...register("address", { required: "Location is required" })}
                            />
                        </label>

                    <div>
                        <label htmlFor="location" className="space-y-2">
                            <span className="leading-[25px] font-inter">Work Location</span>
                            <select
                                name="location"
                                id="location"
                                className="w-full border border-[#E3E3E3] focus:border-primary outline-none leading-[10px] font-inter px-6 py-2"
                                required
                                {...register("location")}
                            >
                                <option value="Remote">Remote</option>
                                <option value="On-Site">On-site</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </label>
                    </div>

                    <div className=" lg:col-span-4">
                        <label htmlFor="description">
                            <span className="font-poppins text-sm">Enter description</span>
                            <textarea
                                type="text"
                                rows={5}
                                name="description"
                                placeholder="Please enter the description for this position."
                                id="description"
                                className="w-full font-poppins border border-addwhite focus:border-primary outline-none  px-3 py-2 mt-2 placeholder:text-addgray text-sm"
                                required
                                {...register("description", { required: "Description is required" })}
                            />
                        </label>
                    </div>
                    <div className=" lg:col-span-4">
                        <label htmlFor="requirements" className="space-y-2">
                            <span className="leading-[25px] font-inter">Enter Requirements</span>
                            <QuillNoSSRWrapper
                                theme="snow"
                                value={requirments}
                                placeholder="Please add all the requirements for this position."
                                name="requirements"
                                onChange={onRequirmentsChange}
                            />
                        </label>
                    </div>

                    <div className=" lg:col-span-4">
                        <label htmlFor="language" className="space-y-2">
                            <span className="leading-[25px] font-inter">Language skills</span>
                            <QuillNoSSRWrapper theme="snow" value={languages} placeholder="Please add the languages mandatory for this position." name="language" onChange={onLanguagesChange} />
                        </label>
                    </div>
                    <div className="lg:col-span-4">
                    <ImageUploading
                        acceptType={acceptType}
                        multiple={false}
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        allowNonImageType="true"
                        dataURLKey="data_url"
                    >
                        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                                <div className="w-[80%] lg:w-[100%] flex items-center justify-center">
                                {images && images.length > 0 ? (
                                    <div className="w-full h-20 flex items-center justify-center">
                                        {images[0].file.name}{" "}
                                        <button type="button" className="ml-2 text-primary" onClick={onImageRemoveAll}>
                                            X
                                        </button>
                                    </div>
                                ) : (
                                        <button
                                            type="button"
                                            className={`border-addgray border-dashed border-[1.5px] w-full flex flex-col justify-center items-center p-4 gap-y-3 ${isDragging ? "bg-[#F5F5F5]" : ""
                                                }`}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                        >
                                            <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M9.86275 2.85175C11.9866 1.02029 14.6955 0.00879434 17.5 0C23.2162 0 27.9614 4.25 28.4778 9.73038C31.8608 10.2085 34.5 13.0411 34.5 16.5176C34.5 20.3341 31.3168 23.375 27.4599 23.375H21.75C21.4682 23.375 21.198 23.2631 20.9987 23.0638C20.7994 22.8645 20.6875 22.5943 20.6875 22.3125C20.6875 22.0307 20.7994 21.7605 20.9987 21.5612C21.198 21.3619 21.4682 21.25 21.75 21.25H27.462C30.2054 21.25 32.375 19.0995 32.375 16.5176C32.375 13.9336 30.2075 11.7831 27.4599 11.7831H26.3974V10.7206C26.3995 6.00313 22.447 2.125 17.5 2.125C15.2047 2.13417 12.9883 2.96317 11.2504 4.4625C9.64175 5.848 8.80025 7.51825 8.80025 8.82938V9.78137L7.85462 9.8855C4.886 10.2106 2.625 12.648 2.625 15.5507C2.625 18.6681 5.23875 21.25 8.53463 21.25H13.25C13.5318 21.25 13.802 21.3619 14.0013 21.5612C14.2006 21.7605 14.3125 22.0307 14.3125 22.3125C14.3125 22.5943 14.2006 22.8645 14.0013 23.0638C13.802 23.2631 13.5318 23.375 13.25 23.375H8.53463C4.1295 23.375 0.5 19.9028 0.5 15.5507C0.5 11.8044 3.19025 8.70187 6.75175 7.91562C7.05562 6.08175 8.235 4.25425 9.86275 2.85175Z"
                                                    fill="#A0A3BD"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M16.7481 8.81026C16.8468 8.71131 16.9641 8.63281 17.0931 8.57924C17.2222 8.52568 17.3606 8.49811 17.5004 8.49811C17.6401 8.49811 17.7785 8.52568 17.9076 8.57924C18.0367 8.63281 18.1539 8.71131 18.2526 8.81026L24.6276 15.1853C24.8271 15.3848 24.9392 15.6554 24.9392 15.9375C24.9392 16.2197 24.8271 16.4902 24.6276 16.6898C24.4281 16.8893 24.1575 17.0013 23.8754 17.0013C23.5932 17.0013 23.3226 16.8893 23.1231 16.6898L18.5629 12.1274V30.8125C18.5629 31.0943 18.4509 31.3646 18.2517 31.5638C18.0524 31.7631 17.7822 31.875 17.5004 31.875C17.2186 31.875 16.9483 31.7631 16.7491 31.5638C16.5498 31.3646 16.4379 31.0943 16.4379 30.8125V12.1274L11.8776 16.6898C11.6781 16.8893 11.4075 17.0013 11.1254 17.0013C10.8432 17.0013 10.5726 16.8893 10.3731 16.6898C10.1736 16.4902 10.0615 16.2197 10.0615 15.9375C10.0615 15.6554 10.1736 15.3848 10.3731 15.1853L16.7481 8.81026Z"
                                                    fill="#A0A3BD"
                                                />
                                            </svg>

                                            <p className="text-sm font-inter text-addgray">
                                                Drop your files here, or <span className="text-primary cursor-pointer">Upload</span>
                                            </p>

                                            <p className="text-sm font-inter text-addgray">PDF, Max size: 5MB</p>
                                        </button>
                                    )}
                            </div>
                        )}
                        </ImageUploading>
                        </div>

                    <div className="lg:col-span-4 flex justify-center lg:justify-end w-full">
                        <input
                            type="submit"
                            value="Send Order"
                            className="text-white font-inter font-semibold bg-primary py-3 px-8 hover:bg-opacity-70 active:bg-opacity-80 cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
}
