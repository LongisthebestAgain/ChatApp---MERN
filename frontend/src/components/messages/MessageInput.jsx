import { IoSend } from "react-icons/io5";

const MessageInput = () => {
    return (
        <form className="px-4 my-3 ">
            <div className="w-full relative">
                <input placeholder="Aa" className="rounded-full block w-full bg-gray-700 border-gray-600 text-white p-1.5 pl-3" />
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <IoSend />
                </button>
                <div>

                </div>
            </div>
        </form>
    )
}

export default MessageInput
