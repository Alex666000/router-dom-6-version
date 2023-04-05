import React from "react";
import {Outlet} from "react-router-dom";

export const Invoices = () => {
    return (
        <div className={"text-center"}>
            <h1>Invoices</h1>
            <Outlet></Outlet>
        </div>
    );
};

