import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logopage from "./pages/logopage";
import Futureoffutsal from "./pages/Futureoffutsal";
import Createaccount from "./pages/createaccount";
import Login from "./pages/login";
import Verifyaccount from "./pages/verifyaccount";
import Forgotpassword from "./pages/forgotpassword";
import Welcome from "./pages/welcome";
import Nearcourt from "./pages/nearcourt";
import Courtdetails from "./pages/courtdetails";
import Bookingsummary from "./pages/bookingsummary";
import Payment from "./pages/payment";
import Congrats from "./pages/congrats";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Logopage />} />
          <Route path="/Futureoffutsal" element={<Futureoffutsal />} />
          <Route path="/createaccount" element={<Createaccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verifyaccount" element={<Verifyaccount />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/nearcourt" element={<Nearcourt />} />
          <Route path="/courtdetails" element={<Courtdetails />} />
          <Route path="/bookingsummary" element={<Bookingsummary />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/congrats" element={<Congrats />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
