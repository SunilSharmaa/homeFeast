import { useState } from "react";

let User = (props)=> {
    let [count] = useState(0);
    let [count2] = useState(2);
    return (
        <div className="user-card">
            <h1>Count {count}</h1>
            <h1>Count {count2}</h1>
            <h2>name: {props.name}</h2>
            <h3>location</h3>
            <h4>contact</h4>
        </div>
    )
}

export default User;