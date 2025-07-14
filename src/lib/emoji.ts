// Re-export all emoji functions for easier imports throughout the project
export {
  emojify,
  get,
  search,
  random,
  unemojify,
  strip,
  has,
  find,
  replace,
  which
} from '../../node-emoji/lib/index.js';

import { emojify, unemojify, strip, search, random } from '../../node-emoji/lib/index.js';

// Utility functions for common emoji operations
export const convertTextToEmoji = (text: string): string => {
  return emojify(text);
};

export const convertEmojiToText = (text: string): string => {
  return unemojify(text);
};

export const removeEmojis = (text: string): string => {
  return strip(text);
};

export const searchEmojis = (keyword: string, limit = 10) => {
  return search(keyword).slice(0, limit);
};

export const getRandomEmoji = () => {
  return random();
};
