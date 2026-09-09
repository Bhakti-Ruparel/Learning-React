import React from 'react'

const Navbar = ({ setToggle }) => {
  return (
    <div className= 'p-4 bg-blue-500 text-white flex item-center justify-between'>
        <div >

            <img  className='rounded-full' src="https://www.flaticon.com/free-icon/user_1077114" alt="" />

        </div>
        <div className='flex gap-4 font-semibold'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        <button className='cursor-pointer bg-white text-blue-500 px-4 py-2 rounded' onClick={() => setToggle(prev => !prev)}>
          Create User
        </button>
      
    </div> 
  )
}

export default Navbar
