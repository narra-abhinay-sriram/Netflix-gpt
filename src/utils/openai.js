import OpenAI from 'openai';
import { open_ai } from './constants';

export const client = new OpenAI({
  apiKey: open_ai,
  dangerouslyAllowBrowser: true
});

