import React from "react";

// React.Component is basically a class which is given to us by react ans UserClass is inhereting some properties from it
// So we have to import this React.Component
class UserClass extends React.Component {

    // to receive props in class based component we have to create constructor and super keyword inside it, this constructor will receive props
    // we use super keyword to get access to "this" keyword
    constructor(props) {
        super(props);
        // console.log(props);

        //earlier there were no hooks so there was the way to create state variables
        //the stae variable is a big object that will contains all the state variables that you will create
        // so if we want to create another state variable will put inside this big object only
        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "Dummy name",
                location: "default",
                avatar_url: "http://dummy-photo.com"
            }
        }
        // console.log(this.state);
        // console.log(this.props.name + "child constructor");
    }

    async componentDidMount() {
        // console.log(this.props.name + "child componet did mount")
        const data = await fetch("https://api.github.com/users/sakshi-kukde-coditas");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        console.log(json);
    }

    componentDidUpdate() {
        ocnsole.log("Component did update");
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    render() { 

        // const { name, location } = this.props;
        // const {count, count2} = this.state;
        // console.log(this.props.name + "child render");

        const {login, created_at, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
            {/* <h1>Count: {count} (class)</h1> */}
            {/* <h1>Count2: {count2} (class)</h1> */}
             {/* <button onClick={() => {
                //NEVER UPDATE STATE VARIABLES DIRECTLY
                // this.state.count = this.state.count + 1; 
                this.setState({
                      count: this.state.count + 1,
                      count2: this.state.count2 + 1
                })
            }}>Increase</button>  */}
            <img src={avatar_url}/>
            <h2>Username : {login}</h2>
            <h3>Created At - {created_at}</h3>
            <h3>Contact: saakshi_26</h3>
        </div>
        )
    }
}


export default UserClass; 



/****
 * 
 * -------MOUNTING---------
 * Constructor (dummy)
 * Render (dummy)
 *  <HTML Dummy>
 * 
 * Component Did Mount
 *  <API Call>
 *  <this.setState>  -> State variable is updated
 * 
 * 
 * -------UPDATE----------
 * 
 *      render(API Data)
 *      <HTML (new API data)
 * 
 *      componentDidUpdate
 */