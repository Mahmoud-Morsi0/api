/* eslint-disable react/prop-types */


import { useNavigate } from "react-router-dom";
import useUserContxt from "../context/userContext";



const Card = () => {
    const navigate = useNavigate()
    const handllUser = (id) => {
        navigate(`/user/${id}`)
    }

    const users = useUserContxt()
    return (
        <>
            <div className='flex justify-center align-middle items-center flex-wrap gap-10 h-screen p-5 bg-slate-800'>
                {users.map((data) => {
                    return (
                        <div className='rounded w-72 cursor-pointer text-center h-64 bg-white  ' key={data.id} onClick={() => handllUser(data.id)}>
                            <div >
                                <div className='text'>{data.name}</div>
                                <div className='text'>{data.compny}</div>
                                <div className='text'>{data.phone}</div>
                                <div className='text'>{data.username}</div>
                                <div className='text'>{data.email}</div>
                                <div className='text'>{data.website}</div>
                                <div className='text'>{data.address.city}</div>
                                <div className='text'>{data.address.street}</div>
                                <div className='text'>{data.address.suite}</div>
                                <div className='text'>{data.address.zipcode}</div>

                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    );
};

export default Card;