let mirrors = {
	html: new Mirror('mirror-HTML', 'text/html', 'HTML:'),
	js: new Mirror('mirror-JS', 'javascript', 'Javascript:'),
	css: new Mirror('mirror-CSS', 'css', 'CSS:'),
  out: new Mirror('mirror-out', 'javascript', 'Output:')
};


function compile() {
  let text = {
    html: mirrors.html.editor.getValue(),
    css: mirrors.css.editor.getValue(),
    js: mirrors.js.editor.getValue(),
  }

  console.log(text);
}