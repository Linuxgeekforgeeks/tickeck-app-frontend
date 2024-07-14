import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";

export const useAuthStatus = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [checkingStatus, setcheckingStatus] = useState(true);
  const userInfo = useAuthContext();
  const user=userInfo.user
  console.log(loggedIn)
  useEffect(() => {
    if (user) {
      setloggedIn(true);
    }else{
        setloggedIn(false)
    }
    setcheckingStatus(false)
  }, [user]);
  return {loggedIn,checkingStatus}
};
