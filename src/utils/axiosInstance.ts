import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.18.17:5000/api",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config:any) => {
  const accessToken = localStorage.getItem("cvCraftAccessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response:any) => {
    
    if (response.config.responseType === "blob") {
      const contentDisposition = response.headers["content-disposition"];
      const fileName = contentDisposition
        ? contentDisposition.split("filename=")[1]
        : "data.xlsx";

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");

      link.href = url;
      link.setAttribute("download", fileName.replace(/"/g, ""));
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    return response;
  },

  (error:any) => {
    // if (error.response.status === 401) {
    //   if (localStorage.getItem("quickChatAminToken")) {
    //     localStorage.removeItem("quickChatAminToken");
    //     window.location.href = "/";
    //   }
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;
