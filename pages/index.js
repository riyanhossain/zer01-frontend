import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar/navbar.jsx";
import Hero from "@/components/home/hero";
import Latest from "@/components/home/latest";
import About from "@/components/home/about";
import Professional from "@/components/home/professional";
import Companies from "@/components/home/companies";
import Contact from "@/components/home/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <main>
                <Hero />

                <Latest />

                <About />

                <Professional />

                <Companies />

                <Contact />
            </main>
        </>
    );
}
