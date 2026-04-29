import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Account from "./pages/account";
import Book from "./pages/book";
import Bookings from "./pages/Bookings";


import Orders from "./pages/orders";
import Addresses from "./pages/addresses";
import Measurements from "./pages/measurements";
import Privacy from "./pages/privacy";

function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/book" element={<Book />} />
      <Route path="/bookings" element={<Bookings />} />

      {/* ACCOUNT (with sidebar layout) */}
      <Route path="/account" element={<Account />}>
        <Route index element={<Orders />} />
        <Route path="orders" element={<Orders />} />
        <Route path="addresses" element={<Addresses />} />
        <Route path="measurements" element={<Measurements />} />
        <Route path="privacy" element={<Privacy />} />
        
      </Route>

    </Routes>
  );
}

export default App;