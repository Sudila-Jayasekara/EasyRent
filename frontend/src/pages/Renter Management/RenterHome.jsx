import React from 'react'
import carpng1 from '../Renter Management/carpng2.png'
import dushan from '../Renter Management/dushan.png'
import { Link } from 'react-router-dom'


const RenterHome = () => {
  return (
    <div>
        <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
  
  {/* Logo text or image */}
  <div className="flex items-center justify-between mb-4 md:mb-0">
    <h1 className="leading-none text-2xl text-grey-darkest">
      <a className="no-underline text-grey-darkest hover:text-black" href="#">
        Easy Rent
      </a>
    </h1>

    <a className="text-black hover:text-orange md:hidden" href="#">
      <i className="fa fa-2x fa-bars"></i>
    </a>
  </div>
  {/* END Logo text or image */}
  
  {/* Search field */}
  <form className="mb-4 w-full md:mb-0 md:w-1/4">
    <label className="hidden" htmlFor="search-form">Search</label>
    <input className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text" />
    <button className="hidden">Submit</button>
  </form>
  {/* END Search field */}
  
  {/* Global navigation */}
  <nav>
    <ul className="list-reset md:flex md:items-center">
      <li className="md:ml-4">
        <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
          Products
        </a>
      </li>
      <li className="md:ml-4">
        <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
          About
        </a>
      </li>
      <li className="md:ml-4">
        <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
          Contact
        </a>
      </li>
    </ul>
  </nav>
  

</header>
<div className="container my-12 mx-auto px-4 md:px-12">
    <div className="flex flex-wrap -mx-1 lg:-mx-4">

        {/* Column */}
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            {/* Article */}
            <article className="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src={carpng1} />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                        <Link to={'/selectbooking'}>Lamborghini Revuelto</Link>
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        01/04/2024
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full h-6 w-6" src={dushan} />
                        <p className="ml-2 text-sm">
                            Dushan Chanuka
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Add Favourite</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
            {/* END Article */}

        </div>
          {/* Column */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

{/* Article */}
<article className="overflow-hidden rounded-lg shadow-lg">

    <a href="#">
        <img alt="Placeholder" className="block h-auto w-full" src={carpng1} />
    </a>

    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
            Lamborghini Revuelto
            </a>
        </h1>
        <p className="text-grey-darker text-sm">
            01/04/2024
        </p>
    </header>

    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a className="flex items-center no-underline hover:underline text-black" href="#">
            <img alt="Placeholder" className="block rounded-full h-6 w-6" src={dushan} />
            <p className="ml-2 text-sm">
                Dushan Chanuka
            </p>
        </a>
        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
            <span className="hidden">Add Favourite</span>
            <i className="fa fa-heart"></i>
        </a>
    </footer>

</article>
{/* END Article */}

</div>
  {/* Column */}
  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

{/* Article */}
<article className="overflow-hidden rounded-lg shadow-lg">

    <a href="#">
        <img alt="Placeholder" className="block h-auto w-full" src={carpng1} />
    </a>

    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
            Lamborghini Revuelto
            </a>
        </h1>
        <p className="text-grey-darker text-sm">
            01/04/2024
        </p>
    </header>

    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a className="flex items-center no-underline hover:underline text-black" href="#">
            <img alt="Placeholder" className="block rounded-full h-6 w-6" src={dushan} />
            <p className="ml-2 text-sm">
                Dushan Chanuka
            </p>
        </a>
        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
            <span className="hidden">Add Favourite</span>
            <i className="fa fa-heart"></i>
        </a>
    </footer>

</article>
{/* END Article */}

</div>
  {/* Column */}
  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

{/* Article */}
<article className="overflow-hidden rounded-lg shadow-lg">

    <a href="#">
        <img alt="Placeholder" className="block h-auto w-full" src={carpng1} />
    </a>

    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
            Lamborghini Revuelto
            </a>
        </h1>
        <p className="text-grey-darker text-sm">
            01/04/2024
        </p>
    </header>

    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a className="flex items-center no-underline hover:underline text-black" href="#">
            <img alt="Placeholder" className="block rounded-full h-6 w-6" src={dushan} />
            <p className="ml-2 text-sm">
                Dushan Chanuka
            </p>
        </a>
        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
            <span className="hidden">Add Favourite</span>
            <i className="fa fa-heart"></i>
        </a>
    </footer>

</article>
{/* END Article */}

</div>
  {/* Column */}
  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

{/* Article */}
<article className="overflow-hidden rounded-lg shadow-lg">

    <a href="#">
        <img alt="Placeholder" className="block h-auto w-full" src={carpng1} />
    </a>

    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
            Lamborghini Revuelto
            </a>
        </h1>
        <p className="text-grey-darker text-sm">
            01/04/2024
        </p>
    </header>

    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a className="flex items-center no-underline hover:underline text-black" href="#">
            <img alt="Placeholder" className="block rounded-full h-6 w-6" src={dushan} />
            <p className="ml-2 text-sm">
                Dushan Chanuka
            </p>
        </a>
        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
            <span className="hidden">Add Favourite</span>
            <i className="fa fa-heart"></i>
        </a>
    </footer>

</article>
{/* END Article */}

</div>
  {/* Column */}
  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

{/* Article */}
<article className="overflow-hidden rounded-lg shadow-lg">

    <a href="#">
        <img alt="Placeholder" className="block h-auto w-full" src={carpng1} />
    </a>

    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
            Lamborghini Revuelto
            </a>
        </h1>
        <p className="text-grey-darker text-sm">
            01/04/2024
        </p>
    </header>

    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a className="flex items-center no-underline hover:underline text-black" href="#">
            <img alt="Placeholder" className="block rounded-full h-6 w-6" src={dushan} />
            <p className="ml-2 text-sm">
                Dushan Chanuka
            </p>
        </a>
        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
            <span className="hidden">Add Favourite</span>
            <i className="fa fa-heart"></i>
        </a>
    </footer>

</article>
{/* END Article */}

</div>
  {/* Column */}
  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

{/* Article */}
<article className="overflow-hidden rounded-lg shadow-lg">

    <Link to={'/selectbooking'}>
        <img alt="Placeholder" className="block h-auto w-full" src={carpng1} />
    </Link>

    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
            Lamborghini Revuelto
            </a>
        </h1>
        <p className="text-grey-darker text-sm">
            01/04/2024
        </p>
    </header>

    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a className="flex items-center no-underline hover:underline text-black" href="#">
            <img alt="Placeholder" className="block rounded-full h-6 w-6" src={dushan} />
            <p className="ml-2 text-sm">
                Dushan Chanuka
            </p>
        </a>
        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
            <span className="hidden">Add Favourite</span>
            <i className="fa fa-heart"></i>
        </a>
    </footer>

</article>
{/* END Article */}

</div>
        {/* END Column */}

        {/* Remaining columns and articles are similar, so I've omitted them for brevity */}

    </div>
</div>

    </div>
  )
}

export default RenterHome