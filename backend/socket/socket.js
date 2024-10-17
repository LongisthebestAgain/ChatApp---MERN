import { Server } from "socket.io";
import http from "http"
import express from "express"
const app = express();

const server = http.createServer(app); // create a new HTTP server object by passing the Express app object to the createServer function

const io = new Server(server, { // create a new instance of the Server class and pass it the HTTP server object
    cors: { //CORS is a mechanism that allows your server to specify which origins (domains or ports) are permitted to access its resources
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
});
export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};
const userSocketMap = {} //This object will hold entries where each user ID (the key) maps to their corresponding socket ID (the value).
io.on("connection", (socket) => { //This listens for the connection event, which is triggered whenever a new client successfully connects to the WebSocket server.
    console.log("User connected", socket.id);

    const userId = socket.handshake.query.userId;  // key this retrieves the userId from the query parameters sent during the WebSocket connection

    if (userId != "undefined") {

        userSocketMap[userId] = socket.id;
        //Key: userId (e.g., "123")
        // Value: socket.id (e.g., "abc")
        // Entry: The entry created is "123": "abc".
    }
    io.emit("getOnlineUsers", Object.keys(userSocketMap)); //"123": "abc".

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id); //This listens for the disconnect event, which occurs when the client disconnects from the WebSocket server.
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

export { app, io, server }