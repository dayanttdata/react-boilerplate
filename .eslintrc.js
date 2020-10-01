module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
    },
    "extends": [
        "react-app",
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": "off",
        "linebreak-style": "off",
        "react/prop-types": [
            2,
            {
                "ignore": [
                    "children"
                ]
            }
        ],
        "quotes": [
            2,
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "indent": [
            "off",
            4,
            {
                "ignoredNodes": [
                    "JSXElement"
                ]
            }
        ],
        "import/prefer-default-export": "off",
        "no-plusplus": "off",
        "no-param-reassign": "error",
        "radix": "off",
        "react/forbid-prop-types": "error",
        "max-classes-per-file": "error",
        "react/no-array-index-key": "error",
        "no-unneeded-ternary": "error",
        "object-curly-newline": "error",
        "no-shadow": "error",
        "max-len": "off",
        "react/no-unused-state": "error",
        "no-unused-expressions": "error",
        "no-unused-vars": "error",
        "consistent-return": "error",
        "react/no-did-update-set-state": "error",
        "padded-blocks": "error",
        "no-use-before-define": "error",
        "jsx-a11y/click-events-have-key-events": "error",
        "jsx-a11y/no-static-element-interactions": "error",
        "jsx-a11y/anchor-is-valid": "error",
        "no-extra-boolean-cast": "error",
        "class-methods-use-this": "error",
        "react/jsx-props-no-spreading": "off",
        "no-tabs": "error",
        "no-nested-ternary": "error",
        "react/sort-comp": "error",
        "no-restricted-syntax": "error",
        "react/no-unused-prop-types": "error",
        "react/jsx-indent": "off",
        "jsx-quotes": "error",
        "react/self-closing-comp": "error",
        "jsx-a11y/no-noninteractive-element-interactions": "error",
        "jsx-a11y/alt-text": "error",
        "jsx-a11y/label-has-associated-control": "error",
        "eqeqeq": "error",
        "react/prefer-stateless-function": "error",
        "react/jsx-indent-props": ["off", 4],
        "no-useless-escape": "error",
        "react/no-access-state-in-setstate": "error",
        "react/jsx-no-target-blank": "error",
        "array-callback-return": "error",
        "no-useless-return": "error",
        "react/state-in-constructor": "error",
        "arrow-body-style": "off",
        "import/no-unresolved": "off",
        // "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    },
    "settings": {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
                paths: ['./src']
            }
        }
    }
};