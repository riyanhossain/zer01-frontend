import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllPositions } from "@/lib/api/position";
import ReactPaginate from "react-paginate";

export default function Positionsgrid() {
    const [page, setPage] = React.useState(1);
    const [limit, setLimit] = React.useState(9);
    const { data } = useQuery({
        queryKey: ["positions", page, limit],
        queryFn: () => getAllPositions({ page, limit }),
    });

    const handlePageClick = (e) => {
        setPage((page) => e.selected + 1);
    };

    console.log(data?.data);
    return (
        <section className="container mx-auto px-4 lg:px-8 xl:px-20 py-6 lg:py-12">
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
                            <h1 className="text-lg font-semibold font-poppins">{position.jobTitle}</h1>
                            <p className="text-sm font-semibold text-primary font-inter">{position.rate}</p>
                            <div className="py-5">
                                <hr className="border-[#E7E7E7]" />
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
                                <p className="font-inter text-xs leading-[22px] text-addgray ">{position.startDate}</p>
                                <p className="font-inter text-xs leading-[22px] text-addgray ">{position.endDate}</p>
                            </div>

                            <div className="py-5">
                                <hr className="border-[#E7E7E7]" />
                            </div>

                            <button className="w-full bg-primary text-white font-inter font-semibold text-sm px-6 py-2 hover:bg-opacity-80 active:bg-opacity-90">
                                View Detail
                            </button>
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
        </section>
    );
}
