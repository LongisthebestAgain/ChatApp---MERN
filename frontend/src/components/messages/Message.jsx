import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? selectedConversation?.profilePic : authUser.profilePic;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";
    const formattedTime = extractTime(message.createdAt)
    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar" >
                <div className="w-10 rounded-full">
                    <img src={profilePic} alt="user avatar" />
                </div>
            </div>
            <div className={`chat-bubble text-white  ${bubbleBgColor} pb-2`}>{message.message}</div>
            <time className="chat-footer text-xs opacity-50 flex gap-1 items-center"> {formattedTime}</time>
        </div>
    )
}

export default Message
