import { describe, expect, it } from "vitest";
import { resolveCloudConfig } from "../config";

const preview = {
  MODE: "preview",
  DEV: false,
  VITE_API_BASE_URL: "https://iserlohn-test.star-light.space",
  VITE_PREVIEW_BRANCH: "pr-123"
};

describe("cloud configuration", () => {
  it("uses the test origin and encoded branch alias for preview login", () => {
    expect(resolveCloudConfig(preview)).toEqual({
      apiBaseUrl: "https://iserlohn-test.star-light.space",
      loginUrl:
        "https://iserlohn-test.star-light.space/auth?returnTo=kbo-knit-preview%3Apr-123"
    });
    expect(resolveCloudConfig({ ...preview, MODE: "production" })).toEqual(
      resolveCloudConfig(preview)
    );
  });

  it.each([
    undefined,
    "",
    "https://iserlohn.star-light.space",
    "https://example.cloudfront.net",
    "http://iserlohn-test.star-light.space",
    "https://iserlohn-test.star-light.space:443",
    "https://iserlohn-test.star-light.space/path"
  ])("rejects an unsafe preview API origin: %s", api => {
    expect(() =>
      resolveCloudConfig({ ...preview, VITE_API_BASE_URL: api })
    ).toThrow("VITE_API_BASE_URL");
  });

  it.each([
    undefined,
    "",
    "PR-123",
    "pr-123\n",
    "pr.123",
    "pr:123",
    "-pr",
    "pr-",
    "a".repeat(64)
  ])("rejects an invalid preview branch: %s", branch => {
    expect(() =>
      resolveCloudConfig({ ...preview, VITE_PREVIEW_BRANCH: branch })
    ).toThrow("VITE_PREVIEW_BRANCH");
  });

  it.each(["a", "a".repeat(63)])(
    "accepts valid branch length boundaries",
    branch => {
      expect(
        resolveCloudConfig({ ...preview, VITE_PREVIEW_BRANCH: branch }).loginUrl
      ).toContain(`kbo-knit-preview%3A${branch}`);
    }
  );

  it("preserves production and local login aliases", () => {
    expect(resolveCloudConfig({ MODE: "production", DEV: false })).toEqual({
      apiBaseUrl: "https://iserlohn.star-light.space",
      loginUrl: "https://iserlohn.star-light.space/auth?returnTo=kbo-knit"
    });
    expect(resolveCloudConfig({ MODE: "development", DEV: true })).toEqual({
      apiBaseUrl: "",
      loginUrl: "/auth?returnTo=kbo-knit-local"
    });
    expect(
      resolveCloudConfig({
        MODE: "development",
        DEV: true,
        VITE_API_BASE_URL: "https://iserlohn-test.star-light.space/"
      }).loginUrl
    ).toBe("https://iserlohn-test.star-light.space/auth?returnTo=kbo-knit");
  });
});
