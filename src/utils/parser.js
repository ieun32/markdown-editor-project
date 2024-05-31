export default class Parser {
  constructor(regex) {
    this.regex = regex;
  }

  /**
   * 마크다운 문자열을 HTML 변환하는 메서드 (private)
   * @param {String} plainText 변환할 문자열
   * @returns {String} HTML
   */
  markdownToHTML = (plainText) => {
    plainText = plainText.replaceAll(this.regex.h3, (match) => {
      return `<h3>${match.replace("###", "")}</h3>`;
    });
    plainText = plainText.replaceAll(this.regex.h2, (match) => {
      return `<h2>${match.replace("##", "")}</h2>`;
    });
    plainText = plainText.replaceAll(this.regex.h1, (match) => {
      return `<h1>${match.replace("#", "")}</h1>`;
    });
    plainText = plainText.replaceAll(this.regex.bold, (match) => {
      return `<b>${match.replaceAll("*", "")}</b>`;
    });
    plainText = plainText.replaceAll(this.regex.image, (match, alt, src) => {
      return `<img src="${src}" alt="${alt}"></img>`;
    });
    plainText = plainText.replaceAll(this.regex.link, (match, text, href) => {
      return `<a href="${href}" target="_blank">${text}</a>`;
    });
    plainText = plainText.replaceAll(this.regex.list, (match) => {
      return `<li>${match.replace("- ", "")}</li>`;
    });
    plainText = plainText.replaceAll(this.regex.cancle, (match) => {
      return `<s>${match.replaceAll("~", "")}</s>`;
    });
    plainText = plainText.replaceAll(this.regex.number, (match) => {
      return `<ol>${match}</ol>`;
    });
    plainText = plainText.replaceAll(this.regex.enter, () => {
      return `<br/>`;
    });
    return plainText;
  };
}
