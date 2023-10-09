import { IMG_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    // console.log(props);
    const {resData} = props;
    // console.log(resData);
    const {name, cuisines, avgRating, deliveryTime, cloudinaryImageId} = resData.info;
    return (
    <div className="m-4 p-4 w-[250px] border border-black h-[500px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img className="border p-4 border-gray bg-gray-100 rounded-lg" alt="food image" src={IMG_URL + cloudinaryImageId}></img>
        <h3 className="font-bold py-2 text-xl">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime} minutes</h4>
    </div>
    )
};

export default RestrauntCard;