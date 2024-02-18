"use client";

import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { getUser } from "@/redux/user";
import { RootState } from "@/config/configureStore";
import useAppDispatch from "@/helpers/useAppDispatch";

const Auth = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const token = Cookies.get("access_token");

  useEffect(() => {
    if (!user && token) {
      dispatch(getUser());
    }
  }, [user, token]);
  return <>{children}</>;
};

export default Auth;
