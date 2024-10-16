import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.sender === authUser._id;
    const chatClassName = fromMe ? "chat-start" : "chat-end";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar" >
                <div className="w-10 rounded-full">
                    <img src={profilePic} alt="user avatar" />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor}`}>{message.message}</div>
            <time className="chat-footer text-xs opacity-50 flex gap-1 items-center"> 12:45</time>
        </div>
    )
}

export default Message
