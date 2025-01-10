import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props);
        console.log("constructor-2");

        this.state = {
           count:0,
           count2:2
        }
    }

    componentDidMount() {
        console.log("component-2");
    }

    render() {
        console.log("render-2");
        let {name} = this.props;
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
            <h3>location</h3>
            <h4>contact</h4>
        </div>
        )
    }
}

export default UserClass;