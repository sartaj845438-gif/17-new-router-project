import React from 'react'

const Login = () => {

  function btnClick(){
    let mail = document.getElementById("mail").value;
    let password = document.getElementById("password").value;
    if(mail !== "" || password !== ""){
      let para = document.getElementById("para");
      para.innerHTML = "Login Successfully"
      alert("Login Successfully")

      document.getElementById("mail").value = "";
      document.getElementById("password").value = "";
    }

  }

  return (
  
    <div className='h-55 rounded-2xl w-60 bg-blue-300 font-bold text-green-300 ml-140 p-2 mt-20'>
      <input className='rounded-2xl border-2 flex items-center text-black p-1 px-2 py-2' type="email" name="" id="mail" placeholder='Enter Your email' />
<br />
      <input className='rounded-2xl border-2 flex items-center text-black p-1 px-2 py-2 mt-1' type="password" name="" id="password" placeholder='Enter Your password' />
      <br />
      <button id="btn" onClick={btnClick} className='h-7 w-25 bg-black text-white rounded-2xl font-black ml-15'>Submit</button>

      <p id="para" className='ml-10 mt-1 text-black font-bold text-1xl'></p>

    </div>
   
  )
}

export default Login