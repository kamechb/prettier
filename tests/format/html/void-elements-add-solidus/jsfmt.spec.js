run_spec(__dirname, ["html"]);
run_spec(__dirname, ["html"], {voidElementsAddSolidus: false});
run_spec(__dirname, ["html"], {voidElementsAddSolidus: false, singleAttributePerLine: true});
