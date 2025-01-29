import React from "react";
import userContext from "../utils/userContext";
class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name : "dummy",
                location : "dummy",
            }
        }

    }

    async componentDidMount() {
        let data = await fetch("https://api.github.com/users/sunilsharmaa");
        let json = await data.json();

        // this.timer = setInterval(()=> {
        //     console.log("interval");
        // },1000)
        
        this.setState({
            userInfo: json,
        })
    }

    // componentDidUpdate() {
    //     console.log("updated");
    // }

    // componentWillUnmount() {
    //     console.log("unmount");
    //     clearInterval(this.timer)
    // }
    
    render() {
        let {name, location} = this.state.userInfo;
        return (
            <div className="user-card">
                <userContext.Consumer>
                 {(data)=> {
                    // console.log(loggedInUser);
                   return <h1>hell</h1>
                 }}   
                </userContext.Consumer>
                
            <h2>name: {name}</h2>
            <h3>location: {location}</h3>
        </div>
        )
    }
}

export default UserClass;