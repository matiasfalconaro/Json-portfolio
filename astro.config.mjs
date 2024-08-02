import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

(async () => {
    const { config } = await import('dotenv');
    config();
  })();

// https://astro.build/config
export default defineConfig({});
