// this is my app context file
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  // this const  use for currencysymbol
  const currencySymbol = "₹";
  //this const use for get backend  URL
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [Services, setServices] = useState([]);
//   This state used for check token are avelible in localStorage
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );
  const [userData, setUserData] = useState(false);

//   This function are used for chekck service data 
// thay chek from backend URL data thi avelible show success msg else errorr
  const getServicesData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/services/list");
      if (data.success) {
        setServices(data.Services);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.message);
    }
  };

//   This function are used for check user data when user data are avelibel that show success msg eles error
  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
        headers: { token },
      });
      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.message);
    }
  };
//  This value function are get all value and decrliy in provider
  const value = {
    Services,
    getServicesData,
    currencySymbol,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
  };

//   get all service data
  useEffect(() => {
    getServicesData();
  }, []);

//     check token
  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
