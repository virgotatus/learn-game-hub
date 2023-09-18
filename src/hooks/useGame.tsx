import GameService, { Game } from "../services/GameService";
import useData from "./useData";

export interface GameParams {
  genreName: string | null;
  platforms: string | null;
  ordering: string | null;
}

const useGames = (gameparams: GameParams) => {
  const { data, error, isLoading } = useData<Game>(
    GameService,
    {
      params: {
        genres: gameparams.genreName,
        platforms: gameparams.platforms,
        ordering: gameparams.ordering,
      },
    },
    [gameparams]
  );

  return { games: data, error, isLoading };
};

export default useGames;
