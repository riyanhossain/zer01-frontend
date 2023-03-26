import Link from "next/link";
import { useRouter } from "next/router";

export default function Contact() {
    const router = useRouter();
    return (
        <section className="container mx-auto py-20">
            <div className="max-w-6xl mx-auto w-full p-4 lg:p-12 shadow-[6px_6px_24px_rgba(0,0,0,0.12)] bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="space-y-3">
                        <h1 className="text-[32px] leading-[42px] font-poppins font-semibold text-addblack">
                            Just want to be in touch with the future <span className="text-primary">openings</span>?
                        </h1>
                        <p className="w-full text-lg font-inter text-addgray lg:w-[518px]">
                            You can send us your CV and if something new will pop-out we will reach you.
                        </p>
                    </div>

                    <div className="flex justify-end items-center">
                        <Link
                            href={"/contact"}
                            className="text-white font-inter py-2.5 font-semibold px-10 bg-primary hover:bg-opacity-80 active:bg-opacity-60"
                            onClick={() => router.push("/contact")}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
