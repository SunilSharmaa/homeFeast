import User from "./User";
import UserClass from "./UserClass";

let About = ()=> {
    return (
        
        <div className="container">
        <h1>About us</h1>
        {/* <User name={"gamma (function)"} /> */}
        <UserClass name={"first"} location={"Bhopal"}/>
        <UserClass name={"second"} location={"delhi"}/>
        <UserClass name={"third"} location={"satna"}/>
        </div>
    )
}

export default About;