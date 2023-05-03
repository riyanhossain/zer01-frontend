import React from "react";
import Calculationresults from "./calculationresults";

export default function Calculationofcosts() {
    const [amount, setAmount] = React.useState(0);
    const [showResults, setShowResults] = React.useState(false);

    const calculateAmount = (e) => {
        e.preventDefault();
        setShowResults(true);
    };
    return (
        <section className="container mx-auto px-4 lg:px-8 xl:px-20 py-6 lg:py-12">
            <h1 className="text-3xl font-semibold font-poppins text-addblack">Calculation of costs</h1>

            <p className="text-addblack font-medium font-inter mt-5">Basic calculation parameters:</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                <ul className="font-inter text-addgray list-disc space-y-3">
                    <li className="ml-6">Legal form – trade license for IT services</li>
                    <li className="ml-6">Non-payer of VAT</li>
                </ul>

                <ul className="font-inter text-addgray list-disc space-y-3">
                    <li className="ml-6">Income is marked with a plus sign (+)</li>
                    <li className="ml-6">Keeping a motor vehicle in the accounting books</li>
                </ul>

                <ul className="font-inter text-addgray list-disc space-y-3">
                    <li className="ml-6">Slovak legislation</li>
                    <li className="ml-6">An expense is marked with a minus sign (–)</li>
                </ul>
                <br/>
            </div>

            <div className="p-6 shadow-[0px_4px_24px_rgba(122,122,122,0.1)]">
                <p className="text-lg font-poppins font-medium">Enter Monthly Income</p>

                <form className="grid grid-cols-1 lg:grid-cols-[33%_1fr] gap-5 mt-5" onSubmit={calculateAmount}>
                    <label htmlFor="amount" className="flex flex-col ">
                        <span className="font-poppins text-sm">Gross amount per month</span>

                        <div className="flex items-center mt-2">
                            <div className="flex items-center py-2 px-4 gap-x-2 border-y border-l border-addgray bg-[#D9D9D933]">
                                <span className="font-inter">€</span>
                            </div>
                            <input
                                type="number"
                                name="amount"
                                id="amount"
                                className="w-36 border font-inter border-addgray px-4 py-2 outline-none focus:border-primary"
                                min={2000}
                                max={10000000}
                                maxLength={12}
                                placeholder="4000"
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="px-11 py-2.5 font-inter font-semibold text-white bg-primary hover:bg-opacity-80 active:bg-opacity-95"
                            >
                                Calculate
                            </button>
                        </div>
                    </label>

                    <ul className="font-inter text-addgray list-disc space-y-3">
                        <li className="ml-6">You have the possibility to change the currency</li>
                        <li className="ml-6">The calculations are performed based on current legislaslation</li>
                    </ul>
                </form>
            </div>

            {showResults && (
                <div className="overflow-x-scroll hideScrollBar">
                    <Calculationresults amount={amount} />
                </div>
            )}
        </section>
    );
}
