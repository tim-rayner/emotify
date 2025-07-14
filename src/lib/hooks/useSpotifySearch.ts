import { useQuery } from "@tanstack/react-query";
import fetchSpotifySearch from "../fetchSpotifySearch";
import { convertEmojiToText } from "../emoji";

export function useSpotifySearch(searchTerm: string, token?: string) {
  // convert any text with emojis to string
  const newSearchTerm = convertEmojiToText(searchTerm);

  console.log("newSearchTerm", newSearchTerm);

  return useQuery({
    queryKey: ["spotifySearch", newSearchTerm, token ?? "no-token-provided"],
    queryFn: fetchSpotifySearch,
    enabled: !!newSearchTerm && !!token,
  });
}
