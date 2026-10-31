import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
     let navigate = useNavigate();
    
      function btnClick(){
        navigate('/');
      }
      function nextClick(){
        navigate(+1);
      }
    function backClick(){
      navigate(-1);
    }
  return (
    <div className='flex flex-wrap items-center  rounded-3xl mt-1'>
          
     <div className='flex flex-wrap bg-cyan-600 items-center h-10 w-385 font-bold'>
      <button onClick={btnClick} className='bg-amber-600  text-white p-2 h-8  ml-5 w-45 flex items-center rounded-2xl active:scale-95'>Return to Home Page</button>
       <button onClick={nextClick} className='bg-amber-600 text-white   p-2 h-8  ml-5 w-15 flex items-center rounded-2xl active:scale-95'>Next</button>
        <button onClick={backClick} className='bg-amber-600 text-white   p-2 h-8 ml-5 w-15 flex items-center rounded-2xl active:scale-95'>Back</button>

        <div className='flex flex-wrap ml-90 justify-center justify-evenly items-center italic gap-16'>
          <h2 className=' font-bold '>Well Come to New Market</h2>
          <h2 className=' font-bold '>Your are the guest of New Market</h2>
          <h2 className='font-bold '>Shop and do Enjoy</h2>
        </div>
     </div>
    </div>
  )
}

export default Navbar2