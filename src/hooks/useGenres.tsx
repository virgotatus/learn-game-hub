import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import GenresService, { Genre } from "../services/GenresService";

const useGenres = () => {
  const [error, setError] = useState<string>("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = GenresService.get();
    request
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
