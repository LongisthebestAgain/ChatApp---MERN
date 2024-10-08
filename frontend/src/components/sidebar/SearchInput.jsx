import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input className="input input-bordered rounded-full " placeholder="Search...." type="text"></input>
        <button type="submit" className="btn btn-circle bg-sky-300 text-white">
        <IoIosSearch className="w-6 h-6 outline-none"/>
        </button>
    </form>
  )
}

export default SearchInput
