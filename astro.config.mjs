import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from "@astrojs/image";
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  integrations: [image(), astroI18next()]
});