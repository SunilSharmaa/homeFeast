import React from "react";
import UserClass2 from "./UserClass2";

class UserClass extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props.name + " child constructor called");

        this.state = {
           count:0,
           count2:2
        }
    }

    componentDidMount() {
        console.log(this.props.name +" child component");
    }
    
    componentWillUnmount() {
        console.log(this.props.name +"unmount");
    }

    render() {
        console.log(this.props.name +" child render");
        let {name, location} = this.props;
        let {count} = this.state;
        let {count2} = this.state;
        return (
            <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>
            <button onClick={()=> {
                this.setState(
                    {
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1
                    }
                )
            }}>increase button count</button>
            <h2>name: {name}</h2>
            <h3>location: {location}</h3>
        </div>
        )
    }
}

export default UserClass;