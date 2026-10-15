type CloudEnvironment = {
  MODE: string;
  DEV: boolean;
  VITE_API_BASE_URL?: string;
  VITE_PREVIEW_BRANCH?: string;
};

type CloudConfig = { apiBaseUrl: string; loginUrl: string };

export function resolveCloudConfig(env: CloudEnvironment): CloudConfig {
  const branch = env.VITE_PREVIEW_BRANCH;
  const isPreview = env.MODE === "preview" || branch !== undefined;
  const apiBaseUrl = (
    env.VITE_API_BASE_URL ??
    (env.DEV ? "" : "https://iserlohn.star-light.space")
  ).replace(/\/$/, "");
  let returnTo = env.DEV && apiBaseUrl === "" ? "kbo-knit-local" : "kbo-knit";

  if (isPreview) {
    if (
      !branch ||
      branch !== branch.trim() ||
      !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(branch)
    ) {
      throw new Error(
        "Preview requires VITE_PREVIEW_BRANCH as a DNS label (1-63 lowercase characters)."
      );
    }
    if (
      !env.VITE_API_BASE_URL ||
      apiBaseUrl !== "https://iserlohn-test.star-light.space"
    ) {
      throw new Error(
        "Preview requires VITE_API_BASE_URL as the Iserlohn test CloudFront HTTPS origin."
      );
    }
    returnTo = `kbo-knit-preview:${branch}`;
  }

  return {
    apiBaseUrl,
    loginUrl: `${apiBaseUrl}/auth?returnTo=${encodeURIComponent(returnTo)}`
  };
}
