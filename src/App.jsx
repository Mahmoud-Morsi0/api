
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card'
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import User from './components/user';
function App() {



  const [users, setUsers] = useState()
  const [user, setUser] = useState()
  const getAllUsers = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(res.data)

  }
  const getUser = async (id) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log(data)
    setUser(data)
  }

  const postUser = async () => {
    const data = await axios.post('https://jsonplaceholder.typicode.com/users', {
      name: 'test',
      username: 'test',
      email: 'test',
      address: {
        city: 'test',
        street: 'test',
        suite: 'test',
        zipcode: 'test'
      },
      phone: 'test',
      website: 'test',
      company: {
        name: 'test',
        catchPhrase: 'test',
        bs: 'test'
      }
    })
    console.log(data)
  }
  const putUser = async () => {
    const data = await axios.put('https://jsonplaceholder.typicode.com/users/1', {
      name: 'test',
      username: 'test',
      email: 'test',
      address: {
        city: 'test',
        street: 'test',
        suite: 'test',
        zipcode: 'test'
      },
      phone: 'test',
      website: 'test',
      company: {
        name: 'test',
        catchPhrase: 'test',
        bs: 'test'
      }

    })
    console.log(data)
  }
  const delUser = async () => {
    const data = await axios.delete('https://jsonplaceholder.typicode.com/users/1')
    console.log(data)
  };


  putUser()
  postUser()
  delUser()

  useEffect(() => {
    getUser(5)
  }, [])

  useEffect(() => {
    getAllUsers()
    console.log(users)
  }, [])


  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Card users={users} />}></Route>
        <Route path="/user/:id" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
