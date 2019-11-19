const parsers = require("prettierx/src/language-js/parser-typescript").parsers;

const options = require("prettierx/src/language-js/options");

const estree = require("prettierx/src/language-js/printer-estree");

module.exports = {
  parsers: {
    "prettierx-typescript": {
      ...parsers.typescript,
      astFormat: "prettierx-estree"
    }
  },
  options,
  printers: {
    "prettierx-estree": estree
  }
};
