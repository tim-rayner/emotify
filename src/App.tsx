import { Typography } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
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
      </div>
    </div>
  );
}

export default App;
