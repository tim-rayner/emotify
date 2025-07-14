import { Stack, Typography } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import { SpotifySearchComponent } from "./components/SpotifySearch";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <Stack className="max-w-4xl mx-auto">
          <Typography
            variant="h2"
            component="h1"
            className="text-center mb-8 text-gray-800"
          >
            Welcome to Emotify
          </Typography>

          <Typography variant="h5" className="text-center mb-8 text-gray-600">
            An emoji-friendly Search Engine for music
          </Typography>
        </Stack>

        <SpotifySearchComponent />
      </Stack>
    </QueryClientProvider>
  );
}

export default App;
