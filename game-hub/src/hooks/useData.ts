import { Axios, AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  dep?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);
      apiClients
        .get<FetchResponse<T>>(endPoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
        });
      return () => controller.abort();
    },
    dep ? [...dep] : []
  );

  return { data, error, isLoading };
};

export default useData;
