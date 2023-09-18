import GenresService, { Genre } from "../services/GenresService";
import useData from "./useData";

const useGenres = () => {
  const { data, error, isLoading } = useData<Genre>(GenresService);
  return { genres: data, error, isLoading };
};

export default useGenres;
