import { useNavigate, useParams } from "react-router-dom"

function User() {
    const { id } = useParams()
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    return (
        <>
            <div className="text-center my-10">
                <button className=" bg-black text-white w-32 h-10 mb-10 rounded-lg  " onClick={goToHome}>Home</button>
                <div>User{id}</div>
            </div>
        </>
    )
}

export default User