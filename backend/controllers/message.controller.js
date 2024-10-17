import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId , io } from "../socket/socket.js";
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
        //find conversation
        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId],
            }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });

        }
        const newMessage = new Message({ //pass the data
            senderId,
            receiverId,
            message,
        });
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([newMessage.save(), conversation.save()]); // this will save the message and conversation to the database

        const receiverSocketId = getReceiverSocketId(receiverId); // get the receiver socket id
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage); // send the message to the receiver 
        }
        res.status(201).json(newMessage); // send the new message to the client side as a response 
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "internal server error" });

    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({

            participants: {
                $all: [senderId, userToChatId],
            }
        }).populate("messages"); // populate the messages mean get the messages from the database and send it to the client side ,why populate? because we have a reference to the message model in the conversation model
        // not reference but we have a field in the conversation model that is an array of messages
        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages); // send the messages to the client side as a response
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "internal server error" });
    }
}