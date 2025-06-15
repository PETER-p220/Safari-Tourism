import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider  
  theme={{
    token: {
        colorPrimary: "#228B22" , 
        // colorPrimaryActive: "#228B00",
        // colorPrimaryHover: "#228B11"
    }
  }}>
    <ToastContainer />
    <App />
  </ConfigProvider>
);
