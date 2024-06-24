previousCursorPosition = 0;
document.addEventListener('keydown', function(event) {
    var activeField = document.activeElement;
    // role="textbox"の場合は、カーソル位置を取得
    if (activeField.getAttribute('role') === 'textbox') {
        var selection = window.getSelection();
        var cursorPosition = selection.anchorOffset;

        // 入力カーソル位置が 1 以外から 1 に変わった場合
        if ((previousCursorPosition != 1 && previousCursorPosition != 0) && cursorPosition === 1 &&( event.key === "Process" || event.key=="Shift")) {
            activeField.focus();
            document.execCommand('insertText', false, ' ');
        }
        previousCursorPosition = cursorPosition;
    }
}, { capture: true });

