import React from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createPosition } from "../../../lib/api/position";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});

export default function Addnewjob() {
    const queryClient = useQueryClient();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            jobType: "fulltime",
            location: "remote",
            status: "all",
        },
    });

    React.useEffect(() => {
        register("description", { required: true });
        register("requirements", { required: true });
        register("language", { required: true });
    }, [register]);

    const onDescriptionChange = (editorState) => {
        setValue("description", editorState);
    };

    const onRequirmentsChange = (editorState) => {
        setValue("requirements", editorState);
    };

    const onLanguagesChange = (editorState) => {
        setValue("language", editorState);
    };

    const description = watch("description");
    const requirments = watch("requirements");
    const languages = watch("language");

    const clearForm = () => {
        setValue("jobTitle", "");
        setValue("jobType", "fulltime");
        setValue("collaborationForm", "");
        setValue("companyName", "");
        setValue("seniorityLevel", "");
        setValue("location", "remote");
        setValue("status", "all");
        setValue("description", "");
        setValue("requirements", "");
        setValue("language", "");
        setValue("rate", "");
        setValue("startDate", "");
        setValue("endDate", "");
    };

    // Mutations
    const mutation = useMutation({
        mutationFn: createPosition,
        onSuccess: (data) => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["position"] });

            toast.success(data?.data.message);

            clearForm();
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message);
        },
    });

    const onSubmit = (data) => {
        // errors && toast.error(errors.root.message);
        mutation.mutate(data);
    };

    return (
        <form
            className="px-4 py-6 w-full border border-[#C5C3C380] grid grid-cols-[420px_minmax(890px,1200px)] gap-x-10"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="space-y-4">
                <div>
                    <label htmlFor="jobtitle" className="space-y-2">
                        <span className="leading-[25px] font-inter">Job Title</span>
                        <input
                            type="text"
                            name="jobtitle"
                            id="jobtitle"
                            className="w-full border border-[#E3E3E3] focus:border-primary outline-none  leading-[25px] font-inter px-6 py-2"
                            placeholder="Java Developer"
                            required
                            {...register("jobTitle")}
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="jobtype" className="space-y-2">
                        <span className="leading-[25px] font-inter">Job Type</span>
                        <select
                            name="jobtype"
                            id="jobtype"
                            className="w-full border border-[#E3E3E3] focus:border-primary outline-none leading-[25px] font-inter px-6 py-2"
                            required
                            {...register("jobType")}
                        >
                            <option value="fulltime">Full-Time</option>
                            <option value="parttime">Part-Time</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label htmlFor="cform" className="space-y-2">
                        <span className="leading-[25px] font-inter">Collaboration form</span>
                        <input
                            type="text"
                            name="cform"
                            id="cform"
                            className="w-full border border-[#E3E3E3] focus:border-primary outline-none leading-[25px] font-inter px-6 py-2"
                            placeholder="B2B SRL"
                            required
                            {...register("collaborationForm")}
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="cname" className="space-y-2">
                        <span className="leading-[25px] font-inter">Company Name</span>
                        <input
                            type="text"
                            name="cname"
                            id="cname"
                            className="w-full border border-[#E3E3E3] focus:border-primary outline-none leading-[25px] font-inter px-6 py-2"
                            placeholder="SC 01 CODE SRL"
                            required
                            {...register("companyName")}
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="level" className="space-y-2">
                        <span className="leading-[25px] font-inter">Seniority level</span>
                        <input
                            type="text"
                            name="level"
                            id="level"
                            className="w-full border border-[#E3E3E3] focus:border-primary outline-none leading-[25px] font-inter px-6 py-2"
                            placeholder="5"
                            required
                            {...register("seniorityLevel")}
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="rate" className="space-y-2">
                        <span className="leading-[25px] font-inter">Rate</span>
                        <input
                            type="text"
                            name="level"
                            id="level"
                            className="w-full border border-[#E3E3E3] focus:border-primary outline-none leading-[25px] font-inter px-6 py-2"
                            placeholder="10/h"
                            required
                            {...register("rate")}
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="location" className="space-y-2">
                        <span className="leading-[25px] font-inter">Location</span>
                        <select
                            name="location"
                            id="location"
                            className="w-full border border-[#E3E3E3] focus:border-primary outline-none leading-[25px] font-inter px-6 py-2"
                            required
                            {...register("location")}
                        >
                            <option value="remote">Remote</option>
                            <option value="onsite">On-site</option>
                            <option value="hybrid">Hybrid</option>
                        </select>
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

                <div className="py-3">
                    <label htmlFor="options">
                        <span className="leading-[25px] font-inter">Status</span>
                        <select
                            name="options"
                            className="w-full border border-[#E3E3E3] focus:border-primary outline-none leading-[25px] font-inter px-6 py-2"
                            required
                            {...register("status")}
                        >
                            <option value="all">All</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="closed">Closed</option>
                        </select>
                    </label>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <label htmlFor="description" className="space-y-2">
                        <span className="leading-[25px] font-inter">Project Description</span>
                        <QuillNoSSRWrapper
                            theme="snow"
                            value={description}
                            placeholder="Description"
                            name="description"
                            onChange={onDescriptionChange}
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="requirements" className="space-y-2">
                        <span className="leading-[25px] font-inter">Project Requirements</span>
                        <QuillNoSSRWrapper
                            theme="snow"
                            value={requirments}
                            placeholder="Requirements"
                            name="requirements"
                            onChange={onRequirmentsChange}
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="language" className="space-y-2">
                        <span className="leading-[25px] font-inter">Language skills</span>
                        <QuillNoSSRWrapper theme="snow" value={languages} placeholder="Language" name="language" onChange={onLanguagesChange} />
                    </label>
                </div>

                <div className="flex justify-between">
                    <button type="submit" className="bg-primary text-white px-6 py-2 font-inter text-sm font-medium hover:bg-opacity-80">
                        Save
                    </button>
                    <div className="flex gap-x-8">
                        <button
                            type="button"
                            onClick={clearForm}
                            className="bg-[#FF0000] text-white px-6 py-2 font-inter text-sm font-medium hover:bg-opacity-80"
                        >
                            Clear
                        </button>

                        <button
                            className="bg-addgray text-white px-6 py-2 font-inter text-sm font-medium hover:bg-opacity-80"
                            onClick={() => router("/dashboard/positions")}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
