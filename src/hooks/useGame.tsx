import GameService, { Game } from "../services/GameService";
import useData from "./useData";

export interface GameParams {
  genreName: string | null;
  platforms: string | null;
  ordering: string | null;
}

const useGames = ({ genreName, platforms, ordering }: GameParams) => {
  const { data, error, isLoading } = useData<Game>(
    GameService,
    { params: { genres: genreName, platforms: platforms, ordering: ordering } },
    [genreName, platforms, ordering]
  );

  return { games: data, error, isLoading };
};

export default useGames;
