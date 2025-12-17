const cheerio = require("cheerio");
const { fetchHtml } = require(".."); // index.js
const { scrape } = require(".."); // index.js

async function crawler(html) {
  const $ = cheerio.load(html);
  const links = [];

  $("a").each((_, el) => {
    if (links.length >= 20) return false;

    const href = $(el).attr("href");
    if (!href) return;
    if (!href.includes(".ghtml")) return;

    const url = href.startsWith("http") ? href : `https://g1.globo.com${href}`;

    if (!links.includes(url)) {
      links.push(url);
    }
  });

  return links;
}



async function main() {
  const url = "https://g1.globo.com/";

  const html = await fetchHtml(url); // ✅ await
  if (!html) return;

  const links = await crawler(html); // ✅ await

  console.log(links);
}

main();
