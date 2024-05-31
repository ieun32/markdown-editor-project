import * as styles from "./editor.module.css";

export default class EditorComponent {
  static render() {
    return `
    <section class="${styles.editor}">
      <h2>markdown</h2>
      <div>
        <textarea id="editor" autofocus></textarea>
      </div>
    </section>
    `;
  }
}
