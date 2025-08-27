// const express = require("express");
// const axios = require("axios");
// const router = express.Router();

// router.get("/:source", async (req, res) => {
//   try {
//     const source = req.params.source;  // e.g. "the-times-of-india"
//     const url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${process.env.NEWS_API_KEY}`;

//     const response = await axios.get(url);

//     if (!response.data.articles || response.data.articles.length === 0) {
//       return res.status(404).json({
//         message: `No headlines found for source: ${source}`
//       });
//     }

//     const headlines = response.data.articles.map(article => ({
//       headline: article.title,
//       url: article.url,
//       publishedAt: article.publishedAt
//     }));

//     res.status(200).json({ newspaper: source, headlines });
//   } catch (error) {
//     console.error("Error fetching headlines:", error.message);
//     res.status(500).json({ message: "Error fetching headlines" });
//   }
// });

// module.exports = router;
const express = require("express");
const Parser = require("rss-parser");
const router = express.Router();

const parser = new Parser();

// Map newspaper code → RSS feed URL
const sources = {
  toi: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
  ht: "https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml",
  hindu: "https://www.thehindu.com/news/feeder/default.rss",
};

router.get("/:paper", async (req, res) => {
  try {
    const paper = req.params.paper.toLowerCase();
    const url = sources[paper];

    if (!url) {
      return res.status(404).json({ message: "Newspaper not supported" });
    }

    const feed = await parser.parseURL(url);

    const headlines = feed.items.map(item => ({
      headline: item.title,
      url: item.link,
      publishedAt: item.pubDate,
    }));

    res.json({ newspaper: paper, headlines });
  } catch (err) {
    console.error("Error fetching RSS:", err.message);
    res.status(500).json({ message: "Error fetching RSS feed" });
  }
});

module.exports = router;
