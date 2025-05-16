import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
// import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Signup/Signup";
import Booking from "./pages/Booking/Booking";
import BookingDetails from "./pages/Booking/BookingDetails";

import Store from "./pages/Store/Store";
import PrivateRoute from "./utils/PrivateRoute";
import Profile from "./pages/Profile/Profile";
import PricingPage from "./pages/Pricing/Pricing";
import AdminDashboard from "./pages/Dashboard/Dashboard";
import ReceptionistDashboard from "./pages/Receptionist/Receptionist";
import ProductDetails from './pages/Store/ProductDetails';
function App() {
  
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login  />} />
            <Route path="/signup" element={<Signup  />} />
            {/* <Route path="/booking" element={<Booking />} /> */}
            <Route path="/store" element={<Store />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            {/* Protected Route */}
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking/:roomId" element={<BookingDetails />} />{" "}
            {/* Route for BookingDetails */}
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/Receptionist" element={<ReceptionistDashboard />} />{" "}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
