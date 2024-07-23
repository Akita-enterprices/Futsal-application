import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const AuthGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
    // return console.log("not authenticated");
  }

  return children;
};

export default AuthGuard;
