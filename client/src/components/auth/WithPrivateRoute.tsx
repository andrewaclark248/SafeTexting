import { Navigate } from "react-router-dom";
import auth from "../../config/firebase";

interface Props {
    children?: React.ReactNode
  }
  

const WithPrivateRoute = ({ children }: Props) => {
  console.log("render prive route", auth.currentUser)

  if (!auth.currentUser) {
    return <Navigate to="/" replace />;

  }
  return <>{children}</>;

};

export default WithPrivateRoute;