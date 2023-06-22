import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const errorMessageProperty = {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const showErrors = (errorMsg) => {
  return toast.error(errorMsg, {
    ...errorMessageProperty,
  });
};

export const successMsg = (plainText) => {
  return toast.success(plainText, {
    ...errorMessageProperty,
  });
};
