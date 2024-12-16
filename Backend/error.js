// Error handling middleware
export const errorMiddleware = (err, req, res, next) => {
  // Default values for error message and status code
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  // Handle Mongoose CastError
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: `Invalid resource: ${err.path}`,
    });
  }

  // Handle Mongoose ValidationError
  if (err.name === "ValidationError") {
    const validationErrors = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({
      success: false,
      message: validationErrors.join(', '),
    });
  }

  // General error response
  res.status(statusCode).json({
    success: false,
    message,
  });
};

// Exporting the middleware for use in your application
export default errorMiddleware;
