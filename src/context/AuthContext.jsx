import { Children, createContext, useContext, useState } from "react";

const userContext=createContext()


export const AuthContext=({children})=>{
    // const [user, setUser] = useState(null)
    const [user, setUser] = useState("Mudy")
    return <userContext.Provider value={{user,setUser}}>{children}</userContext.Provider>
}

export const useAuthContext=()=>{
   const user= useContext(userContext)
   return user;
}