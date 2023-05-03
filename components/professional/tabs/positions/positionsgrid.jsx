import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllPositions } from "@/lib/api/position";
import ReactPaginate from "react-paginate";
import { useForm } from "react-hook-form";

export default function Positionsgrid({ setDetailsMode, setPositionId }) {
    const [page, setPage] = React.useState(1);
    const [limit, setLimit] = React.useState(9);
    const [Keywords, setKeywords] = React.useState("");

    const { data } = useQuery({
        queryKey: ["positions", page, limit, Keywords],
        queryFn: () => getAllPositions({ page, limit, search: Keywords }),
    });

    const { register, handleSubmit, watch, setValue } = useForm();

    const onFilter = (data) => {
        setKeywords(data.search);
    };

    const clearFilter = () => {
        setKeywords("");
        setValue("search", "");
    };

    const handlePageClick = (e) => {
        setPage(e.selected + 1);
    };

    return (
        <section className="container mx-auto px-4 lg:px-8 xl:px-20 py-6 lg:py-12">
            <div className="flex flex-col lg:flex-row gap-x-10">
            <div className="p-4 drop-shadow-[0px_4px_24px_rgba(122,122,122,0.1)] bg-white">
                <div className="flex items-center gap-x-3 border-b border-[#C7C7C7] py-2">
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.4687 0.059082H0.531248C0.390352 0.059082 0.255227 0.110822 0.155599 0.202921C0.0559706 0.295019 0 0.419931 0 0.550177V1.37031C9.93336e-05 1.4863 0.0250292 1.60112 0.073353 1.70816C0.121677 1.81521 0.192439 1.91235 0.281562 1.994L6.37498 7.71034V12.7195L7.43747 13.0927V7.42551C7.43788 7.36088 7.42448 7.29681 7.39804 7.23697C7.3716 7.17714 7.33265 7.12272 7.28341 7.07683L1.0625 1.33102V1.04127H15.9374V1.34084L9.73778 7.07683C9.68469 7.12106 9.6418 7.17474 9.61167 7.23465C9.58155 7.29456 9.56481 7.35948 9.56247 7.42551V13.9129L10.625 14.3008V7.67106L16.7184 2.02346C16.8089 1.93974 16.8805 1.84015 16.9288 1.73051C16.9772 1.62088 17.0014 1.50342 16.9999 1.38504V0.550177C16.9999 0.419931 16.944 0.295019 16.8443 0.202921C16.7447 0.110822 16.6096 0.059082 16.4687 0.059082V0.059082Z"
                            fill="#398378"
                        />
                        <path
                            d="M7.03736 12.9484L10.1685 14.143L9.93791 7.32193L16.2421 1.46684V0.782715H0.762759L0.555542 1.33L7.03736 7.70493V12.9484Z"
                            fill="#398378"
                        />
                    </svg>

                    <span className="font-poppins text-lg text-primary">Filter</span>
                </div>

                <form className=" space-y-3" onSubmit={handleSubmit(onFilter)}>
                    <div className="py-3  border-b border-[#C7C7C7]">
                        <label htmlFor="search">
                            <span className="text-lg font-poppins text-[#464646] font-medium">Search</span>
                            <input
                                type="search"
                                name="search"
                                id="search"
                                value={watch("search")}
                                className="w-full border border-[#E3E3E3] mt-1  p-2 outline-none focus:border-primary"
                                placeholder="Keywords"
                                {...register("search")}
                            />
                        </label>
                    </div>

                    {/* submit button */}

                    <div className="py-3 flex justify-center gap-x-3">
                        <button type="submit" className=" bg-primary text-white font-inter font-semibold py-2.5 px-8">
                            Apply
                        </button>

                        <button type="button" className=" bg-red-500 text-white font-inter font-semibold py-2.5 px-8" onClick={clearFilter}>
                            Clear
                        </button>
                    </div>
                </form>
                </div>
            <div className="p-4 lg:p-8 shadow-[0px_4px_24px_rgba(0,0,0,0.1)]">
                <h1 className="font-poppins font-semibold text-2xl lg:text-3xl">Positions</h1>

                <p className="mt-6 font-inter font-medium text-addblack leading-[30px]">
                    Are you interested in IT freelancing? Don’t know how and where to start?
                </p>
                <p className="font-inter text-addgray leading-[30px]">
                    It’s very simple. Choose a unique IT project and start your freelance career with us.
                </p>

                <div className="mt-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data?.data?.positions.map((position, key) => (
                        <div key={key} className="p-5 shadow-[0px_0px_16px_rgba(68,68,68,0.08)] bg-white ">
                            <h1 className="text-lg font-semibold font-poppins text-center">{position.jobTitle}</h1>
                            <div className="py-5">
                                <hr className="border-[#E7E7E7]" />
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-sm font-semibold text-primary font-inter">{position.rate}</p>
                                <p className="text-sm font-semibold text-primary font-inter">{position.collaborationForm}</p>
                            </div>
                           

                            <div className="flex justify-between items-center">
                                <p className="font-inter text-xs leading-[22px] text-addblack ">{position.location}</p>
                                <p className="font-inter text-xs leading-[22px] text-addblack ">{position.jobType}</p>
                            </div>

                            <p className="text-sm text-addgray mt-5">{position.description?.slice(0, 120)}...</p>

                            <div className="flex justify-between items-center mt-5">
                                <p className="font-inter text-xs leading-[22px] text-addblack ">Start Date</p>
                                <p className="font-inter text-xs leading-[22px] text-addblack ">End Date</p>
                            </div>

                            <div className="flex justify-between items-center ">
                                <p className="font-inter text-xs leading-[22px] text-addgray "> {new Date(position.startDate).toLocaleDateString('en-GB') || ""}</p>
                                <p className="font-inter text-xs leading-[22px] text-addgray "> {new Date(position.endDate).toLocaleDateString('en-GB') || ""}</p>
                            </div>

                            <div className="py-5">
                                <hr className="border-[#E7E7E7]" />
                            </div>

                            {position.status === "Active" ? (
                                <button
                                    className="w-full bg-primary text-white font-inter font-semibold text-sm px-6 py-2 hover:bg-opacity-80 active:bg-opacity-90"
                                    onClick={() => {
                                        setDetailsMode(true);
                                        setPositionId(position._id);
                                    }}
                                >
                                    View Detail
                                </button>
                            ) : (
                                    <button
                                        className="w-full bg-addgray text-white font-inter font-semibold text-sm px-6 py-2 hover:bg-opacity-80 active:bg-opacity-90"
                                    // onClick={() => {
                                    //     setDetailsMode(true);
                                    //     setPositionId(position._id);
                                    // }}
                                    >
                                        Closed
                                    </button>
                                )}
                        </div>
                    ))}
                    </div>
                    <div className="flex justify-between items-center mt-10">
                        <div className="flex items-center gap-x-3 text-sm text-[#333] font-inter">
                            <p>Show</p>
                            <select
                                name=""
                                id=""
                                className="px-4 py-1.5 border border-addwhite outline-none focus:border-primary"
                                onChange={(e) => setLimit(Number(e.target.value))}
                            >
                                <option value="9">9</option>
                                <option value="18">18</option>
                                <option value="27">27</option>
                                <option value="36">36</option>
                            </select>
                            <p>
                                entries{" "}
                                <span className="text-[#717171]">
                                    {page * limit - limit + 1} to {page * limit} of {data?.data?.totalCount} entries
                            </span>
                            </p>
                        </div>

                        <div>
                            {data?.data?.pageCount > 1 && (
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel="next"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={2}
                                    pageCount={data?.data.pageCount || 1}
                                    previousLabel="previous"
                                    renderOnZeroPageCount={null}
                                    className="flex justify-center items-center gap-x-2"
                                    pageLinkClassName="text-sm bg-primary  border border-slate-300 dark:border-slate-800 rounded w-8 h-8 flex justify-center items-center hover:bg-primary hover:text-white "
                                    previousLinkClassName="text-sm text-gray-700 bg-white hover:bg-primary border border-slate-300  rounded w-24 h-8 flex justify-center items-center hover:bg-primary hover:text-white"
                                    nextLinkClassName="text-sm text-gray-700  bg-white hover:bg-primary  border border-slate-300 rounded w-24 h-8 flex justify-center items-center hover:bg-primary hover:text-white"
                                    breakLinkClassName="text-sm text-gray-700  bg-white dark:bg-slate-900 hover:bg-slate-200  border border-slate-300  rounded w-8 h-8 flex justify-center items-center"
                                    activeLinkClassName={
                                        "text-sm bg-[#398378]  font-semibold  rounded w-8 h-8 flex justify-center items-center  text-white"
                                    }
                                />
                            )}
                        </div>
                    </div>
                    </div>
            </div>
        </section>
    );
}