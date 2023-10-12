import axios from "axios";

const currentDomain = window.location.hostname;

export const axiosInstance = axios.create({
    baseURL: `http://${currentDomain}:5000/api`,
    headers: {
        "Content-Type": "application/json",
    },
    // withCredentials: true  // 이렇게 설정하면 요청시에 자동으로 쿠키가 포함됩니다.
});


export default axiosInstance;