import GameService, { Game } from "../services/GameService";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";
import useData from "./useData";

export interface GameParams {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string | null;
  searchText: string | null;
}

const useGames = (gameparams: GameParams) => {
  const { data, error, isLoading } = useData<Game>(
    GameService,
    {
      params: {
        genres: gameparams.genre?.slug,
        platforms: gameparams.platform?.id,
        ordering: gameparams.ordering,
        search: gameparams.searchText,
      },
    },
    [gameparams]
  );

  return { games: data, error, isLoading };
};

export default useGames;
