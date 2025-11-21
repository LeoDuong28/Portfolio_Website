    const purify = require("purify-css");
    let content = ["*.html"];
    let css = ["*.css"];
    let options = {
        output: "./purified.css",
        minify: true
    };
    purify(content, css, options);



