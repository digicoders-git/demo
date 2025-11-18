// src/Components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const employeeId = localStorage.getItem("employeeId");

  if (!employeeId) {
    return <Navigate to="/" replace />; // Redirect to Login
  }

  return children;
};

export default ProtectedRoute;
