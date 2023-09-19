import Service, {Response} from "./HttpService";
import {CanceledError} from "./api-client"
import { Platform } from "../hooks/usePlatform";
export {CanceledError};


export interface Game {
  id : number
  name : string
  background_image: string
  ratings_count: number
  parent_platforms: {platform: Platform}[]
  metacritic: number
}

export interface GameResponse extends Response<Game> {
  count: number
}


export default new Service("/games");