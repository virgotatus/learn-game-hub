import PlatformService, { Platform } from "../services/PlatformService";
import useData from "./useData";

const usePlatform = () => {
  const { data, error, isLoading } = useData<Platform>(PlatformService);
  return { platforms: data, error, isLoading };
};

export default usePlatform;
