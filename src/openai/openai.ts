import { Configuration, OpenAIApi } from 'openai';
import { config } from 'dotenv';

config();

export const openai = new OpenAIApi(
  new Configuration({
    organization: 'org-pmfsaM50GJBiiwLJjBiZwlC4',
    apiKey: process.env.API_KEY,
  }),
);
