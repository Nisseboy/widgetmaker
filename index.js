let mirrors = {
	html: new Mirror('mirror-HTML', 'text/html', 'HTML:'),
	js: new Mirror('mirror-JS', 'javascript', 'Javascript:'),
	css: new Mirror('mirror-CSS', 'css', 'CSS:'),
  out: new Mirror('mirror-out', 'javascript', 'Output:')
};
mirrors.out.editor.setOption('readOnly', true);


function compile() {
  let text = {
    html: mirrors.html.editor.getValue(),
    css: mirrors.css.editor.getValue(),
    js: mirrors.js.editor.getValue(),
  }
  let data = {
    js: ''
  }

  data.js += `let parser = new DOMParser();let doc = parser.parseFromString('${text.html.replaceAll('\n', ' ').replaceAll('"', '\\"')}', 'text/xml');document.body.appendChild(doc.firstChild)`;


  let frame = document.getElementsByClassName('frame-out')[0];
  frame.innerHTML = text.html;
}