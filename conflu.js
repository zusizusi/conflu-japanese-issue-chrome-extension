const compositionendHandler = (event) => {
    const activeField = document.activeElement;
    if (activeField && activeField.getAttribute('role') === 'textbox') {
        activeField.focus();
        document.execCommand('insertText', false, ' ');
        document.execCommand('delete', false);

    }
}
document.addEventListener('compositionend', compositionendHandler, { capture: true });
