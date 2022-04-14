/*
 * @Descripttion: 
 * @version: 
 * @Author: alan.lau
 * @Date: 2022-04-14 13:31:56
 * @LastEditors: alan.lau
 * @LastEditTime: 2022-04-14 14:07:17
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0,
    'newIsCap': 0,
    'no-undef': 0,
    'new-cap': 0
  }
}