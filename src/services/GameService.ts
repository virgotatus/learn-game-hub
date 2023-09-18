import Service, {Response} from "./HttpService";
import {CanceledError} from "./api-client"

export {CanceledError};

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

export interface GameResponse extends Response<Game> {
  count: number
}


export default new Service("/games");