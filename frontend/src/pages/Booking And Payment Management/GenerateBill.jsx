import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
// Define styles for your PDF
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
const MyDocument = ({ bookingDetails, paymentDetails }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={{ textAlign: 'center', marginBottom: 30, fontSize: 24 }}>EasyRent</Text>

                <Text style={{ marginBottom: 15, fontSize: 20 }}>Booking Details</Text>
                <Text>Booking ID: {bookingDetails._id}</Text>
                <Text>Renter ID: {bookingDetails.renter_id}</Text>
                <Text>Vehicle ID: {bookingDetails.vehicle_id}</Text>
                <Text>Driver ID: {bookingDetails.driver_id ? bookingDetails.driver_id : "No driver selected"}</Text>
                <Text>Service Type: {bookingDetails.serviceType}</Text>
                <Text>Start Date: {bookingDetails.startDate}</Text>
                <Text>End Date: {bookingDetails.endDate}</Text>
                <Text>Status: {bookingDetails.status}</Text>
                <Text>Location: {bookingDetails.location}</Text>
                <Text>Description: {bookingDetails.description ? bookingDetails.description : "No description available"}</Text>

                <Text style={{ marginBottom: 15, fontSize: 20, marginTop: 30 }}>Payment Details</Text>
                <Text>Booking ID: {paymentDetails.booking_id}</Text>
                <Text>Estimate Price: {paymentDetails.estimatePrice}</Text>
            </View>
        </Page>
    </Document>
);


function GenerateBill() {
    const { bookingId } = useParams();
    const [bookingDetails, setBookingDetails] = useState(null);
    const [renterDetails, setRenterDetails] = useState(null);
    const [vehicleDetails, setVehicleDetails] = useState(null);
    const [paymentDetails, setPaymentDetails] = useState(null);
    useEffect(() => {
        const fetchBookingDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5556/api/booking/${bookingId}`);
                const booking = response.data;
                setBookingDetails(booking);
                console.log('Booking details:', booking);

                // Fetch renter details based on renter_id
                const renterResponse = await axios.get(`http://localhost:5556/api/renter/${booking.renter_id}`);
                const renter = renterResponse.data;
                setRenterDetails(renter);
                console.log('Renter details:', renter);

                // Fetch vehicle details based on vehicle_id
                const vehicleResponse = await axios.get(`http://localhost:5556/api/vehicle/${booking.vehicle_id}`);
                const vehicle = vehicleResponse.data;
                setVehicleDetails(vehicle);
                console.log('Vehicle details:', vehicle);

            } catch (error) {
                console.error('Error fetching booking details:', error);
            }
        };

        const fetchPaymentDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5556/api/payment/booking/${bookingId}`);
                const payment = response.data;
                setPaymentDetails(payment);
                console.log('Payment details:', payment);
            } catch (error) {
                console.error('Error fetching payment details:', error);
            }
        };
        fetchBookingDetails();
        fetchPaymentDetails();

    }, [bookingId]);

    const handleUpdate = async () => {
        try {
            const updatedAdditionalCost = paymentDetails.additionalCost;
            const totalCost = parseFloat(paymentDetails.estimatePrice) + parseFloat(updatedAdditionalCost);

            await axios.patch(`http://localhost:5556/api/payment/booking/${bookingId}`, {
                additionalCost: updatedAdditionalCost,
                totalCost: totalCost
            });

            setPaymentDetails({
                ...paymentDetails,
                additionalCost: updatedAdditionalCost,
                totalCost: totalCost,
                paymentStatus: 'pending'
            });

            alert('Additional cost updated successfully');
        } catch (error) {
            console.error('Error updating additional cost:', error);
        }
    };


    return (
        <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold mb-8">Generate Bill</h1>
            {bookingDetails && paymentDetails && renterDetails && vehicleDetails && (
                <div className="flex flex-row space-x-8">
                    <div className="border border-gray-300 rounded-lg p-6 flex-1">
                        <h2 className="text-xl font-bold mb-4">Booking Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <DetailLabel label="Renter Name" value={renterDetails.username} />
                            <DetailLabel label="Renter Address" value={renterDetails.address} />
                            <DetailLabel label="Vehicle Brand" value={vehicleDetails.brand} />
                            <DetailLabel label="Vehicle Model" value={vehicleDetails.model} />
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
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <DetailLabel label="Payment Status" value={paymentDetails.paymentStatus} />
                            <DetailLabel label="Estimate Price" value={paymentDetails.estimatePrice} />
                        </div>
                        <div className="mb-4 w-full">
                            <div className="mb-2">Additional Cost</div>
                            <div className="flex items-center mb-4 w-full">
                                <input
                                    type="text"
                                    className="border border-gray-300 p-2 rounded-md flex-1 mr-4"
                                    value={paymentDetails.additionalCost || ''}
                                    onChange={(e) => {
                                        // Allow only numeric input
                                        const numericRegex = /^[0-9]*$/;
                                        if (numericRegex.test(e.target.value) || e.target.value === '') {
                                            setPaymentDetails({ ...paymentDetails, additionalCost: e.target.value });
                                        }
                                    }}
                                />

                                <button
                                    className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
                                    onClick={handleUpdate}
                                >
                                    Generate Bill
                                </button>
                            </div>
                            <DetailLabel label="Total Cost" value={paymentDetails.totalCost || 'No total cost'} />
                        </div>
                        <div>
                            {bookingDetails && paymentDetails && (
                                <div className=''>
                                    <h2 className="text-xl font-bold mb-4 mt-4">Payment Report</h2>
                                    <PDFDownloadLink className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded" document={<MyDocument bookingDetails={bookingDetails} paymentDetails={paymentDetails} />} fileName="bill.pdf">
                                        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Generate PDF')}
                                    </PDFDownloadLink>
                                </div>
                            )}
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
