// import React from 'react'
// import { Link } from 'react-router-dom'

// const SideBar = ({children , title}) => {
//   return (
//     <div className='flex'>
//         <div className='w-1/6 flex flex-col rounded-lg bg-yellow-400 py-5 px-5 mx-4 my-4 space-y-4 text-center'>
//             <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded '>
//             <Link>Renter</Link>
//             </button>
//             <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
//             <Link>Vehicle</Link>
//             </button>
//             <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
//             <Link to={'/booking'}>Booking</Link>
//             </button>
//             <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
//             <Link>Driver</Link>
//             </button>
//             <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
//             <Link>Owner</Link>
//             </button>
//             <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
//             <Link to={'/payment'}>Payment</Link>
//             </button>
//             <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
//             <Link>HR</Link>
//             </button>
//             <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
//             <Link>Maintenance</Link>
//             </button>
//             <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
//             <Link>Reviews</Link>
//             </button>
//         </div>
//         <div className='flex-grow mr-4 my-4'>
//           <div className='w-full py-2 px-4 bg-yellow-400 rounded-lg mb-4'>
//             <span className='text-xl text-white font-bold'>{title}</span>
//           </div>
//           <div>
//               {children}
//           </div>
//         </div>

//     </div>
    

//   )
// }

// export default SideBar

import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import TestButtons from './TestButtons';
import PaymentSidebar from '../pages/Booking And Payment Management/PaymentSidebar';

const SideBar = ({children , title}) => {
  const location = useLocation();

  return (
    <div className='flex'>
        <div className='w-1/6 min-h-10 flex flex-col rounded-lg bg-yellow-400 py-5 px-5 mx-4 my-4 space-y-4 text-center '>
            {location.pathname === '/' && (
              <TestButtons/>
            )}
            {(location.pathname === '/booking') && (
                <p>Hello, welcome! this is {location.pathname} page </p>
            )}
            {(location.pathname=== '/payment') && (
                <PaymentSidebar/>
            )}
        </div>
        <div className='flex-grow mr-4 my-4'>
          <div className='w-full py-2 px-4 bg-yellow-400 rounded-lg mb-4'>
            <span className='text-xl text-white font-bold'>{title}</span>
          </div>
          <div>
              {children}
          </div>
        </div>
    </div>
  )
}

export default SideBar
