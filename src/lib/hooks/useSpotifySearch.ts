import { useQuery } from "@tanstack/react-query";
import fetchSpotifySearch from "../fetchSpotifySearch";

export function useSpotifySearch(searchTerm: string, token?: string) {
  console.log("ayyup, just getting the api ready for you duck 🦆");
  return useQuery({
    queryKey: ["spotifySearch", searchTerm, token ?? "no-token-provided"],
    queryFn: fetchSpotifySearch,
    enabled: !!searchTerm && !!token,
  });
}
