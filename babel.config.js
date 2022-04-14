/*
 * @Descripttion: 
 * @version: 
 * @Author: alan.lau
 * @Date: 2022-04-14 13:31:56
 * @LastEditors: alan.lau
 * @LastEditTime: 2022-04-14 14:07:06
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
