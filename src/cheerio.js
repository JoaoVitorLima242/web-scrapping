const axios = require("axios");
const cheerio = require("cheerio");

(async () => {
  try {
    const url = "https://br.shein.com/Men-Pants-p-25748820-cat-1978.html";
    const response = await axios.get(url); // get HTML
    const $ = cheerio.load(response.data); // parse HTML with Cheerio
    const sections = $("h1.product-intro__head-name");

    console.log(sections.text());
  } catch (e) {
    console.log("error", e.message);
  }
})();
