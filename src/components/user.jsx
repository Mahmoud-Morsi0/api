
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import fetchData from "../fetchData/fetchUsers"
function User() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const res = useQuery(["user", id], fetchData)

    const handleNavigateToHome = () => {
        navigate('/');
    }

    useEffect(() => {
        if (res.data)
            setUser(res.data)
    }, [res.data])

    if (res.isLoading) {
        return (
            <div className="text-center h-screen bg-slate-200 flex justify-center items-center">
                <h2>Loading...</h2>
            </div>
        )
    }

    return (
        <>
            <div className="text-center bg-slate-600"><button className=" mt-10 bg-black text-white w-32 h-10 rounded-lg " onClick={handleNavigateToHome}>Home</button></div>
            <div className="text-center bg-slate-600 h-screen -translate-y-10  relative my-10 flex flex-col justify-center align-middle items-center">

                <div className="-translate-y-24 text-white">
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                </div>
            </div>
        </>
    )
}

export default User