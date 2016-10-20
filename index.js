module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  },
  "rules": {
    "array-callback-return": 2,
    "camelcase": [2, { "properties": "never" }],
    "eol-last": 2,
    "indent": [2, "tab"],
    "no-console": 1,
    "no-lonely-if": 2,
    "no-multi-spaces": 2,
    "no-negated-condition": 2,
    "no-trailing-spaces": 2,
    "no-unused-vars": [2, { "args": "none" }],
    "no-use-before-define": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-escape": 2,
    "no-whitespace-before-property": 2,
    "quotes": [2, "single"],
    "quote-props": [2, "as-needed"],
    "semi": 2,
    "space-in-parens": [2, "never"],
    "spaced-comment": [2, "always"]
  }
};
