import type { NextConfig } from "next";
const createNextIntlConfig = require("next-intl/plugin");
const withNextIntl = createNextIntlConfig({
  locales: ["en", "zh"],
  defaultLocale: "en",
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
