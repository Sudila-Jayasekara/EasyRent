import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function GenerateBill() {
    const { bookingId } = useParams();
    const [bookingDetails, setBookingDetails] = useState(null);
    const [paymentDetails, setPaymentDetails] = useState(null);
    const [tripStatus, setTripStatus] = useState('Not Started');

    useEffect(() => {
        const fetchBookingDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5556/api/booking/${bookingId}`);
                const booking = response.data;
                setBookingDetails(booking);
            } catch (error) {
                console.error('Error fetching booking details:', error);
            }
        };
    
        const fetchPaymentDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5556/api/payment/booking/${bookingId}`);
                const payment = response.data;
                setPaymentDetails(payment);
            } catch (error) {
                console.error('Error fetching payment details:', error);
            }
        };
    
        fetchBookingDetails();
        fetchPaymentDetails();
    
    }, [bookingId]);


    const handleStartTrip = async () => {
        try {
            // Call backend to start the trip
            // Example:
        const paymentResponse =  await axios.put(`http://localhost:5556/api/payment/booking/${bookingId}`, { tripStart: new Date() });
            setTripStatus('Trip Started');
        } catch (error) {
            console.error('Error starting trip:', error);
        }
    };

    const handleEndTrip = async () => {
        try {
            // Call backend to end the trip
            // Example:
            // await axios.post(`http://localhost:5556/api/trip/end/${bookingId}`, { endTime: new Date() });
            setTripStatus('Trip Ended');
        } catch (error) {
            console.error('Error ending trip:', error);
        }
    };
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Bill Infomation</h1>
            {bookingDetails && paymentDetails && (
                <div className="flex flex-row space-x-8">
                    <div className="border border-gray-300 rounded-lg p-6 flex-1">
                        <h2 className="text-xl font-bold mb-4">Booking Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <DetailLabel label="Booking ID" value={bookingDetails._id} />
                            <DetailLabel label="Renter ID" value={bookingDetails.renter_id} />
                            <DetailLabel label="Vehicle ID" value={bookingDetails.vehicle_id} />
                            {bookingDetails.driver_id ? (
                                <DetailLabel label="Driver ID" value={bookingDetails.driver_id} />
                            ) : (
                                <DetailLabel label="Driver ID" value="No driver selected" />
                            )}
                            <DetailLabel label="Service Type" value={bookingDetails.serviceType} />
                            <DetailLabel label="Start Date" value={bookingDetails.startDate} />
                            <DetailLabel label="End Date" value={bookingDetails.endDate} />
                            <DetailLabel label="Status" value={bookingDetails.status} />
                            <DetailLabel label="Location" value={bookingDetails.location} />
                            {bookingDetails.description ? (
                                <DetailLabel label="Description" value={bookingDetails.description} />
                            ) : (
                                <DetailLabel label="Description" value="No description available" />
                            )}
                        </div>


                    </div>
                    
                    <div className="border border-gray-300 rounded-lg p-6 flex-1">
                    <h2 className="text-xl font-bold mb-4">Payment Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <DetailLabel label="Booking ID" value={paymentDetails.booking_id} />
                            <DetailLabel label="Estimate Price" value={paymentDetails.estimatePrice} />
                        </div>
                        <h2 className="text-xl font-bold mb-4 mt-6">Trip Status: {tripStatus}</h2>
                        {tripStatus === 'Not Started' ? (
                            <button onClick={handleStartTrip} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                                Start Trip
                            </button>
                        ) : (
                            <button onClick={handleEndTrip} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">
                                End Trip
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

const DetailLabel = ({ label, value }) => {
    return (
        <div>
            <div className="mb-2">{label}</div>
            <div className="border border-gray-300 p-2 rounded-md">{value}</div>
        </div>
    );
};

export default GenerateBill;
