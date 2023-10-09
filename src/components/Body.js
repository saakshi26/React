import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    //Local state variable - Super Powerful variable

    const [listOfRestraunts, setListOfRestraunt] = useState([]);
    // or
    // const arr = useState(resList);
    // or
    // const listOfRestraunts = arr[0];
    // const setListOfRestraunt = arr[1];

    const [filteredRestraunt, setFilteredRestraunt] = useState([]);

    const [searchText, setSearchText] = useState("");

    //whenever state variable changes or updates, react triggers a reconciliation cycle(re-renders the component)


    useEffect(() =>{
        // console.log("useeffect called");
        fetchData();
    }, []);

    const fetchData = async () => {
        // console.log("inside fetchdata");
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // console.log(data);
    
    const json = await data.json();

    // console.log(json);
    // console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
    // json.data.cards[5].card.card.gridElements.infoWithStyle.restraunts
    setListOfRestraunt(json.data.cards[5].card.card.gridElements?.infoWithStyle.restaurants);
    setFilteredRestraunt(json.data.cards[5].card.card.gridElements?.infoWithStyle.restaurants);
    
    }
    console.log("body rendered");

    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus);
    if(onlineStatus === false) 
        return (
        <h1>Looks like you are offline!!! Please check your internet connection</h1>
        );
    
   

    // if(listOfRestraunts.length === 0) {
    //     return <Shimmer />
    // }

return (
    <div className='body'>
        <div className='filter flex'>
            <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}></input>
                <button className="search-btn px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                    //filter the restraunt and update the ui
                    // searchText
                    console.log(searchText);

                    const filteredRestraunt = listOfRestraunts.filter((res) => 
                        // console.log(res.info.name);
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    
                    );
                    console.log(filteredRestraunt);
                    // setListOfRestraunt(filteredRestraunt);
                    setFilteredRestraunt(filteredRestraunt);
                    
                }}>Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-100" onClick={()=> {
            const filteredList = listOfRestraunts.filter((res) => {
                return res.info.avgRating > 4
            });
            setListOfRestraunt(filteredList);
        }}> Top Rated Restraunts</button>
            </div>
        
    </div>
    <div className='flex flex-wrap'>
        {/* {console.log(listOfRestraunts.gridElements?.infoWithStyle?.restaurants)} */}
        {filteredRestraunt.map((restaurant) => (
            // <h1>{restaurant.info?.id}</h1>
            <Link key={restaurant.info?.id} to={"/restaurants/" + restaurant.info?.id}><RestrauntCard resData={restaurant} /></Link>
        ))}
        {/* {
            resList.map((x) => <RestrauntCard key={x.id} resData={x}/>)
        } */}
        {/* <RestrauntCard resData={resList[]}/> */}
    {/* <RestrauntCard resName="Shruti Foods" cuisine="Biryani, North Indian"/>
    <RestrauntCard resName="KFC" cuisine="Chicken"/> */}
    </div>
    </div>
);
    
};

export default Body;