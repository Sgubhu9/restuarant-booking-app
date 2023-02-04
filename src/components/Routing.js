import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import About from "./pages/About";
import Reservation from "./pages/BookingPage";
import Order from "./pages/OrderPage";
import Login from "./pages/LoginPage";
import Confirmation from "./pages/ConfirmationPage";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservations" element={<Reservation />} />

      <Route path="/orderPage" element={<Order />} />
      <Route path="/loginPage" element={<Login />} />

      <Route path="/confirmationPage" element={<Confirmation />} />
    </Routes>
  );
}
