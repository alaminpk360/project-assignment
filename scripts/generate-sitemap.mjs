import { writeFileSync, existsSync, readFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

async function generate() {
  const prettierConfig = await prettier.resolveConfig("../.prettierrc.js");
  const pages = await globby([
    "src/pages/*.js",
    "src/pages/*.jsx",
    "src/pages/**/*.js",
    "src/pages/**/*.jsx",
    "!src/pages/_*.js",
    "!src/pages/_*.jsx",
    "!src/pages/api",
    "!src/pages/404.js",
    "!src/pages/404.jsx",
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace("src/pages", "")
              .replace("data", "")
              .replace("index.js", "")
              .replace("Home/Home.js", "")
              .replace(".js", "")
              .replace(".mdx", "");
            const route = path === "/index" ? "" : path;
            console.log("path", path);
            return `
              <url>
                  <loc>${`https://productpaparazzi.co.uk${route}`}</loc>
                  <lastmod>${new Date().toLocaleString()}</lastmod><changefreq>daily</changefreq>
                  <priority>0.7</priority>
              </url>
            `;
          })
          .join("")}
    </urlset>
    `;

  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  writeFileSync("public/sitemap.xml", formatted);
}

generate();
