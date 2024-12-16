import { Reservation } from "./reservation.js"; // Import the Reservation model

const send_reservation = async (req, res) => {
  const { firstName, lastName, email, date, time, phone } = req.body;

  // Check for missing fields
  const requiredFields = [firstName, lastName, email, date, time, phone];
  const missingFields = requiredFields.filter(field => !field);

  if (missingFields.length > 0) {
    return res.status(400).json({
      success: false,
      message: `Please fill the following fields: ${missingFields.join(', ')}`,
    });
  }

  try {
    // Create and save the reservation
    const newReservation = await Reservation.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Reservation created successfully!",
      reservation: newReservation,
    });
  } catch (error) {
    // Log error and return a simple error message
    console.error("Error saving reservation:", error);
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred.",
    });
  }
};

export default send_reservation;
