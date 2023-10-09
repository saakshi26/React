import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestrauntMenu = () => {

    // const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    console.log(resId);

    const resInfo = useRestrauntMenu(resId);
    console.log(resInfo);

    /*before  we use to write fecthdata code in restrauntMenu component only but now we created custom hook useRestrauntMenu and shifted the code there so that now restrauntMenu dont need to worry about this fecthData or where this fetchDat ais coming from, now this component's work is to only the display the restrauntMenu and not the fetching data and then displaying*/

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();

    //     console.log(json);
    //     console.log(json?.data?.cards[0]?.card?.card.info.name);
    //     setResInfo(json.data);
    // };

    if(resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card.info;
    
    // if(resInfo === null) return <Shimmer />;
    console.log(resInfo)
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>Name of Restraunt : {resInfo?.cards[0]?.card?.card.info.name}</h1>
            <h1>{name}</h1>
            <h2>{cuisines.join(", " )}</h2>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>

            <ul className="item-list">
                {itemCards.map(item => 
                <li className="items" key={item.card.info.id}>
                    {item.card.info.name} {"- Rs. "} {item.card.info.price / 100} 
                </li>
                )}
                {/* <li>{itemCards[0]?.card?.info?.name}</li>
                <li>{itemCards[1]?.card?.info?.name}</li>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li> */}
            </ul>
        </div>
    );
};

export default RestrauntMenu; 