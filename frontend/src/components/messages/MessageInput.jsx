import { IoSend } from "react-icons/io5";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
    const [message, setMessage] = useState('');
    const {loading, sendMessage } = useSendMessage();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!message) return;
        await sendMessage(message);
        setMessage('');
    }

    
    return (
        <form className="px-4 my-3 " onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input placeholder="Aa" className="rounded-full block w-full bg-gray-700 border-gray-600 text-white p-1.5 pl-3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    {loading? <div className="loading loading-spinner"></div> : <IoSend />}
                </button>
                <div>

                </div> 
            </div>
        </form>
    )
}

export default MessageInput
