require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-airbnb-with-typescript",
    "@vue/eslint-config-prettier",
  ],

  parserOptions: {
    ecmaVersion: "latest",
  },

  rules: {
    "vue/component-tags-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
    "import/prefer-default-export": [
      "off",
      {
        target: "single",
      },
    ],
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/typedef": [
      "error",
      {
        variableDeclaration: false, // type annotationを強制するかどうか
        memberVariableDeclaration: false,
        propertyDeclaration: false,
        variableDeclarationIgnoreFunction: false,
        arrayDestructuring: false,
        objectDestructuring: false,
        parameter: false,
        arrowParameter: false,
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "**/*.js",
  ],
};
