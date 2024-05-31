const regex = Object.freeze({
  h1: /#.*?(?=\n|$)/g,
  h2: /##.*?(?=\n|$)/g,
  h3: /###.*?(?=\n|$)/g,
  bold: /\*\*.*\*\*/g,
  link: /\[(.*?)\]\((.*?)\)/g,
  image: /!\[(.*?)\]\((.*?)\)/g,
  list: /- .*?(?=\n|$)/g,
  cancle: /~~.+~~/g,
  number: /\d+\. .*?(?=\n|$)/g,
  enter: /(\r|\n)/g,
});

export default regex;
