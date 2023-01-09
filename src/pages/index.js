import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
   return (
      <Layout>
         <main className="lg:relative">
            <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
               <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                     <span className="block xl:inline">
                        Welcome to Travel App {"  "}
                     </span>
                     <span className="block text-green-600 xl:inline">
                        Explore destinations
                     </span>
                  </h1>
                  <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                     #Explore #Destinations
                  </p>
                  <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                     <div className="rounded-md shadow">
                        <Link
                           to="#"
                           className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 md:py-4 md:px-10 md:text-lg"
                        >
                           Explore
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
               <StaticImage
                  className="absolute inset-0 h-full w-full object-cover"
                  src="../images/hero-container.jpg"
                  alt="cover image"
               />
            </div>
         </main>
      </Layout>
   );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
