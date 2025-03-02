module.exports = {
  "extends": [
    "react-app",
    "plugin:teactn/recommended",
    "airbnb",
    "airbnb-typescript",
  ],
  "plugins": [
    "jsx-expressions",
    "no-async-without-await",
    "teactn",
    "no-null",
    "simple-import-sort",
    "react-hooks-static-deps",
  ],
  "rules": {
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
      },
    ],
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreComments": true,
      }
    ],
    "array-bracket-newline": [
      2,
      "consistent",
    ],
    "no-null/no-null": 2,
    "no-console": "error",
    "semi": "error",
    "no-implicit-coercion": "error",
    "react-hooks/exhaustive-deps": "off",
    "react-hooks-static-deps/exhaustive-deps": [
      "error",
      {
        "additionalHooks": "(useSyncEffect|useAsync|useDebouncedCallback|useThrottledCallback|useEffectWithPrevDeps|useLayoutEffectWithPrevDeps|useDerivedState|useDerivedSignal|useThrottledResolver|useDebouncedResolver)$",
        "staticHooks": {
          "getActions": true,
          "useFlag": [
            false,
            true,
            true,
          ],
          "useForceUpdate": true,
          "useReducer": [
            false,
            true,
          ],
          "useLastCallback": true,
        },
      },
    ],
    "react/jsx-key": [2, { "checkFragmentShorthand": true}],
    "arrow-body-style": "off",
    "no-else-return": "off",
    "no-plusplus": "off",
    "no-void": "off",
    "no-continue": "off",
    "default-case": "off",
    "no-param-reassign": "off",
    "no-prototype-builtins": "off",
    "no-await-in-loop": "off",
    "no-nested-ternary": "off",
    "function-paren-newline": [
      "error",
      "consistent",
    ],
    "prefer-destructuring": "off",
    // Allow for...of. Edited from:
    // https://github.com/airbnb/javascript/blob/b4377fb03089dd7f08955242695860d47f9caab4/packages/eslint-config-airbnb-base/rules/style.js#L333
    "no-restricted-syntax": [
      "error",
      {
        "selector": "ForInStatement",
        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        "selector": "LabeledStatement",
        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        "selector": "WithStatement",
        "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/named": "off",
    "import/no-webpack-loader-syntax": "off",
    "import/extensions": "off",
    "react/button-has-type": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/function-component-definition": "off",
    "react/no-is-mounted": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    // Teact feature
    "react/style-prop-object": "off",
    "react/no-unknown-property": "off",
    "react/jsx-no-bind": [
      "error",
      {
        "ignoreRefs": true,
        "allowArrowFunctions": false,
        "allowFunctions": false,
        "allowBind": false,
        "ignoreDOMComponents": true
      },
    ],
    "jsx-expressions/strict-logical-expressions": [
      "error",
      {
        "allowString": true
      },
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "off",
    "jsx-a11y/media-has-caption": "off",
    "no-async-without-await/no-async-without-await": 1,
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        "functions": false
      },
    ],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/default-param-last": "off",
    "@typescript-eslint/return-await": [
      "error",
      "in-try-catch"
    ],
    "teactn/prefer-separate-component-file": "off",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        "prefer": "type-imports",
        "disallowTypeAnnotations": false
      },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          // Side effect imports
          ["^\\u0000"],
          // Lib and global imports
          [
            "^react",
            "^ton",
            "^tonweb(/.*|$)",
            "^qr-code-styling(/.*|$)",
            "^@?\\w",
            "dist(/.*|$)",
            "^(\\.+/)+(lib/teact)(/.*|$)",
            "^(\\.+/)+global$",
          ],
          // Type imports
          [
            "^(\\.+/)+.+\\u0000$",
            "^(\\.+/|\\w+/)+(types)(/.*|$)",
            "^(\\.+/|\\w+/)+(types)\\u0000",
          ],
          // Config, utils, helpers
          [
            "^(\\.+/)+config",
            "^(\\.+/)+(lib)(?!/teact)(/.*|$)",
            "^(\\.+/)+global/.+",
            "^(\\.+/)+(util)(/.*|$)",
            "^(\\.+/)+(contracts)(/.*|$)",
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$",
          ],
          // Hooks
          [
            ".+(/hooks/)(.*|$)",
          ],
          // Components
          [
            "\/[A-Z](([a-z]+[A-Z]?)*)",
          ],
          // Styles and CSS modules
          [
            "^.+\\.s?css$",
          ],
          // Assets: images, stickers, etc
          [
            "^(\\.+/)+(assets)(/.*|$)",
          ]
        ]
      }
    ],
  },
  "settings": {
    "import/resolver": "webpack",
  },
  "parserOptions": {
    "project": "./tsconfig.json",
  },
};
