import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

export default function Destinations() {
   return (
      <Layout>
         <h1 className="text-center text-3xl font-semibold my-5 underline decoration-green-500">
            Destinations
         </h1>
         <div className="flex flex-wrap justify-center gap-5">
            <div className="relative h-96 w-96">
               <div className="absolute h-full flex justify-center hover:opacity-30 transition-all duration-400">
                  <StaticImage
                     src="../images/dubai.avif"
                     alt="dubai"
                     objectFit="cover"
                  />
               </div>
               <div className="h-full flex justify-center items-center">
                  <h1 className="text-black text-3xl"> Dubai</h1>
               </div>
            </div>
            <div className="relative h-96 w-96">
               <div className="absolute h-full flex justify-center hover:opacity-30 transition-all duration-400">
                  <StaticImage
                     src="../images/bali.avif"
                     alt="dubai"
                     objectFit="cover"
                  />
               </div>
               <div className="h-full flex justify-center items-center">
                  <h1 className="text-black text-3xl"> Bali</h1>
               </div>
            </div>
            <div className="relative h-96 w-96">
               <div className="absolute h-full flex justify-center hover:opacity-30 transition-all duration-400">
                  <StaticImage
                     src="../images/maldives.avif"
                     alt="dubai"
                     objectFit="cover"
                  />
               </div>
               <div className="h-full flex justify-center items-center">
                  <h1 className="text-black text-3xl"> Maldives</h1>
               </div>
            </div>
         </div>
      </Layout>
   );
}
