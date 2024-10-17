import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();
    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:5000", {
                query: { userId: authUser._id }, // pass the authenticated user's unique ID
            });
            setSocket(socket); // Save socket connection in state

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users); // Update online users list
            });

            return () => {
                if (socket) {
                    socket.close(); // Close socket on cleanup to prevent open connections
                }
            };
        } else {
            // Check if socket exists before trying to close it
            if (socket) {
                socket.close();
            }
            setSocket(null); // Clear the socket state when the user is not authenticated
        }
    }, [authUser]);
    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    )
}

