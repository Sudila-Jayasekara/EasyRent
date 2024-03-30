/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import carpng from '../assets/carpng2.png';
const Login = () => {
  const[data,setData]=useState({
    email:'',
    password:'',
  })
  const loginUser=(e)=>{
    e.preventDefault()
  }
  return (
    <div>
      <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
        <div className="container h-full py-24 px-10">
          <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-neutral-800 shadow-lg dark:bg-neutral-800">
                <div className="lg:flex lg:flex-wrap">
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <h4 className="mb-12 mt-1 pb-1 text-5xl lg:text-6xl font-semibold font-serif">
                          Easy Rent
                        </h4>
                      </div>

                      <form onSubmit={loginUser}>
  <p className="mb-4">Please login to your account</p>

  <div className="relative mb-4" data-twe-input-wrapper-init>
    <input
      type="text" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}
 
      className={`peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary`}
      id="exampleFormControlInput1"
      placeholder="Email" 
    />
  </div>

  <div className="relative mb-4" data-twe-input-wrapper-init>
    <input
      type="password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}
 
      className={`peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary`}
      id="exampleFormControlInput11"
      placeholder="Password" // Always show placeholder
    />
  </div>

  <div className="mb-12 pb-1 pt-1 text-center">
    <button
      className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      style={{
        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
      }}
    >
      Log in
    </button>

    <a href="#!">Forgot password?</a>
  </div>

  <div className="flex items-center justify-between pb-6">
    <p className="mb-0 me-2">Don't have an account?</p>
    <button
      type="button"
      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-yellow-400 dark:hover:text-black dark:focus:bg-blue-500"
      data-twe-ripple-init
      data-twe-ripple-color="light"
    >
      Register
    </button>
  </div>
</form>

                    </div>
                  </div>

                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                    style={{ background: 'linear-gradient(to right, rgba(255, 215, 0, 0.8), rgba(255, 165, 0, 0.8))' }}
                  >
                    <div className="px-4 py-6 text-black md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">We are here to save your time..
                      </h4>
                  <p className="text-sm">
                    Api thma hodatama kree <br></br>
                    log wenwanan log weyn....
                    Echahrai........................

                  </p>
                  <div><img src={carpng}/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
 
  )
}

export default Login;