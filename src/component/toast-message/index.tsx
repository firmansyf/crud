import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { toast } from "react-toastify";

const ToastMessage = async ({ type, message }: any, options = {}) => {
  let config: any = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    icon: true,
  };
  config = { ...config, ...options };
  switch (type) {
    case "success":
      toast.success(message, config);
      break;
    case "error":
      toast.error(message, config);
      break;
    case "warn":
      toast.warn(message, config);
      break;
    case "info":
      toast.info(message, config);
      break;
    default:
      toast(message, config);
  }
};

export { ToastMessage };
