import Service, {Response} from "./HttpService";

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface PlatformResponse extends Response<Platform> {
  count: number
}

export default new Service("/platforms");