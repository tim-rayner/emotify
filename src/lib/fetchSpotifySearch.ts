export interface SpotifyArtist {
  id: string;
  name: string;
}

export interface SpotifyTrack {
  id: string;
  name: string;
  artists: SpotifyArtist[];
}

export interface SpotifySearchResponse {
  tracks: {
    items: SpotifyTrack[];
  };
}

interface FetchSpotifySearchParams {
  queryKey: [string, string, string];
}

const fetchSpotifySearch = async ({
  queryKey,
}: FetchSpotifySearchParams): Promise<SpotifySearchResponse> => {
  const [, searchTerm, token] = queryKey;

  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      searchTerm
    )}&type=track,artist`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Spotify API request failed");
  }

  return response.json();
};

export default fetchSpotifySearch;
