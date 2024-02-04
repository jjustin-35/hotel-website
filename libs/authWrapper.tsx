"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/redux/user";
import { AppDispatch } from "@/config/configureStore";
import { RootState } from "@/config/configureStore";
import { useEffect } from "react";

const Auth = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const token = Cookies.get("access_token");

  useEffect(() => {
    if (!user && token) {
      dispatch(getUser());
    }

  }, [user, token]);
  return <>{children}</>;
};

export default Auth;
