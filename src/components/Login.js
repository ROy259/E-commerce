import React, {  useState } from 'react'

const Login = ({onclose}) => {

    const [action ,setaction]=useState("Sign up")
    
  return (
    <>
    <div className='Main-container w-[300px]  z-10  bg-slate-200 rounded-md absolute right-1 top-12 '>

    <div className='flex justify-end px-2 p-2 pr-5'>
     <span className='cursor-pointer' onClick={onclose}><i class="fa-solid fa-x"></i></span>
    </div>

    <div className='w-[300px] p-3 pl-10'>

        <div>
            <p className='text-2xl my-1 font-semibold'>{action}</p>
            {
                action==="Sign up"?<div></div>:<p className='text-xs'>Welcome back!</p>

            }
            {/* <p className='text-xs'>Welcome back!</p> */}
        </div>

    {action==="Login"?<div></div>:<div className='w-[220px] p-1 rounded-lg flex bg-white items-center my-3'>
    <i className=" px-2 fa-regular fa-user"></i>
     <input className='outline-none rounded-lg bg-transparent  'type="text" placeholder='Username ' />
    </div>}
    {/* <div className='w-[220px] p-1 rounded-lg flex bg-white items-center my-3'>
    <i className=" px-2 fa-regular fa-user"></i>
     <input className='outline-none rounded-lg bg-transparent  'type="text" placeholder='Username ' />
    </div> */}

    <div className='w-[220px] p-1 rounded-lg flex bg-white items-center my-3'>
    <i class="px-2 fa-regular fa-envelope"></i>  
    <input className='outline-none rounded-lg bg-transparent  'type="email" placeholder='Email' />
    </div>
    <div className='w-[220px] p-1 rounded-lg flex bg-white items-center my-3'>
    <i className=" px-2 fa-solid fa-lock"></i>
        <input className='outline-none rounded-lg bg-transparent  'type="password" placeholder='Password' />
    </div>
        {
            action==="Sign up"?<div></div>:<p className='text-xs'>Forget password</p>

        }
    {/* <p className='text-xs'>Forget password</p> */}

    <div className='flex justify-center flex-col'>
        <button className='h-7 bg-purple-300 w-56 mt-3 rounded-lg font-medium'>
            {/* Submit */}
            {
                action==="Sign up"?"Sign in":"Login"
            }
        </button>
    </div>

    <div className='flex gap-5 justify-evenly mt-2'>
    <button className={`p-1 w-20 rounded-xl ${action==='Sign up'? 'bg-purple-400' : 'bg-slate-100'}`} onClick={()=>{setaction('Sign up')}}>Sign up</button>
    <button className={`p-1 w-20 rounded-xl  ${action==='Login'? 'bg-purple-400' : 'bg-slate-100'}`} onClick={()=>{setaction('Login')}}>Login</button>
    </div>
    

    </div>
     
   </div>
   </>
  )
}

export default Login
