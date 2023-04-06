import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl'
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    svelte(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        ticker: "storyblok/Ticker",
        teaser: "storyblok/Teaser",
        grid: "storyblok/Grid",
      },
      apiOptions: {
        // Choose your Storyblok space region
        region: 'eu', // optional,  or 'eu' (default)
      },
    })
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https:true,
    }
  }
});
