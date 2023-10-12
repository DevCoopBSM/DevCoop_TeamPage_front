import { useEffect, useState } from "react";
import { axiosInstance } from "../axios";

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post("/login", {
      email: email,
      password: password,
    });
    return {
      name: response.data.name,
      message: response.data.message,
    };
  } catch (error) {
    throw error;
  }
};

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setIsLoggedIn(document.cookie.includes('isLoggedIn')); 
  }, [isLoggedIn]);

  const handleInputId = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, message } = await login(email, password);
      setIsLoggedIn(true);
      // 알림 혹은 로그로 사용자 정보와 로그인 상태 표시
      console.log(name, message, isLoggedIn);
      // 로그인 후 리디렉션 처리
      window.location.replace("/");
    } catch (error) {
        console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/logout");
      setIsLoggedIn(false);
      window.location.replace("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return {
    email,
    password,
    handleInputId,
    handleInputPw,
    handleSubmit,
    handleLogout,
    isLoggedIn,
  };
};