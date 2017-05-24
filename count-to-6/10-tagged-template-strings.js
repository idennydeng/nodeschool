function escape(text) {
    return text.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&apos;')
        .replace(/"/g, '&quot;');
}

function html(templateData, ...args) {
    return args.reduce((result, s, i) => result + escape(s) + templateData[i + 1], templateData[0]);
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
