import HeaderComponent from "../header/header";
import EditorComponent from "../editor/editor";
import ViewerComponent from "../viewer/viewer";
import * as styles from "./container.module.css";

export default class ContainerComponent {
  static render() {
    const headerHTML = HeaderComponent.render();
    const editorHTML = EditorComponent.render();
    const viewerHTML = ViewerComponent.render();

    return `
    <main class="${styles.main}">
      ${headerHTML}
      <div class="${styles.container}">
        ${editorHTML}
        ${viewerHTML}
      </div>
    </main>
    `;
  }
}
