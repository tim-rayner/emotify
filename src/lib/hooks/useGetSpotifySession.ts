import { useQuery } from "@tanstack/react-query";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

async function fetchSpotifyToken(): Promise<string> {
  const authString = `${clientId}:${clientSecret}`;
  // deliberately avoid btoa - providing node support in case of possible future reuse
  const authBase64 = Buffer.from(authString).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${authBase64}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Spotify token 😵‍💫");
  }

  const data = await response.json();
  return data.access_token;
}

export function useGetSpotifySession() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["spotifySession"],
    queryFn: fetchSpotifyToken,
    staleTime: 1000 * 60 * 30, // 30 minutes
    refetchOnWindowFocus: false,
  });

  return {
    token: data,
    isLoading,
    error,
  };
}
