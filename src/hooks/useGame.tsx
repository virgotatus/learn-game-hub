import GameService, { Game } from "../services/GameService";
import useData from "./useData";

export interface GameParams {
  genreName: string | null;
}

const useGames = ({ genreName }: GameParams) => {
  const { data, error, isLoading } = useData<Game>(
    GameService,
    { params: { genres: genreName } },
    [genreName]
  );

  return { games: data, error, isLoading };
};

export default useGames;
