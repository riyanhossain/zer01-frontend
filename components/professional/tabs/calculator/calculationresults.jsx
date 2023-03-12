import React from "react";

export default function Calculationresults({ amount }) {
    const calculateEmployee = () => {
        const employeeContribution = (amount * (2.1 / 100)).toFixed(2);
        const healthInsurance = (amount * (10 / 100)).toFixed(2);
        const socialInsurance = (amount * (25 / 100)).toFixed(2);
        const personalIncomeTax = (amount * (10 / 100)).toFixed(2);
        const netIncome = (amount - healthInsurance - socialInsurance - personalIncomeTax).toFixed(2);
        const netPercent = ((netIncome / amount) * 100).toFixed(2);
        const taxesPercent = (100 - netPercent).toFixed(2);
        return {
            employeeContribution,
            healthInsurance,
            socialInsurance,
            personalIncomeTax,
            netIncome,
            netPercent,
            taxesPercent,
        };
    };

    const calculateSRL = () => {
        const taxOnProfit = (amount * (16 / 100)).toFixed(2);
        const taxOnDividends = ((amount - taxOnProfit) * (8 / 100)).toFixed(2);
        const healthInsurance = 140;
        const netIncome = (amount - taxOnProfit - taxOnDividends - healthInsurance).toFixed(2);
        const netPercent = ((netIncome / amount) * 100).toFixed(2);
        const taxesPercent = (100 - netPercent).toFixed(2);
        return {
            taxOnProfit,
            taxOnDividends,
            healthInsurance,
            netIncome,
            netPercent,
            taxesPercent,
        };
    };

    const calculateMicroSRL = () => {
        const ownEmployee = 620;
        const employeeContribution = (620 * (2.1 / 100)).toFixed(2);
        const healthInsurance = (620 * (10 / 100)).toFixed(2);
        const socialInsurance = (620 * (25 / 100)).toFixed(2);
        const personalIncomeTax = (620 * (10 / 100)).toFixed(2);
        const totalTaxes = (Number(employeeContribution) + Number(healthInsurance) + Number(socialInsurance) + Number(personalIncomeTax)).toFixed(2);
        const taxOnMicro = (amount * (1 / 100)).toFixed(2);
        const taxOnDividends = ((amount - taxOnMicro) * (8 / 100)).toFixed(2);
        const healthInsuranceOnDividends = 140;
        const netIncome = (amount - taxOnMicro - taxOnDividends - healthInsuranceOnDividends).toFixed(2);
        const netPercent = ((netIncome / amount) * 100).toFixed(2);
        const taxesPercent = (100 - netPercent).toFixed(2);
        return {
            ownEmployee,
            employeeContribution,
            healthInsurance,
            socialInsurance,
            personalIncomeTax,
            totalTaxes,
            taxOnMicro,
            taxOnDividends,
            healthInsuranceOnDividends,
            netIncome,
            netPercent,
            taxesPercent,
        };
    };

    const calculatePFA = () => {
        const healthInsurance = 140;
        const socialInsurance = 300;
        const personalIncomeTax = 460;
        const netIncome = (amount - healthInsurance - socialInsurance - personalIncomeTax).toFixed(2);
        const netPercent = ((netIncome / amount) * 100).toFixed(2);
        const taxesPercent = (100 - netPercent).toFixed(2);
        return {
            healthInsurance,
            socialInsurance,
            personalIncomeTax,
            netIncome,
            netPercent,
            taxesPercent,
        };
    };
    return (
        <section className="my-5 py-6 bg-white shadow-[0px_4px_24px_rgba(122,122,122,0.1)] w-[1376px] lg:w-auto ">
            <p className="px-6  text-lg font-poppins font-medium ">Calculated Results</p>

            <div className="py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div></div>
                <div className="flex items-center justify-center">
                    <p className=" font-poppins font-semibold  ">Employee</p>
                </div>
                <div className="flex items-center justify-center">
                    <p className=" font-poppins font-semibold ">SRL profit no employees</p>
                </div>

                <div className="flex items-center justify-center">
                    <p className=" font-poppins font-semibold ">SRL micro 1 employee</p>
                </div>

                <div className="flex items-center justify-center">
                    <p className=" font-poppins font-semibold ">PFA - real</p>
                </div>
            </div>

            <hr />

            <div className=" mt-3 bg-[#F8F8F8] py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="pl-6">
                    <p className="font-inter font-medium">Total monthly income/cost</p>
                </div>
                <div className="flex items-center justify-center">
                    <p className="font-inter font-medium">${amount}</p>
                </div>
                <div className="flex items-center justify-center">
                    <p className="font-inter font-medium">${amount}</p>
                </div>

                <div className="flex items-center justify-center">
                    <p className="font-inter font-medium">${amount}</p>
                </div>

                <div className="flex items-center justify-center">
                    <p className="font-inter font-medium">${amount}</p>
                </div>
            </div>

            <div className=" mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="pl-6">
                    <p className="font-inter">Employer’s contribution</p>
                </div>
                <div className="flex items-center">
                    <p className="font-inter ml-24">${calculateEmployee().employeeContribution}</p>
                </div>
                <div className="flex items-center justify-center"></div>

                <div className="flex items-center justify-center"></div>

                <div className="flex items-center "></div>
            </div>

            <div className=" mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="pl-6">
                    <p className="font-inter">Health Insurance</p>
                </div>
                <div className="flex items-center">
                    <p className="font-inter ml-24">${calculateEmployee().healthInsurance}</p>
                </div>
                <div className="flex items-center justify-center"></div>

                <div className="flex items-center justify-center"></div>

                <div className="flex items-center ">
                    <p className="font-inter ml-[50px]">${calculatePFA().healthInsurance}</p>
                </div>
            </div>

            <div className=" mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="pl-6">
                    <p className="font-inter">Social Insurance</p>
                </div>
                <div className="flex items-center">
                    <p className="font-inter ml-24">${calculateEmployee().socialInsurance}</p>
                </div>
                <div className="flex items-center justify-center"></div>

                <div className="flex items-center justify-center"></div>

                <div className="flex items-center ">
                    <p className="font-inter ml-[50px]">${calculatePFA().socialInsurance}</p>
                </div>
            </div>

            <div className=" mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="pl-6">
                    <p className="font-inter">Personal income tax * might be exempt</p>
                </div>
                <div className="flex items-center">
                    <p className="font-inter ml-24">${calculateEmployee().personalIncomeTax}</p>
                </div>
                <div className="flex items-center justify-center"></div>

                <div className="flex items-center justify-center"></div>

                <div className="flex items-center ">
                    <p className="font-inter ml-[50px]">${calculatePFA().personalIncomeTax}</p>
                </div>
            </div>

            <div className=" mt-3 bg-[#F8F8F8] py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="pl-6">
                    <p className="font-inter font-medium">Expenses</p>
                </div>
            </div>

            <div className=" mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="pl-6">
                    <p className="font-inter ml-6">1 your own employee</p>
                </div>
                <div className="flex items-center"></div>
                <div className="flex items-center "></div>

                <div className="flex items-center ">
                    <p className="font-inter ml-24">${calculateMicroSRL().ownEmployee}</p>
                </div>

                <div className="flex items-center "></div>
            </div>

            <div className=" mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="pl-6">
                    <p className="font-inter ml-6">employer’s contribution</p>
                </div>
                <div className="flex items-center"></div>
                <div className="flex items-center "></div>

                <div className="flex items-center ">
                    <p className="font-inter ml-24">${calculateMicroSRL().employeeContribution}</p>
                </div>

                <div className="flex items-center "></div>
            </div>

            <div className=" mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="pl-6">
                    <p className="font-inter ml-6">Health Insurance</p>
                </div>
                <div className="flex items-center"></div>
                <div className="flex items-center "></div>

                <div className="flex items-center ">
                    <p className="font-inter ml-24">${calculateMicroSRL().healthInsurance}</p>
                </div>

                <div className="flex items-center "></div>
            </div>

            <div className=" mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="pl-6">
                    <p className="font-inter ml-6">Social Insurance</p>
                </div>
                <div className="flex items-center"></div>
                <div className="flex items-center "></div>

                <div className="flex items-center ">
                    <p className="font-inter ml-24">${calculateMicroSRL().socialInsurance}</p>
                </div>

                <div className="flex items-center "></div>
            </div>

            <div className=" mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="pl-6">
                    <p className="font-inter ml-6">Personal income tax * optional</p>
                </div>
                <div className="flex items-center"></div>
                <div className="flex items-center "></div>

                <div className="flex items-center ">
                    <p className="font-inter ml-24">${calculateMicroSRL().personalIncomeTax}</p>
                </div>

                <div className="flex items-center "></div>
            </div>

            <div className=" mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="pl-6">
                    <p className="font-inter ml-6">Total Taxes</p>
                </div>
                <div className="flex items-center"></div>
                <div className="flex items-center "></div>

                <div className="flex items-center ">
                    <p className="font-inter ml-24">${calculateMicroSRL().totalTaxes}</p>
                </div>

                <div className="flex items-center "></div>
            </div>

            <div className=" bg-[#F8F8F8] mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="px-6">
                    <p className="font-inter text-[#434656]">Tax on profit</p>
                </div>
                <div className="flex items-center"></div>
                <div className="flex items-center justify-center">
                    <p className="font-inter ml-[84px] text-[#434656]">${calculateSRL().taxOnProfit}</p>
                </div>

                <div className="flex items-center justify-center"></div>

                <div className="flex items-center "></div>
            </div>

            <div className=" mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="">
                    <p className="font-inter ml-6">Tax on micro</p>
                </div>
                <div className="flex items-center"></div>
                <div className="flex items-center "></div>

                <div className="flex items-center ">
                    <p className="font-inter ml-24 text-[#434656]">${calculateMicroSRL().taxOnMicro}</p>
                </div>

                <div className="flex items-center "></div>
            </div>

            <div className=" bg-[#F8F8F8] mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="px-6">
                    <p className="font-inter text-[#434656]">Tax on dividends</p>
                </div>
                <div className="flex items-center"></div>
                <div className="flex items-center justify-center">
                    <p className="font-inter ml-24 text-[#434656]">${calculateSRL().taxOnDividends}</p>
                </div>

                <div className="flex items-center">
                    <p className="font-inter ml-24 text-[#434656]">${calculateMicroSRL().taxOnDividends}</p>
                </div>

                <div className="flex items-center "></div>
            </div>

            <div className="  mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="px-6">
                    <p className="font-inter text-[#434656]">Health Insurance on dividends</p>
                </div>
                <div className="flex items-center"></div>
                <div className="flex items-center justify-center">
                    <p className="font-inter ml-[72px] text-[#434656]">${calculateSRL().healthInsurance}</p>
                </div>

                <div className="flex items-center">
                    <p className="font-inter ml-24 text-[#434656]">${calculateMicroSRL().healthInsuranceOnDividends}</p>
                </div>

                <div className="flex items-center "></div>
            </div>

            <div className=" bg-[#F8F8F8] mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="px-6">
                    <p className="font-inter text-[#434656]">Net Income</p>
                </div>
                <div className="flex items-center">
                    <p className="font-inter ml-[98px] text-[#434656]">${calculateEmployee().netIncome}</p>
                </div>
                <div className="flex items-center justify-center">
                    <p className="font-inter ml-[108px] text-[#434656]">${calculateSRL().netIncome}</p>
                </div>

                <div className="flex items-center">
                    <p className="font-inter ml-24 text-[#434656]">${calculateMicroSRL().netIncome}</p>
                </div>

                <div className="flex items-center ">
                    <p className="font-inter ml-[50px] text-[#434656]">${calculatePFA().netIncome}</p>
                </div>
            </div>

            <div className="  mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="px-6">
                    <p className="font-inter text-[#434656]">Net%</p>
                </div>
                <div className="flex items-center">
                    <p className="font-inter ml-[98px] text-[#434656]">{calculateEmployee().netPercent}%</p>
                </div>
                <div className="flex items-center justify-center">
                    <p className="font-inter ml-24 text-[#434656]">{calculateSRL().netPercent}%</p>
                </div>

                <div className="flex items-center">
                    <p className="font-inter ml-24 text-[#434656]">{calculateMicroSRL().netPercent}%</p>
                </div>

                <div className="flex items-center ">
                    <p className="font-inter ml-[50px] text-[#434656]">{calculatePFA().netPercent}%</p>
                </div>
            </div>

            <div className=" bg-[#F8F8F8] mt-3  py-2  grid grid-cols-[1fr_240px_240px_240px_150px]">
                <div className="px-6">
                    <p className="font-inter text-[#434656]">Taxes%</p>
                </div>
                <div className="flex items-center">
                    <p className="font-inter ml-[98px] text-[#434656]">{calculateEmployee().taxesPercent}%</p>
                </div>
                <div className="flex items-center justify-center">
                    <p className="font-inter ml-24 text-[#434656]">{calculateSRL().taxesPercent}%</p>
                </div>

                <div className="flex items-center">
                    <p className="font-inter ml-24 text-[#434656]">{calculateMicroSRL().taxesPercent}%</p>
                </div>

                <div className="flex items-center ">
                    <p className="font-inter ml-[50px] text-[#434656]">{calculatePFA().taxesPercent}%</p>
                </div>
            </div>
        </section>
    );
}
