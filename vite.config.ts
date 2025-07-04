import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from '@sentry/react-router';


const sentryConfig: SentryReactRouterBuildOptions = {
  org: "potato-ju",
  project: "troth_dashboard",

  // An auth token is required for uploading source maps.
  authToken: "GENERATE DO NOT COMMIT"
  // ...
};

export default defineConfig(config => {
  return {
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), reactRouter(),sentryReactRouter(sentryConfig, config)],
    ssr:{
    noExternal: [/@syncfusion/]
  }
  };
});