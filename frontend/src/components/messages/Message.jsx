
const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar" >
                <div className="w-10 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user avatar" />
                </div>
            </div>
            <div className="chat-bubble text-white bg-blue-500 ">You were the Chosen One!</div>
            <time className="chat-footer text-xs opacity-50 flex gap-1 items-center"> 12:45</time>
        </div>
    )
}

export default Message
