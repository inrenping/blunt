import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  locales: ["en", "zh"],
  defaultLocale: "en",
};
export default withNextIntl(nextConfig);
