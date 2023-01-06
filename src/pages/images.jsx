import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

export default function Images() {
   const data = useStaticQuery(graphql`
      query MyQuery {
         allImageSharp {
            nodes {
               gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  transformOptions: { fit: COVER }
               )
               id
            }
         }
      }
   `);
   const images = data?.allImageSharp.nodes;

   return (
      <Layout>
         <h1 className="text-center text-3xl font-semibold my-5 underline decoration-green-500">
            Image Gallery
         </h1>
         <div className="flex flex-wrap justify-center gap-5">
            {images.map((data) => (
               <div key={data.id} className="flex justify-center w-96 h-96">
                  <GatsbyImage
                     image={getImage(data)}
                     alt="images"
                     objectFit="cover"
                     className="hover:scale-110 transition-all duration-200"
                  />
               </div>
            ))}
         </div>
      </Layout>
   );
}
