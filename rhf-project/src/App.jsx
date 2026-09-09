import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Usercard from './components/Usercard'
import Form from './components/Form'

function App() {
  const [toggle, setToggle] = useState(true)
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <>
      <div className='p-3 h-screen flex flex-col gap-4 bg-gray-100 m-4 rounded-lg shadow-md'>
        <Navbar setToggle={setToggle} />

        {toggle ? (
          <div className='flex'>
            {users.map((elem) => (
              <Usercard
                key={elem.email}
                user={elem}
                setUsers={setUsers}
                setToggle={setToggle}
                setSelectedUser={setSelectedUser}
              />
            ))}
          </div>
        ) : (
          <div>
            <Form
              setUsers={setUsers}
              setToggle={setToggle}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default App
