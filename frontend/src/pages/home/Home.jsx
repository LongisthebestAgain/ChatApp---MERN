import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] overflow-hidden  bg-purple-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  '>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home
