import { stringify } from "querystring";
import { apiMethod } from "@/constants/types/api";

const fetchApi = async (
  url: string,
  method: apiMethod,
  data?: Record<string, any>,
  headers?: Record<string, string>
) => {
  const reqHeaders = {
    "Content-Type": "application/json",
    ...headers,
  };

  const body = (() => {
    if (method === apiMethod.GET) {
      return stringify(data);
    }

    return JSON.stringify(data);
  })();

  const reqUrl = method === apiMethod.GET ? `${url}?${body}` : url;

  const res = await fetch(reqUrl, {
    method,
    headers: reqHeaders,
    ...(method !== apiMethod.GET && { body }),
  });
  const result = await res.json();

  return result;
};

export default fetchApi;
