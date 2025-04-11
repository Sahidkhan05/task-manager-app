import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/task-manager");
    };

  return (
    <>
    <div className='w-full min-h-screen flex flex-col items-center justify-center bg-blue-500 space-y-6'>

      <h1 className='text-5xl font-bold text-white'> Welcome in Task Manager App </h1>
      <p className='text-white text-lg'>Manage all your tasks easily</p>

      <button 
        className='bg-white text-blue-600 text-2xl font-semibold py-2 px-6 rounded w-50 shadow-md hover:scale-105
         hover:bg-blue-100 transition duration-300'
        onClick={handleClick}>
        Enter
      </button>

    </div>  
    </>
  );
};

export default WelcomePage;
