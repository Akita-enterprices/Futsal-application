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
import CreateAdminAccount from "./pages/createAdminaccount";
import LoginAdmin from "./pages/loginAdmin";
import VerifyAdminaccount from "./pages/verifyAdminaccount";
import Register from "./pages/register";
import HomePage from "./pages/homepage";
import Booking from "./pages/booking";
import Availability from "./pages/availability";
import Review from "./pages/review";
import Profile from "./pages/profile";
import AuthGuard from "./auth/AuthGurd";
import Findcourt from "./pages/findcourt";

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
          <Route
            path="/welcome"
            element={
              <AuthGuard>
                <Welcome />
              </AuthGuard>
            }
          />
          <Route
            path="/nearcourt"
            element={
              <AuthGuard>
                <Nearcourt />
              </AuthGuard>
            }
          />
          <Route
            path="/courtdetails"
            element={
              <AuthGuard>
                <Courtdetails />
              </AuthGuard>
            }
          />
          <Route
            path="/bookingsummary"
            element={
              <AuthGuard>
                <Bookingsummary />
              </AuthGuard>
            }
          />
          <Route
            path="/payment"
            element={
              <AuthGuard>
                <Payment />
              </AuthGuard>
            }
          />
          <Route
            path="/congrats"
            element={
              <AuthGuard>
                <Congrats />
              </AuthGuard>
            }
          />
          <Route path="/createAdminaccount" element={<CreateAdminAccount />} />
          <Route path="/loginAdmin" element={<LoginAdmin />} />
          <Route path="/verifyAdminaccount" element={<VerifyAdminaccount />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <AuthGuard>
                <Booking />
              </AuthGuard>
            }
          />
          <Route
            path="/availability"
            element={
              <AuthGuard>
                <Availability />
              </AuthGuard>
            }
          />
          <Route
            path="/review"
            element={
              <AuthGuard>
                <Review />
              </AuthGuard>
            }
          />
          {/* <Route path="/profile" element={<Profile/>}/> */}
          <Route
            path="/profile"
            element={
              <AuthGuard>
                <Profile />
              </AuthGuard>
            }
          />
          <Route
            path="/courtdetails/:courtId"
            element={
              <AuthGuard>
                <Courtdetails />
              </AuthGuard>
            }
          />
          <Route path="/findcourt" element={<Findcourt/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
