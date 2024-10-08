import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
const MessageContainer = () => {
    const noChatSelected = true;
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {noChatSelected ? (<NoChatSelected/>) : (
                <>
                    <div className='bg-slate-500 px-4 mb-2'>
                        <span className='label-text'>To:</span>{" "}
                        <span className="text-gray-900 font-semibold text-sm">Jonh Doe</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}
export default MessageContainer

const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='p-4 text-center sm:text-lg md-text-xl text-gray-200 font-semibold flex flex-col'>
                <p>Welcome👋 John Doe </p>
                <p>Select a chat to start messaging </p>
                <p>Select a chat to start messaging </p>
                <TiMessages className='text-3xl md:text-6xl self-center' />
            </div>
        </div>
    )
}

