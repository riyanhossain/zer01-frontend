

export default function Contact() {
    return (
        <section className="container mx-auto py-20">
            <div className="max-w-6xl mx-auto w-full p-4 lg:p-12 shadow-[6px_6px_24px_rgba(0,0,0,0.12)] bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="space-y-3">
                        <h1 className="text-[32px] leading-[42px] font-poppins font-semibold text-addblack">Need a Customize Solution?</h1>
                        <p className="w-full text-lg font-inter text-addgray lg:w-[518px]">
                            we will find a solution for you We will give you advice and help you successfully implement IT Outstanding in your
                            company.
                        </p>
                    </div>

                    <div className="flex justify-end items-center">
                        <button className="text-white font-inter py-2.5 font-semibold px-10 bg-primary hover:bg-opacity-80 active:bg-opacity-60">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
