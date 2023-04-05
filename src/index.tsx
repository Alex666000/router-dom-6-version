import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Invoices} from "components/Invoices";
import {Expenses} from "components/Expenses";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>}>
                <Route path={"/invoices"} element={<Invoices/>}/>
                <Route path={"/expenses"} element={<Expenses/>}/>
                {/* означает отсутствие совпадения что не будет ошибка когда любой путь после путей "/invoices" или "/expenses */}
                <Route path={"*"} element={
                    <main className={'text-center'}>
                        <p>nothing!!!!!!!!!</p>
                    </main>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
/*
6 --- версия роутера

Outlet - можно создавать любой уровень вложенности
*/

