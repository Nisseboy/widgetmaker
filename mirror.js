class Mirror {
	constructor(id, mode, header) {
		this.editor = CodeMirror.fromTextArea(document.getElementById(id), {
			lineNumbers: true,
			matchBrackets: true,
			theme: 'one-dark',
			mode: { name: mode, globalVars: true },
			keyMap: 'sublime',
			tabSize: 2,
			autoCloseBrackets: true,
			autoCloseTags: true,
			highlightSelectionMatches: true,
			foldGutter: true,
			gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
			hintOptions: {
				completeSingle: false,
				extraKeys: {
					Tab: function (cm, a) {
						a.pick();
					},
					Esc: function (cm, a) {
						a.close();
					},
					Up: function (cm, a) {
						a.moveFocus(-1);
					},
					Down: function (cm, a) {
						a.moveFocus(1);
					},
				},
			},
			extraKeys: {
				Tab: 'emmetExpandAbbreviation',
			},
			emmet: {
				mark: true,
				markTagPairs: true,
				previewOpenTag: true,
				preview: true,
			},
		});

    let headerElement = document.createElement('div');
    headerElement.className = 'editor-header';
    headerElement.innerText = header;
    this.editor.display.wrapper.prepend(headerElement);

		this.editor.on('inputRead', function (editor, input) {
			if (input.text[0] === ';' || input.text[0] === ' ') {
				return;
			}
			if (editor.options.mode.name == 'text/html' || editor.options.mode.name == 'css') {
				return;
			}
			editor.execCommand('emmetResetAbbreviation');
			editor.showHint({
				hint: CodeMirror.hint.auto,
			});
		});
		this.editor.on('change', (a, b) => {});
	}
}
