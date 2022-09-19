import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UsersForm from './components/UsersForm'
import style from '../src/style.css'
import { useEffect } from 'react'
import axios from 'axios'
import UsersList from './components/UsersList'


function App() {
  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(()=> {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  },[])

  const getUser = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  }

  const selectUser = (user) => {
    alert(user.first_name)
    setUserSelected(user)
  }

  const deselectUser = () => setUserSelected(null)

  console.log(users)

  return (
    <div className="App">
     <UsersForm getUser={getUser}
     userSelected={userSelected}
     deselectUser={deselectUser}/>
     <UsersList users={users}
     selectUser={selectUser}
     getUser={getUser}
     />
    </div>
  )
}

export default App
