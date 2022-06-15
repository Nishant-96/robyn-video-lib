import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = function ({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [userState, setUserState] = useState({
    userDetails:
      JSON.parse(localStorage.getItem("VIDEO_AUTH_USER"))?.userDetails || "",
    token: JSON.parse(localStorage.getItem("VIDEO_AUTH_TOKEN"))?.token || "",
  });

  const token = userState.token;

  const loginHandler = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });

      if (response.status === 200) {
        const {
          data: { foundUser, encodedToken },
        } = response;
        setUserState({ userDetails: foundUser, token: encodedToken });
        localStorage.setItem(
          "VIDEO_AUTH_USER",
          JSON.stringify({
            userDetails: foundUser,
          })
        );
        localStorage.setItem(
          "VIDEO_AUTH_TOKEN",
          JSON.stringify({
            token: encodedToken,
          })
        );
        navigate(location?.state?.from?.pathname || "/", {
          replace: true,
        });
        toast.success(`Welcome, ${foundUser.firstName}`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(`Login Error !`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const isLoggedIn = function () {
    if (userState.userDetails === "") {
      return false;
    }
    return true;
  };

  const logoutHandler = () => {
    setUserState({
      userDetails: "",
      token: "",
    });
    localStorage.removeItem("VIDEO_AUTH_USER");
    localStorage.removeItem("VIDEO_AUTH_TOKEN");
    navigate("/");
    toast.success(`Logged Out`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const signUpHandler = async (email, password, name, confirmPass) => {
    try {
      if (
        email !== "" &&
        password !== "" &&
        name !== "" &&
        confirmPass === password
      ) {
        const response = await axios.post("/api/auth/signup", {
          email,
          password,
          name,
        });
        if (response.status === 201) {
          const {
            data: { createdUser, encodedToken },
          } = response;
          setUserState({ userDetails: createdUser, token: encodedToken });
          localStorage.setItem(
            "VIDEO_AUTH_USER",
            JSON.stringify({
              userDetails: createdUser,
            })
          );
          localStorage.setItem(
            "VIDEO_AUTH_TOKEN",
            JSON.stringify({
              token: encodedToken,
            })
          );
          navigate("/explore");
          toast.success(`Welcome, ${createdUser.name}`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else throw new Error("Check all input Credentials");
    } catch (error) {
      console.error(error);
      toast.error(`Signup Error ! ${error.message}`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, loginHandler, isLoggedIn, logoutHandler, signUpHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
