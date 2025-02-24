import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Account from "./pages/Account";
import AdminBookings from "./pages/AdminBookings";
import AdminDashboard from "./pages/AdminDashboard";
import AdminEmployees from "./pages/AdminEmployees";
import AdminPayments from "./pages/AdminPayments";
import AdminReviews from "./pages/AdminReviews";
import AdminServices from "./pages/AdminServices";
import AdminUsers from "./pages/AdminUsers";
import Booking1 from "./pages/Booking1";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Review from "./pages/Review";
import Service from "./pages/Service";

// คอมโพเนนต์ ProtectedRoute สำหรับป้องกันการเข้าถึงหน้า
import ProtectedRoute from "./components/ProtectedRoute";

// สร้าง Logout และ RegisterAndLogout
function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* เส้นทางที่ต้องใช้ ProtectedRoute สำหรับแอดมิน */}
        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/bookings" element={<ProtectedRoute><AdminBookings /></ProtectedRoute>} />
        <Route path="/employees" element={<ProtectedRoute><AdminEmployees /></ProtectedRoute>} />
        <Route path="/payments" element={<ProtectedRoute><AdminPayments /></ProtectedRoute>} />
        <Route path="/reviews" element={<ProtectedRoute><AdminReviews /></ProtectedRoute>} />
        <Route path="/services" element={<ProtectedRoute><AdminServices /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
  
        {/* ลิงก์ที่ไม่ต้องการการตรวจสอบเข้าสู่ระบบ */}
        <Route path="/index" element={<Index />} />
        <Route path="/booking1" element={<Booking1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/review" element={<Review />} />
        <Route path="/service" element={<Service />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
