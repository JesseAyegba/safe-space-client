import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/ui/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-dark-bg h-[calc(100vh_-_5rem)] flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl lg:text-7xl font-bold text-center max-w-3xl mx-auto mb-8">
          Manage all your files in one place
        </h1>
        <Link href="">
          <a className="bg-brand-purple w-36 text-center text-white text-xl font-bold rounded-xl py-4 px-4 mx-auto">
            Get started
          </a>
        </Link>
      </section>
    </div>
  );
};

export default Home;
