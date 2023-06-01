import { Configuration, OpenAIApi } from 'openai';

export const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  }),
);
