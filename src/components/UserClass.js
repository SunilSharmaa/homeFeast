import React from "react";
import UserClass2 from "./UserClass2";

class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            count: 1,
            userInfo: {
                name : "dummy",
                location : "dummy",
            }
        }

    }

    async componentDidMount() {
        let data = await fetch("https://api.github.com/users/sunilsharmaa");
        let json = await data.json();

        console.log(json);

        this.timer = setInterval(()=> {
            console.log("interval");
        },1000)
        
        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate() {
        console.log("hello");
    }

    componentWillUnmount() {
        console.log("unmount");
        clearInterval(this.timer)
    }
    
    render() {
        let {name, location} = this.state.userInfo;
        return (
            <div className="user-card">
                <h1>{this.state.count}</h1>
                <button onClick={()=> {
                    this.setState({
                        count : this.state.count + 1,
                    }) 
                }}>increase-button-count</button>
            <h2>name: {name}</h2>
            <h3>location: {location}</h3>
        </div>
        )
    }
}

export default UserClass;