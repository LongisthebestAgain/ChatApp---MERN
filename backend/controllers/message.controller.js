import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
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
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });

        }
        const newMessage = new Message({ //pass the data
            senderId,
            receiverId,
            message,
        });
        
        if(newMessage){
            conversation.messages.push(newMessage); //push the message to conversation
            res.status(200).json({newMessage}); //send the message to client side 
        }
        await Promise.all([newMessage.save(), conversation.save()]); // this will save the message and conversation to the database
        

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "internal server error" });
    }
};