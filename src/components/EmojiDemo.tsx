import { useState } from 'react';
import { Stack, Typography, TextField, Button, Paper, Chip } from '@mui/material';
import { 
  emojify, 
  get, 
  search, 
  random, 
  unemojify, 
  strip,
  has 
} from '../../node-emoji/lib/index.js';

export function EmojiDemo() {
  const [inputText, setInputText] = useState(':heart: I love :pizza: and :coffee:!');
  const [searchTerm, setSearchTerm] = useState('happy');
  const [emojiName, setEmojiName] = useState('heart');

  const handleRandomEmoji = () => {
    const randomEmoji = random();
    setEmojiName(randomEmoji.name);
  };

  const searchResults = search(searchTerm).slice(0, 10); // Limit to 10 results
  const singleEmoji = get(emojiName);
  const hasEmoji = has(emojiName);

  return (
    <Stack spacing={4} className="max-w-4xl mx-auto p-6">
      <Typography variant="h4" component="h2" className="text-center text-gray-800">
        Node-Emoji Demo
      </Typography>

      {/* Emojify Demo */}
      <Paper className="p-4">
        <Typography variant="h6" className="mb-3">
          Emojify Text (Convert :emoji_name: to 🎯)
        </Typography>
        <TextField
          fullWidth
          label="Enter text with :emoji_names:"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="mb-3"
        />
        <Typography variant="body1" className="p-3 bg-gray-50 rounded">
          <strong>Original:</strong> {inputText}
        </Typography>
        <Typography variant="body1" className="p-3 bg-green-50 rounded">
          <strong>Emojified:</strong> {emojify(inputText)}
        </Typography>
        <Typography variant="body1" className="p-3 bg-blue-50 rounded">
          <strong>Unemojified:</strong> {unemojify(emojify(inputText))}
        </Typography>
        <Typography variant="body1" className="p-3 bg-red-50 rounded">
          <strong>Stripped:</strong> {strip(emojify(inputText))}
        </Typography>
      </Paper>

      {/* Single Emoji Demo */}
      <Paper className="p-4">
        <Typography variant="h6" className="mb-3">
          Get Single Emoji
        </Typography>
        <Stack direction="row" spacing={2} className="mb-3">
          <TextField
            label="Emoji name"
            value={emojiName}
            onChange={(e) => setEmojiName(e.target.value)}
            size="small"
          />
          <Button variant="outlined" onClick={handleRandomEmoji}>
            Random Emoji
          </Button>
        </Stack>
        <Typography variant="body1" className="p-3 bg-gray-50 rounded">
          <strong>Name:</strong> {emojiName} | 
          <strong> Exists:</strong> {hasEmoji ? '✅' : '❌'} | 
          <strong> Emoji:</strong> {singleEmoji || 'Not found'} 
          {singleEmoji && <span className="text-2xl ml-2">{singleEmoji}</span>}
        </Typography>
      </Paper>

      {/* Search Demo */}
      <Paper className="p-4">
        <Typography variant="h6" className="mb-3">
          Search Emojis
        </Typography>
        <TextField
          fullWidth
          label="Search for emojis"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-3"
        />
        <Typography variant="body2" className="mb-2">
          Found {searchResults.length} results:
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {searchResults.map((result, index) => (
            <Chip
              key={index}
              label={`${result.emoji} ${result.name}`}
              variant="outlined"
              onClick={() => setEmojiName(result.name)}
              className="cursor-pointer"
            />
          ))}
        </Stack>
      </Paper>

      {/* Quick Examples */}
      <Paper className="p-4">
        <Typography variant="h6" className="mb-3">
          Quick Examples
        </Typography>
        <Stack spacing={2}>
          <Typography variant="body2">
            <strong>Hearts:</strong> {get('heart')} {get('blue_heart')} {get('green_heart')} {get('yellow_heart')}
          </Typography>
          <Typography variant="body2">
            <strong>Food:</strong> {get('pizza')} {get('hamburger')} {get('coffee')} {get('beer')}
          </Typography>
          <Typography variant="body2">
            <strong>Animals:</strong> {get('cat')} {get('dog')} {get('elephant')} {get('penguin')}
          </Typography>
          <Typography variant="body2">
            <strong>Weather:</strong> {get('sunny')} {get('cloud')} {get('rain')} {get('snow')}
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
}
