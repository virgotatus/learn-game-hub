import PlatformService from "../services/PlatformService";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  const { data, error, isLoading } = useData<Platform>(PlatformService);
  return { platforms: data, error, isLoading };
};

export default usePlatform;
