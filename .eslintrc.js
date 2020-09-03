module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "generators": false,
      "objectLiteralDuplicateProperties": false
    }
  },

  "globals": {
    "$": false
  },

  "extends": "eslint:recommended",
  "rules": {
    "indent": [2, 2],
    "quotes": [2, "single"],
    "semi": [2, "always"]
  }
}
;
