import { Platform } from "../hooks/usePlatform";
import Service, {Response} from "./HttpService";


export interface PlatformResponse extends Response<Platform> {
  count: number
}

export default new Service("/platforms");