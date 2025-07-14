import { useState } from "react";
import { useSpotifySearch } from "../lib/hooks/useSpotifySearch";
import { useGetSpotifySession } from "../lib/hooks/useGetSpotifySession";

const SpotifySearchComponent = () => {
  const [search, setSearch] = useState("");

  const { token } = useGetSpotifySession();

  const { data, error, isLoading } = useSpotifySearch(search, token);

  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search Spotify..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.tracks?.items.map((track) => (
            <li key={track.id}>
              {track.name} — {track.artists[0].name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { SpotifySearchComponent };
