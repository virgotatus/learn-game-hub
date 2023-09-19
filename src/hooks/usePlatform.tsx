import platform_cache from "../data/platform_cache";
import PlatformService from "../services/PlatformService";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatform = () => {
//   const { data, error, isLoading } = useData<Platform>(PlatformService);
//   return { platforms: data, error, isLoading };
// };
const usePlatform = () => {
  return { platforms: platform_cache, error: null, isLoading: false };
};

export default usePlatform;
