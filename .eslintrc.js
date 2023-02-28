module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "globals":{
        "module":true
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        'semi': [2, 'never'],// 语句强制分号结尾
        "import/prefer-default-export": "off",
    }
}
