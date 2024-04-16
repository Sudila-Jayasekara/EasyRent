import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function GenerateBill() {
    const { bookingId } = useParams();
    const [bookingDetails, setBookingDetails] = useState(null);
    const [paymentDetails, setPaymentDetails] = useState(null);

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


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Show Bill</h1>
            {bookingDetails && paymentDetails && (
                <div className="flex flex-row space-x-8">
                    <div className="border border-gray-300 rounded-lg p-6 flex-1">
                        <h2 className="text-xl font-bold mb-4">Booking Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <DetailLabel label="Booking ID" value={bookingDetails._id} />
                            <DetailLabel label="Renter ID" value={bookingDetails.renter_id} />
                            <DetailLabel label="Vehicle ID" value={bookingDetails.vehicle_id} />
                            <DetailLabel label="Driver ID" value={bookingDetails.driver_id} />
                            <DetailLabel label="Service Type" value={bookingDetails.serviceType} />
                            <DetailLabel label="Start Date" value={bookingDetails.startDate} />
                            <DetailLabel label="End Date" value={bookingDetails.endDate} />
                            <DetailLabel label="Status" value={bookingDetails.status} />
                            <DetailLabel label="Location" value={bookingDetails.location} />
                            <DetailLabel label="Description" value={bookingDetails.description} />
                        </div>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-6 flex-1">
                        <h2 className="text-xl font-bold mb-4">Payment Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <DetailLabel label="Booking ID" value={paymentDetails.booking_id} />
                            <DetailLabel label="Estimate Price" value={paymentDetails.estimatePrice} />
                        </div>
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
