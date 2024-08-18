export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },

    sitemap: "https://daoplomats-main-five.vercel.app/sitemap.xml",
  };
}
