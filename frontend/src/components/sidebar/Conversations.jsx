import Conversation from './Conversation'
import  useGetConversations  from '../../hooks/useGetConversations'
import getRandomEmojiList from '../../utils/emojis'
const Conversations = () => {
  const {loading, conversations }= useGetConversations();
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation,idx) => (
        <Conversation key={conversation._id} 
        conversation={conversation}// props
        emoji={getRandomEmojiList()}
        lastIdx = {idx === conversations.length - 1}
        />
      ))}


      {loading? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  )
}

export default Conversations
