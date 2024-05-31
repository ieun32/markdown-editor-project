import "./styles/style.module.css";

import Tag from "./utils/tag";
import Parser from "./utils/parser";
import Crypto from "./utils/crypto";
import EventHandler from "./utils/event";

import Container from "./components/container/container";

import regex from "./constants/regex";

class App {
  constructor(eventHandler, parser, container, tag, crypto) {
    this.eventHandler = eventHandler;
    this.container = container;
    this.parser = parser;
    this.crypto = crypto;
    this.tag = tag;

    this.#start();
  }

  /**
   * 애플리케이션 시작
   */
  #start() {
    this.#paint();
    this.#initial();
    this.#listenEvent();
  }

  /**
   * 에디터 초기화 (URL에 데이터가 있으면 복호화하여 렌더링)
   */
  #initial() {
    const editor = this.tag.get("#editor");
    const editorText = editor.value;
    this.parseAndRender(editorText);

    const data = this.#getURLData();
    if (data) {
      this.#decryptAndRender(data);
    }
  }

  /**
   * 이벤트 리스너 등록 (에디터 입력, 공유 버튼 클릭)
   */
  #listenEvent() {
    this.eventHandler.addChangeEventThrottle(
      this.tag.get("#editor"),
      this.parseAndRender,
      1000,
    );

    this.eventHandler.addShareButtonClickEvent(
      this.tag.get("#share"),
      this.eventHandler.shareHandler,
      this.tag.get("#editor"),
      this.crypto.encrypt,
    );
  }

  /**
   * 화면 그리기 (컨테이너 렌더링)
   */
  #paint() {
    const root = this.tag.get("#root");
    root.innerHTML = this.container.render();
  }

  /**
   * 마크다운을 HTML로 변환하여 렌더링
   * @param {String} plainText
   */
  parseAndRender = (plainText) => {
    const html = this.parser.markdownToHTML(plainText);
    const viewer = this.tag.get("#viewer");
    viewer.innerHTML = html;
  };

  /**
   * 암호화된 문자열을 복호화하여 에디터와 뷰어에 렌더링
   * @param {String} encryptedText
   */
  #decryptAndRender = (encryptedText) => {
    const plainText = this.crypto.decrypt(encryptedText);
    const editor = this.tag.get("#editor");
    editor.value = plainText;
    this.parseAndRender(plainText);
  };

  /**
   * URL에서 데이터 가져오기
   * @returns {String} data
   */
  #getURLData() {
    const url = new URL(window.location.href);
    const data = url.searchParams.get("data");
    return data;
  }
}

const eventHandler = new EventHandler();
const parser = new Parser(regex);

new App(eventHandler, parser, Container, Tag, Crypto);
