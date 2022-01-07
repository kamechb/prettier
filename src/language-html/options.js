"use strict";

const commonOptions = require("../common/common-options.js");

const CATEGORY_HTML = "HTML";

// format based on https://github.com/prettier/prettier/blob/main/src/main/core-options.js
module.exports = {
  bracketSameLine: commonOptions.bracketSameLine,
  htmlWhitespaceSensitivity: {
    since: "1.15.0",
    category: CATEGORY_HTML,
    type: "choice",
    default: "css",
    description: "How to handle whitespaces in HTML.",
    choices: [
      {
        value: "css",
        description: "Respect the default value of CSS display property.",
      },
      {
        value: "strict",
        description: "Whitespaces are considered sensitive.",
      },
      {
        value: "ignore",
        description: "Whitespaces are considered insensitive.",
      },
    ],
  },
  singleAttributePerLine: commonOptions.singleAttributePerLine,
  vueIndentScriptAndStyle: {
    since: "1.19.0",
    category: CATEGORY_HTML,
    type: "boolean",
    default: false,
    description: "Indent script and style tags in Vue files.",
  },
  voidElementsAddSolidus: {
    since: "2.6.0",
    categroy: CATEGORY_HTML,
    type: "boolean",
    default: true,
    description: "Add solidus character in void elements",
  },
  closeTagNewLine: {
    since: "2.6.0",
    categroy: CATEGORY_HTML,
    type: "boolean",
    default: false,
    description: "Force break close tag into new line when open tag has a break",
  }
};
