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
            <Route>
                {/* Outlet:
                помещаем внутрь Арр дочерние -- и они попадут в аутлет в Арр.tsx -- если родительский маршрут совпадет
                в Арр.tsx отрисуется этот маршрут === компонента
                */}
                <Route path={"/"} element={<App/>}>
                    {/*Outlet: begin -- отрисовываем Outlet в компоненте Invoices чтобы отрисовать <div>BIILLS</div>*/}
                    <Route path={"/invoices"} element={<Invoices/>}>
                        <Route path={"/invoices/123"} element={<div>BIILLS</div>}/>
                    </Route>
                    {/*Outlet - end */}
                    <Route path={"/expenses"} element={<Expenses/>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
);
/*
6 --- версия роутера

Outlet - можно создавать любой уровень вложенности
 */

