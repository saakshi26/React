import { useState } from "react";

const User = ({name}) => {
    // console.log(name);
    

    //creating state variable

    const [count] = useState(0);
    console.log(count);

    return (
    <div className="user-card">
        <h1>Count = {count}</h1>
            <h2>Name : Saakshi Kukde {name}</h2>
            <h3>Nagpur - The Orange City</h3>
            <h3>Contact: saakshi_26</h3>
        </div>
    )
}
export default User;