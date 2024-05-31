import * as styles from "./viewer.module.css";

export default class ViewerComponent {
  static render() {
    return `
    <section class="${styles.viewer}">
      <h2>preview</h2>
      <div class="${styles.text}">
        <div id="viewer"></div>
      </div>
    </section>
    `;
  }
}
