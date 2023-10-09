import React from "react";
// import User from "./User";
import UserClass from "./UserClass";
// import { Component } from "react/cjs/react.production.min";

class About extends React.Component {
    constructor(props){
        super(props);

        // console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("parent componet did mount")
    }
    render() {
        // console.log("parent render");
        return (
            <div>
            <h1>About Us Class Component</h1>
            <h2>This is React Web Series </h2>
            {/* <User name={"This is Saakshi Kukde (class)"}/> */}
            {/* <UserClass name={"This is Saakshi Kukde (class)"} location={"Nagpur The Orange City (class)"}/> */}
            <UserClass name={"first"} location={"India"}/>
            {/* <UserClass name={"second"} location={"US"}/>
            <UserClass name={"third"} location={"Canada"}/> */}
        </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>This is React Web Series </h2>
//             {/* this is how we passed props to functional component*/}
//             <User name={"This is Saakshi Kukde (function)"}/>

//             {/* this is how we pas */}
//             <UserClass name={"This is Saakshi Kukde (class)"} location={"Nagpur The Orange City (class)"}/>
//         </div>
       
//     );
// };


/*- Parent Constructor
- Parent Render
    - firstChild Constructor
    - firstChild Render

    - secondChild Constructor
    - secondChild Render

    - thirdChild Constructor
    - thirdChild Render

- firstChild Component Did Mount
- secondChild Component Did Mount
- thirdChild Component Did Mount
- Parent Component Did Mount
*/


export default About;