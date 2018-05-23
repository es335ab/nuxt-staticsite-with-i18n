const fs = require('fs');
const articles = JSON.parse(fs.readFileSync('./data/articles.json', 'utf8'));
let output = [];

const searchTargetContent = (content) => {
  // タグを除去する
  const afterRemovalTag = content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
  return afterRemovalTag;
};

Object.keys(articles).forEach(key => {
  const article = articles[key];
  const obj = {
    id: article.id,
    title: article.title,
    date: article.date,
    content: searchTargetContent(article.content)
  };

  output.push(obj);
});

fs.writeFile('./data/search_index.json', JSON.stringify(output));
