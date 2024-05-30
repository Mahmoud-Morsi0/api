
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card'
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import User from './components/user';
import { UserContext } from './context/userContext';

function App() {
  const [users, setUsers] = useState([])
  // const [user, setUser] = useState()
  const getAllUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(data)
  }
  // const getUser = async (id) => {
  //   const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  //   console.log(data)
  //   setUser(data)
  // }

  // const postUser = async () => {
  //   const data = await axios.post('https://jsonplaceholder.typicode.com/users', {
  //     name: 'test',
  //     username: 'test',
  //     email: 'test',
  //     address: {
  //       city: 'test',
  //       street: 'test',
  //       suite: 'test',
  //       zipcode: 'test'
  //     },
  //     phone: 'test',
  //     website: 'test',
  //     company: {
  //       name: 'test',
  //       catchPhrase: 'test',
  //       bs: 'test'
  //     }
  //   })

  // }
  // const putUser = async () => {
  //   const data = await axios.put('https://jsonplaceholder.typicode.com/users/1', {
  //     name: 'test',
  //     username: 'test',
  //     email: 'test',
  //     address: {
  //       city: 'test',
  //       street: 'test',
  //       suite: 'test',
  //       zipcode: 'test'
  //     },
  //     phone: 'test',
  //     website: 'test',
  //     company: {
  //       name: 'test',
  //       catchPhrase: 'test',
  //       bs: 'test'
  //     }

  //   })

  // }
  // const delUser = async () => {
  //   const data = await axios.delete('https://jsonplaceholder.typicode.com/users/1')

  // };


  // putUser()
  // postUser()
  // delUser()

  // useEffect(() => {
  //   getUser(5)
  // }, [])

  useEffect(() => {
    getAllUsers()

  }, [])

  return (
    <BrowserRouter>
      <UserContext.Provider value={users}>
        <Routes>
          <Route path="/" element={<Card />}></Route>
          <Route path="/user/:id" element={<User />}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
