import * as styles from "./header.module.css";
import shareIcon from "../../assets/share-icon.png";

export default class HeaderComponent {
  static render() {
    return `
    <header class="${styles.header}">
      <h1>이상한 마크다운 편집기</h1>
      <button id="share">
        <img src=${shareIcon} alt="share-icon" width="30" height="30"/>
        <span>공유</span>
      </button>
    </header>
    `;
  }
}
