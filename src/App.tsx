import React from "react";
import "./App.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Link, Outlet,
    Route, RouterProvider
} from "react-router-dom";
import {Home} from "Home";
import {Data, dataLoader} from "Data";
import {Contact} from "Contact";


function App(props: any) {

    const router = createBrowserRouter(
        createRoutesFromElements(
            /*корень*/
            <Route path={"/"} element={<Root/>}>
                {/*определяем маршруты все*/}
                <Route index element={<Home/>}/>
                <Route path={"/data"} element={<Data/>} loader={dataLoader}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Route>
        )
    );


    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;

const Root = () => {
    return <>
        <div>
            <Link to={"/"}>
                Home
            </Link>
            <Link to={"/data"}>
                Data
            </Link>
        </div>
        <Outlet/>
    </>;

};

/*

 */
