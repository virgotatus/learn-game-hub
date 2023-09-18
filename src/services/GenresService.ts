import apiClient from "./api-client"

export interface Genre {
  id: number
  name: string
  slug: string
}

interface GenresResonse {
  count: number
  results: Genre[]
}

class GenresService {
  get() {
    const controller = new AbortController();
    const request = apiClient.get<GenresResonse>("/genres", {signal: controller.signal})
    return {request, cancel: () => controller.abort()};
  }
}

export default new GenresService();