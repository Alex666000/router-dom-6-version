import React, {useEffect, useState} from "react";
import {useLoaderData, useNavigation} from "react-router-dom";

export const Data = () => {
    /*   const [data,setData] = useState()

       useEffect(() => {
           axios()
          - не надо получать данные эффектом и устанавливать в стейт

       })*/
    type DogUrlType = string | undefined
    const dogUrl = useLoaderData() as DogUrlType;
//состояние навигации
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <h1>Loading...</h1>;
    }

    return (
        <div><img src={dogUrl}/></div>
    );
};

export const dataLoader = async () => {
    const res = await fetch("http://random.dog/woof.json");
    const dog = await res.json;

    return dog;
};

/*
1) вместо этого делаем loader

 const [data,setData] = useState()

    useEffect(() => {
        axios()

    })

2) импортируем dataLoader в Арр и используем там см... <Route path={"/data"} element={<Data/>} loader={dataLoader}/>

3) получаем доступ к данным к этим полученным используем хук


 */

