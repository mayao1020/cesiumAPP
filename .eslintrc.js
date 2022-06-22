module.exports = {

    root: true, // 停止在父级目录中寻找
    env: {
        browser: true,
        es6: true, // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
        node: true // Node.js 全局变量和 Node.js 作用域
    },
    parserOptions: {
        sourceType: 'module',
    },
    parser: '@typescript-eslint/parser',

    plugins: ["@typescript-eslint"],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        "no-unused-vars": 0,
        "no-explicit-any": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/ban-types": 0
    },
}