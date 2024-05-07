import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PCvpvLWKwtjim8k3pb7vVsiqvbOjZjr7UA9dFdXVdIYPYBNGXjvH7bbzdinD0jVMgleylYAm6gTlTZ1a3s3FiVO00xUnv8ob3');

function DisplayBill() {
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

    const handleClickPay = async () => {
        const stripe = await stripePromise;
        // Call backend to create checkout session
        const response = await axios.post('http://localhost:5556/api/payment/create-checkout-session', {
            bookingId: bookingId,
            totalCost: paymentDetails.totalCost,
        });
        // Redirect to Stripe checkout page
        const { error } = await stripe.redirectToCheckout({
            sessionId: response.data.sessionId,
        });

        if (error) {
            console.error('Error:', error);
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
                        <div className="grid grid-rows-2 gap-4">
                            <DetailLabel label="Booking ID" value={paymentDetails.booking_id} />
                            <DetailLabel label="Estimate Price" value={paymentDetails.estimatePrice} />
                            {paymentDetails.additionalCost ? (
                                <DetailLabel label="Additional Cost" value={paymentDetails.additionalCost} />
                            ) : (
                                <DetailLabel label="Additional Cost" value="No additional cost available" />
                            )}
                            {paymentDetails.totalCost ? (
                                <DetailLabel label="Total Cost" value={paymentDetails.totalCost} />
                            ) : (
                                <DetailLabel label="Total Cost" value="No total cost available" />
                            )}

                            <button
                                onClick={handleClickPay}
                                className={`font-bold py-2 px-4 mt-8 rounded ${paymentDetails.totalCost ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-500 text-gray-200 cursor-not-allowed'}`}
                                disabled={!paymentDetails.totalCost}
                            >
                                Pay
                            </button>

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

export default DisplayBill;
