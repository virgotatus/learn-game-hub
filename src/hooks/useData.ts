import { useEffect, useState } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import HttpService, {Response} from "../services/HttpService";

const useData = <T>(httpService: HttpService, httpParams?:AxiosRequestConfig, devs?:any[]) => {
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = httpService.get<Response<T>>(httpParams);
    request
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, devs? [...devs]: []);

  return { data, error, isLoading };
};

export default useData;
