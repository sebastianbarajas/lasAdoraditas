import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],

  adapter: staticAdapter(),
  site: "https://sebastianbarajas.github.io/lasAdoraditas",
  base: "/lasAdoraditas/",
});
