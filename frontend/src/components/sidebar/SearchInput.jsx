import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import  toast  from "react-hot-toast";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { conversations } = useGetConversations();
  const {setSelectedConversation} = useConversation();
  const handleSearch = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error('Search query must be at least 3 characters long');
    }
    const conversation = conversations.find((conversation)=> conversation.fullName.toLowerCase().includes(search.toLowerCase())); 
    if(!conversation){
      return toast.error('No user found');
    }
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }else{
      return toast.error('No user found');
    }
  }
  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2">
      <input className="input input-bordered rounded-full " placeholder="Search...." type="text" value={search} onChange={
        (e) => setSearch(e.target.value)
      }/> 
      <button type="submit" className="btn btn-circle bg-sky-300 text-white" >
        <IoIosSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  )
}

export default SearchInput
