import { useLocation, Navigate } from "react-router-dom";
import PropTypes from "prop-types"; 
import { useAuth } from "../hooks/useAuth"; 

const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  const isAuth = useAuth();
  
  return isAuth ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProtectedRoutes };
