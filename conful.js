previous_cursor_position = 0;
document.addEventListener('keydown', function(event) {
    console.log('キー:', event.key);
    // 現在アクティブな入力フィールドを取得
    var activeField = document.activeElement;
    

    // role="textbox"の場合は、カーソル位置を取得
    if (activeField.getAttribute('role') === 'textbox') {
        // カーソル位置を取得
        var selection = window.getSelection();
        // console.log('selection:', selection);
        var cursorPosition = selection.anchorOffset;
        // console.log('入力中のフィールド:', activeField);
        // console.log('カーソル位置:', cursorPosition);
        var pElement = activeField.getElementsByTagName('p')[0]; 
        // console.log('pElement:', pElement);

        // 入力カーソル位置が 1 以外から 1 に変わった場合、
        if ((previous_cursor_position != 1 && previous_cursor_position != 0) && cursorPosition === 1 && event.key === "Process") {
            activeField.focus();
            document.execCommand('insertText', false, ' ');
            console.log('ArrowRightキーを入力しました。');
        }
        previous_cursor_position = cursorPosition;
    } else {
        //tagを表示
        console.log('入力中のフィールド:', activeField);
    }
});

