import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import User from './components/user';
import { UserContext } from './context/userContext';
import { useQuery } from '@tanstack/react-query';
import fetchData from './fetchData/fetchUsers';

function App() {
  const [users, setUsers] = useState([])
  const [loader, setLoader] = useState(false)
  const res = useQuery(["users"], fetchData)

  useEffect(() => {
    if (res.data) {
      setUsers(res.data)
    }
  }, [res.data])

  if (res.isLoading) {
    return (
      <div className="text-center h-screen bg-slate-200 flex justify-center items-center">
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <BrowserRouter>

      <UserContext.Provider value={{ users, loader, setLoader }}>
        <Routes>
          <Route path="/" element={<Card />}></Route>
          <Route path="/user/:id" element={<User />}></Route>
        </Routes>
      </UserContext.Provider>

    </BrowserRouter>
  )
}

export default App
