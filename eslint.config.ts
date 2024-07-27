import antfu from "@antfu/eslint-config";

export default antfu({
  vue: true,
  typescript: true,
  stylistic: {
    semi: true,
    quotes: "double",
  },
  // rules override
  rules: {
    "no-alert": "off",
    "no-console": "off",
    "new-cap": "off",
    "vue/html-self-closing": [
      "warn",
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    "prefer-promise-reject-errors": "off",
    "unused-imports/no-unused-vars": "off",
    "vue/block-order": ["error", {
      order: ["template", "script", "style"],
    }],
    "vue/component-tags-order": ["error", {
      order: ["template", "script", "style"],
    }],
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    "node/prefer-global/process": "off",
  },
});
