import React from "react";
import {useParams} from "react-router-dom";

const Bills = () => {
    let params = useParams()

    // console.log(params.invoiceId);

    return (
        <h1>{params.invoiceId}</h1>
    );
};

export default Bills;