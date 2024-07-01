let previousCursorPosition = -1;
const keydownHandler = (event) => {
  const activeField = document.activeElement;
  // role="textbox"の場合は、カーソル位置を取得
  if (activeField.getAttribute("role") === "textbox") {
    const selection = window.getSelection();
    const cursorPosition = selection.anchorOffset;

    // 入力カーソル位置が 1 以外から 1 に変わった場合
    if (
      previousCursorPosition !== cursorPosition &&
      cursorPosition === 1 &&
      (event.key === "Process" || event.key === "Shift")
    ) {
      activeField.focus();
      document.execCommand("insertText", false, " ");
    }
    previousCursorPosition = cursorPosition;
  }
};

document.addEventListener("keydown", keydownHandler, { capture: true });
