import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () =>{
    return useContext(AuthContext);

}
export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

    return (
        <AuthContext.Provider value={{authUser, setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}
//Context Usage: Any component that needs to access the authentication state (such as user information) can use the useAuthContext hook to get the authUser state and the setAuthUser function.