import { Slice } from "gatsby";
import React from "react";

export default function Layout({ children }) {
    return (
        <div className="max-w-7xl mx-auto">
            <Slice alias="navbar" />
            {children}
        </div>
    );
}
