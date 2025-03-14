import path from "path";
import webpack from "webpack";
import { BuildEnv, BuildMode } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

function getApiUrl(mode: BuildMode, apiUrl?: string) {
  if (apiUrl) {
    return apiUrl;
  }

  if (mode === "production") {
    return "/api";
  }

  return "http://localhost:8000";
}

export default (env: BuildEnv) => {
  const paths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const port = env.port || 3000;
  const apiUrl = getApiUrl(mode, env?.apiUrl);
  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    port,
    paths,
    apiUrl,
    isDev,
  });

  return config;
};
