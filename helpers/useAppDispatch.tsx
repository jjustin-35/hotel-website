import { useDispatch } from "react-redux";
import { AppDispatch } from "@/config/configureStore";

const useAppDispatch = () => {
  return useDispatch<AppDispatch>();
};

export default useAppDispatch;