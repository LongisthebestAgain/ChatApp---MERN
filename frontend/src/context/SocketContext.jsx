import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
import { query } from "express";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();
    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:5000"); // establishes a WebSocket connection to a server. The server URL is passed as an argument to the io function. 
            query: {
                userId: authUser._id //is used to pass the authenticated user's unique identifier to the server when establishing a WebSocket connection or making an API request.
            }
            setSocket(socket);//The socket state is updated to hold the connection instance.
            
            socket.on("getOnlineUser")
            
            return () => socket.close(); //Cleanup Function: his function is executed when the component is about to unmount , This prevents the app from holding open WebSocket connections that aren't needed
        } else {
            socket.close();
            setSocket(null);
        }

    }, []);
    return (



        <SocketContext.Provider value={{}}>
            {children}
        </SocketContext.Provider>
    )
}

