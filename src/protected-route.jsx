import React from "react";
import { checkTokenIsPresent } from "./utils";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  let { children, ...restProps } = props;
  let navigate = useNavigate();
  const [isAuthenticating, setIsAuthenticating] = React.useState(true);
  React.useEffect(() => {
    let token = checkTokenIsPresent();
    if (token) {
      setIsAuthenticating(false);
    } else {
      navigate("/login");
    }
  }, []);
  return <div>{!isAuthenticating && children}</div>;
}
