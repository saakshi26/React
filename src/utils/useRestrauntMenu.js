import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestrauntMenu = (resId) => {
    // fetchdata

    //just like we have state variable inside our component we can create state variable inside our hook as well

    const [resInfo, setResInfo] = useState(null);
    //this resInfo is coming from useState

    useEffect(() => {
        fetchData();
    }, []);
    //because we want to fecth the data only once so using empty array

    const fetchData = async() => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    return resInfo;
    //resInfo is basically a local variable for this custom hook
}

export default useRestrauntMenu;