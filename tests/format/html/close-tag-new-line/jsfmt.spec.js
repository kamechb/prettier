run_spec(__dirname, ["html"]);
run_spec(__dirname, ["html"], {closeTagNewLine: true});
run_spec(__dirname, ["html"], {closeTagNewLine: true, singleAttributePerLine: true, htmlWhitespaceSensitivity: "ignore"});
run_spec(__dirname, ["html"], {closeTagNewLine: true, singleAttributePerLine: true, bracketSameLine: true, htmlWhitespaceSensitivity: "ignore"});
