import React from "react";
import {getInvoices} from "components/data";
import {Link} from "react-router-dom";

export const Invoices = () => {
    const invoices = getInvoices()

    return (
        <main className={"text-center"}>
           <div className={'flex flex-col gap-3'}>
               {invoices.map((invoices) => {
                   return <Link
                       key={invoices.number}
                       className={'bg-grey-200'}
                       to={`/invoices/${invoices.number}`}
                       >
                       {invoices.name}
                   </Link>
               })}
           </div>
        </main>
    );
};

