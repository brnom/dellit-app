module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module"
    },
    plugins: [
        "vue",
        "@typescript-eslint"
    ],
    rules: {
        'indent': ['error', 4],
        'semi': ["error", "never"],
        'quotes': ["error", "single"],
        'no-trailing-spaces': ['error'],
        'no-unused-vars': ['warn', { 'varsIgnorePattern': '^_', 'argsIgnorePattern': '^_' }],
        'no-multiple-empty-lines': ['error', { 'max': 1 }],
        // "@typescript-eslint/indent": ["error", 4, {"SwitchCase": 1}],
        // '@typescript-eslint/no-unused-vars': ['warn', { 'varsIgnorePattern': '^_', 'argsIgnorePattern': '^_' }],
        'no-console': 'off',
    }
}
