# Node-Emoji Integration

This project includes a forked and integrated version of the [node-emoji](https://github.com/omnidan/node-emoji) library located in the `node-emoji/` directory.

## Setup

The node-emoji library has been:
1. Cloned from the original repository
2. Built locally using `npm run build`
3. Integrated into the project using relative imports
4. Added to the main git repository (including built files)

## Usage

### Direct Import
You can import functions directly from the built library:

```typescript
import { emojify, get, search, unemojify } from '../node-emoji/lib/index.js';
```

### Using the Utility Module
For convenience, use the utility module at `src/lib/emoji.ts`:

```typescript
import { 
  convertTextToEmoji, 
  convertEmojiToText, 
  searchEmojis, 
  getRandomEmoji 
} from '../lib/emoji';

// Convert :heart: to ❤️
const withEmojis = convertTextToEmoji('I :heart: pizza!');

// Convert ❤️ to :heart:
const withoutEmojis = convertEmojiToText('I ❤️ pizza!');

// Search for emojis
const happyEmojis = searchEmojis('happy', 5);

// Get random emoji
const randomEmoji = getRandomEmoji();
```

## Available Functions

- `emojify(text)` - Convert :emoji_name: to actual emojis
- `unemojify(text)` - Convert emojis to :emoji_name: format
- `get(name)` - Get emoji by name
- `search(keyword)` - Search emojis by keyword
- `random()` - Get random emoji
- `strip(text)` - Remove all emojis from text
- `has(name)` - Check if emoji exists
- `find(codeOrName)` - Find emoji details
- `replace(text, replacement)` - Replace emojis with custom text
- `which(emoji)` - Get name from emoji character

## Demo Component

Check out `src/components/EmojiDemo.tsx` for a comprehensive example of all emoji functions in action.

## Rebuilding

If you need to rebuild the node-emoji library:

```bash
cd node-emoji
npm install --legacy-peer-deps
npm run build
```

Note: The library has been converted from pnpm to npm for consistency with the main project.

## Integration in Spotify Search

The emoji functionality is integrated into the Spotify search feature via `useSpotifySearch` hook, which automatically converts emojis in search terms to text format for better API compatibility.
