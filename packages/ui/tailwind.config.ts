// tailwind config is required for editor support
import type { Config } from "tailwindcss";
import sharedConfig from "tailwind-config/tailwind.config.ts";

const config: Pick<Config, "prefix" | "presets"> = {
  prefix: "",
  presets: [sharedConfig],
};

export default config;
