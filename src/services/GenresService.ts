import { Genre } from "../hooks/useGenres"
import Service, {Response} from "./HttpService"


export interface GenresResonse extends Response<Genre> {
  count: number
}

export default new Service("/genres");