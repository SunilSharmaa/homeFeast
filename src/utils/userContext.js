import { createContext} from "react";

let userContext = createContext({
    loggedInUser: "Anonymous",
})


export default userContext;