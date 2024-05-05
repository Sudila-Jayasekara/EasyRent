import React from 'react';

const ApprovedF = () => {
    return (
        <div className="h-screen max-w-screen-lg mx-6 mt-6 space-y-6 mr-72">
            <div className="max-w-screen-md md:w-3/4 mx-auto">
                <div className="inline-flex flex-col space-y-2 items-center justify-end flex-1 h-full p-4 bg-gray-700 rounded-xl">
                    <div className="inline-flex space-x-10">
                        <p className="w-full text-2xl font-semibold text-yellow-400">Vehicle ID : 01</p>
                        <div>
                            <p tabIndex="0" className=" text-left rounded text-gray-600 px-4 py-1 bg-yellow-200 ">Approved</p>
                        </div>
                    </div>
                    <p className="w-full pb-8 text-sm tracking-wide leading-tight text-white">Prius 3rd Gen</p>
                    <div className="inline-flex space-x-10 rounded mr-auto">
                        <div className="opacity-95 border rounded-lg border-white  bg-red-400 px-4">
                            <p className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2">VIEW</p>
                        </div>
                        <div className="opacity-95 border rounded-lg border-white  bg-red-400 px-4">
                            <p className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2">ADD</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-md md:w-3/4 mx-auto">
                <div className="inline-flex flex-col space-y-2 items-center justify-end flex-1 h-full p-4 bg-gray-700 rounded-xl">
                    <div className="inline-flex space-x-10">
                        <p className="w-full text-2xl font-semibold text-yellow-400">Vehicle ID : 02</p>
                        <div>
                            <p tabIndex="0" className=" text-left rounded text-gray-600 px-4 py-1 bg-yellow-200 ">Approved</p>
                        </div>
                    </div>
                    <div className="inline-flex space-x-10 rounded mr-auto">
                        <p className="w-full pb-8 text-sm tracking-wide leading-tight text-white"> Vehicle Condition Checked.</p>
                        <p className="w-full pb-8 text-sm tracking-wide leading-tight text-white"> Vehicle Details checked.</p>
                    </div>
                    <div className="inline-flex space-x-10 rounded mr-auto">
                        <div className="opacity-95 border rounded-lg border-white  bg-red-400 px-4">
                            <p className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2">VIEW</p>
                        </div>
                        <div className="opacity-95 border rounded-lg border-white  bg-red-400 px-4">
                            <p className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2">ADD</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-md md:w-3/4 mx-auto">
                <div className="inline-flex flex-col space-y-2 items-center justify-end flex-1 h-full p-4 bg-gray-400 rounded-xl">
                    <p className="w-full text-2xl font-semibold text-yellow-400">Vehicle ID : 01</p>
                    <p className="w-full pb-8 text-sm tracking-wide leading-tight text-black">Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.</p>
                    <div className="rounded mr-auto">
                        <div className="opacity-95 border rounded-lg border-white  bg-red-400 px-4">
                            <p className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2">ADD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApprovedF;
