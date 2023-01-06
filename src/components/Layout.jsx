import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
   return (
      <div className="max-w-7xl mx-auto">
         <Navbar />
         {children}
      </div>
   );
}
