import { useEffect, useState } from "react";
import GameService, { CanceledError, Game } from "../services/GameService";

export interface GameParams {
  genreName: string;
}

const useGames = ({ genreName }: GameParams) => {
  const [error, setError] = useState<string>("");
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = GameService.get({ genres: genreName });
    request
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, [genreName]);

  return { games, error, isLoading, setGames, setError };
};

export default useGames;
