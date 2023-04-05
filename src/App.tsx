import React from "react";
import "./App.css";
import {Link, Outlet} from "react-router-dom";

function App(props: any) {

       return (
        <div className={'container mx-auto'}>
            <nav className={'bg-gray-100 flex gap-3'}>
                <Link to="/invoices"><span>invoices</span></Link>
                <Link to="/expenses"><span>Expenses</span></Link>
            </nav>
            {/*покажу контент моих детей сразу после навигационного меню*/}
            <Outlet></Outlet>
        </div>
    );
}

export default App;

/*

 */
