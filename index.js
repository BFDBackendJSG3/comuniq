const axios = require("axios");
const cheerio = require("cheerio");



async function fetchHtml(url){
    try{
        const response = await axios.get(url,{
            timeout:10000,
            headers:{
                'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36'
            }
        });
        return response.data;
        
    } catch(error){
        console.error('Erro ao acessar:', url);
        return null;
    }
}

async function scrape(html) {
  const $ = cheerio.load(html);

  const title = $("title").text();

  console.log(title);
}

async function main() {
  const url =
    "https://g1.globo.com/politica/blog/octavio-guedes/post/2025/12/16/presidente-alerj-prisao-desembargador.ghtml";

  const html = await fetchHtml(url);
  if (!html) return;

  scrape(html);
}

main();


