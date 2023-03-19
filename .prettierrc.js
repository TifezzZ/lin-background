/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2022-12
 * @Description:prettier 格式化配置
 */
// @see: https://www.prettier.cn

module.exports = {
  // 超过最大值换行
  printWidth: 130,
  // 缩进字节数
  tabWidth: 2,
  // 使用制表符而不是空格缩进行
  useTabs: false,
  // 结尾不用分号(true有，false没有)
  semi: false,
  // 使用单引号(true单双引号，false双引号)
  singleQuote: true,
  // 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
  quoteProps: 'as-needed',
  // 在JSX中使用单引号而不是双引号
  jsxSingleQuote: false,
  // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
  trailingComma: 'none',
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  bracketSpacing: true,
  bracketSameLine: false,
  //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 ,always：不省略括号
  arrowParens: 'always',
  // 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
  endOfLine: 'auto',
  singleAttributePerLine: true,
  // 在html中空格是否是敏感的 "css" - 遵守CSS显示属性的默认值， "strict" - 空格被认为是敏感的 ，"ignore" - 空格被认为是不敏感的
  htmlWhitespaceSensitivity: 'ignore'
}
