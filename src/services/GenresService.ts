import Service, {Response} from "./HttpService"

export interface Genre {
  id: number
  name: string
  slug: string
  image_background: string
}

export interface GenresResonse extends Response<Genre> {
  count: number
}

export default new Service("/genres");