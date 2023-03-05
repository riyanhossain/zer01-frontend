import React from "react";

export default function Addnewjob() {
    return (
        <form className="px-4 py-6 border border-[#C5C3C380] grid grid-cols-[420px_1fr] gap-x-10">
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
                        />
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
                        />
                    </label>
                </div>

                <div className="py-3">
                    <label htmlFor="options">
                        <span className="text-lg font-poppins text-[#464646] font-medium">Status</span>
                        <select
                            name="options"
                            className="w-full font-poppins text-[#2C2E3E] text-sm font-medium border border-[#E3E3E3] mt-1  p-2 outline-none focus:border-primary"
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
                        <textarea
                            name="description"
                            id="description"
                            rows="10"
                            className="w-full border border-[#E3E3E3] focus:border-primary outline-none leading-[25px] font-inter px-6 py-2"
                            placeholder="Description"
                        ></textarea>
                    </label>
                </div>

                <div>
                    <label htmlFor="description" className="space-y-2">
                        <span className="leading-[25px] font-inter">Project Requirements</span>
                        <textarea
                            name="description"
                            id="description"
                            rows="10"
                            className="w-full border border-[#E3E3E3] focus:border-primary outline-none leading-[25px] font-inter px-6 py-2"
                            placeholder="Description"
                        ></textarea>
                    </label>
                </div>

                <div>
                    <label htmlFor="description" className="space-y-2">
                        <span className="leading-[25px] font-inter">Language skills</span>
                        <textarea
                            name="description"
                            id="description"
                            rows="4"
                            className="w-full border border-[#E3E3E3] focus:border-primary outline-none leading-[25px] font-inter px-6 py-2"
                            placeholder="Description"
                        ></textarea>
                    </label>
                </div>

                <div className="flex justify-between">
                    <button className="bg-primary text-white px-6 py-2 font-inter text-sm font-medium hover:bg-opacity-80">Save</button>
                    <div className="flex gap-x-8">
                        <button className="bg-[#FF0000] text-white px-6 py-2 font-inter text-sm font-medium hover:bg-opacity-80">Clear</button>

                        <button className="bg-addgray text-white px-6 py-2 font-inter text-sm font-medium hover:bg-opacity-80">Close</button>
                    </div>
                </div>
            </div>
        </form>
    );
}
