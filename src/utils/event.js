export default class EventHandler {
  /**
   * 공유 버튼 클릭 이벤트를 등록하는 메서드
   * @param {Element} element
   * @param {Function} callback
   */
  addShareButtonClickEvent(element, callback, textElement, encrypt) {
    element.addEventListener("click", () => callback(textElement, encrypt));
  }

  /**
   * 공유 버튼 클릭 시 동작할 콜백 함수
   * @param {Element} textElement
   * @param {Function} encrypt
   */
  shareHandler = (textElement, encrypt) => {
    const encryptedText = encrypt(textElement.value);
    const url = new URL(window.location.href);
    url.searchParams.set("data", encryptedText);

    const textarea = document.createElement("textarea");
    textarea.value = url.href;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("클립보드에 URL이 복사되었습니다 😉");
  };

  /**
   * 변경 이벤트를 쓰로틀링하여 등록하는 메서드
   * @param {Element} element 이벤트 리스너를 등록할 엘리먼트
   * @param {Function} callback 변경 이벤트 발생 시 실행할 콜백 함수
   * @param {Number} wait 밀리초, 기본값은 1000ms
   */
  addChangeEventThrottle(element, callback, wait = 1000) {
    const throttleCallback = this.#throttle(callback, wait);
    element.addEventListener("input", throttleCallback);
  }

  /**
   * 쓰로틀링 메서드
   * @param {Function} callback 쓰로틀링 적용할 콜백 함수
   * @param {Number} wait 밀리초, 기본값은 1000ms
   * @returns {Function} 쓰로틀링 적용된 함수
   */
  #throttle(callback, wait) {
    let timer;

    return (event) => {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          callback(event.target.value);
        }, wait);
      }
    };
  }
}
