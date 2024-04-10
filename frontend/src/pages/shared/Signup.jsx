import React, { useState } from 'react';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [licensePhoto, setLicensePhoto] = useState(null); // For storing license photo
    const [userType, setUserType] = useState('renter');

    const handleSignup = () => {
        // Handle signup logic here
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            
            <form className="border border-gray-300 rounded p-4 max-w-md">
                <span className="text-2xl font-bold mb-4 block"> Sign Up As a {
                    userType === 'renter' ? 'Renter' :
                    userType === 'owner' ? 'Owner' :
                    userType === 'driver' ? 'Driver' :
                    userType === 'employee' ? 'Employee' :
                    ''
                }
                </span>
                <div className="flex mb-4">
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="userType"
                            value="renter"
                            checked={userType === 'renter'}
                            onChange={() => setUserType('renter')}
                            className='mr-1'
                        />
                        Renter
                    </label>
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="userType"
                            value="owner"
                            checked={userType === 'owner'}
                            onChange={() => setUserType('owner')}
                            className='mr-1'
                        />
                        Owner
                    </label>
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="userType"
                            value="driver"
                            checked={userType === 'driver'}
                            onChange={() => setUserType('driver')}
                            className='mr-1'
                        />
                        Driver
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="userType"
                            value="employee"
                            checked={userType === 'employee'}
                            onChange={() => setUserType('employee')}
                            className='mr-1'
                        />
                        Employee
                    </label>
                </div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                {userType === 'driver' && (
                    <div className="mb-2 flex space-x-2">
                        <div className='w-1/3 flex items-center'>
                            <label htmlFor="licensePhoto" className="mb-1">License Photo</label>
                        </div>
                        <div className='w-2/3'>
                            <input
                                type="file"
                                id="licensePhoto"
                                accept="image/*"
                                onChange={(e) => setLicensePhoto(e.target.files[0])}
                                className="p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                    </div>
                )}
                <button
                    onClick={handleSignup}
                    className="bg-blue-500 text-white px-4 py-2 my-2 rounded w-full"
                >
                    Sign Up as {userType}
                </button>
            </form>
        </div>
    );
};

export default Signup;
