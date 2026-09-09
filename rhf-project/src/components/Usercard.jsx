import React from 'react'

const Usercard = ({ user, setUsers, setToggle, setSelectedUser }) => {
  const handleUpdate = () => {
    setSelectedUser(user)
    setToggle(false)
  }

  const handleDelete = () => {
    setUsers((prevUsers) => prevUsers.filter((u) => u.email !== user.email))
  }

  return (
    <div className='flex flex-col items-center gap-4 h-auto p-4 bg-gray-200 rounded-lg shadow-md'>
      <div className='w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden'>
        <img className='w-full h-full object-cover' src={user.image} alt='User avatar' />
      </div>

      <div className='flex flex-col items-center gap-2 text-center'>
        <h1 className='name'>{user.name}</h1>
        <h1 className='email'>{user.email}</h1>
        <h1 className='contact'>{user.contact}</h1>
      </div>

      <div className='flex gap-2'>
        <button onClick={handleUpdate} className='px-3 py-1 bg-green-500 text-white rounded-md'>Update</button>
        <button
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this user?')) {
              handleDelete()
            }
          }}
          className='px-3 py-1 bg-red-500 text-white rounded-md'
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Usercard
