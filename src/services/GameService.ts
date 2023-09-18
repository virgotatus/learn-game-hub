import apiClient, {CanceledError} from "./api-client"

export {CanceledError};

interface Props {
  page?: number
  page_size? : number
  genres? : string
}

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Game {
  id : number
  name : string
  background_image: string
  ratings_count: number
  parent_platforms: {platform: Platform}[]
  metacritic: number
}

interface GameResponse {
  count: number
  results: Game[]
}

class GameService {
  get({page, page_size, genres}: Props) {
    const controller = new AbortController();
    const request = apiClient.get<GameResponse>("/games", {
      signal: controller.signal, 
      params: Object.assign({},
         page? {page: page}:{},
         page_size? {page_size:page_size}:{},
         genres? {genres: genres}:{}
        )
      })
    return {request, cancel: () => controller.abort()};
  }
}

export default new GameService();