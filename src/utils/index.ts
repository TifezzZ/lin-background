/*
 * @Author: yujingbo
 * @Date: 2022-12
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description: utils
 */
import dayjs from 'dayjs'
import { EMPTYMSG } from '@/config/table'
import { cloneDeep } from 'lodash-es'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import CryptoJS from 'crypto-js'
import { ElLoading } from 'element-plus'

/**
 * 格式化文件大小 string类型直接返回
 * @param val
 * @returns x.xxM or val
 */
export function sizeFormat(val: number | string) {
  if (typeof val === 'number') return (val / 1024 / 1024).toFixed(1) + 'M'
  return val
}

/**
 * 格式化时间
 * @param val
 * @returns YYYY.MM.DD HH:mm:ss
 */
export function timeFormat(val: string) {
  if (dayjs(val).format('YYYY.MM.DD HH:mm:ss') === 'Invalid Date') return val
  return dayjs(val).format('YYYY.MM.DD HH:mm:ss')
}

/**
 * tags 字符串转数组
 * @param tags
 * @returns []tags
 */
export function tagsToList(tags: string) {
  if (tags?.indexOf(',') === -1) {
    return [tags]
  } else {
    return tags?.split(',')
  }
}

/**
 * 清除数据中默认的EMPTYMSG
 */
// export function clearEmptyMsg(obj) {
//   for (let i in obj) {
//     if (obj[i] === EMPTYMSG) {
//       obj[i] = null
//     }
//   }
//   return obj
// }

/**
 * 给空属性赋默认值
 * @param obj
 * @returns object
 */
export function setEmptyMsg(obj) {
  const copy = cloneDeep(obj)
  for (const i in copy) {
    if (!copy[i]) {
      copy[i] = EMPTYMSG
    }
  }
  return copy
}

/**
 * 通用表格数据回调处理
 * @param data
 * @returns data
 */
export function commonDataCall(data: any) {
  data.page = data.number + 1
  return data
}

/**
 * html转pdf
 * @param printDiv
 */
export function print(printDiv) {
  const loading = ElLoading.service({
    lock: true,
    text: '生成PDF中~',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  const downPdf = document.getElementById(printDiv)
  html2canvas(downPdf).then((canvas) => {
    const contentWidth = canvas.width
    const contentHeight = canvas.height
    //一页pdf显示html页面生成的canvas高度;
    const pageHeight = (contentWidth / 595.28) * 841.89
    //未生成pdf的html页面高度
    let leftHeight = contentHeight
    //pdf页面偏移
    let position = 0
    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    const imgWidth = 555.28
    const imgHeight = (555.28 / contentWidth) * contentHeight
    const pageData = canvas.toDataURL('image/jpeg', 1.0)
    const pdf = new jsPDF(null, 'pt', 'a4')
    //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
    //当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < pageHeight) {
      pdf.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight)
    } else {
      while (leftHeight > 0) {
        pdf.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight)
        leftHeight -= pageHeight
        position -= 841.89
        //避免添加空白页
        if (leftHeight > 0) {
          pdf.addPage()
        }
      }
    }
    pdf.save('content.pdf')
    loading.close()
  })
}

/**
 * 产生随机8位数字符串
 * @returns string
 */
export function randomString() {
  return Math.random().toString(36).slice(-8)
}

/**
 * 下载文件
 * @param href string
 */
export function downloadFile(href) {
  //创建一个a标签并设置href属性，之后模拟人为点击下载文件
  const link = document.createElement('a')
  link.href = href
  link.click() //模拟点击
  //释放资源并删除创建的a标签
  URL.revokeObjectURL(link.href)
  document.body.removeChild(link)
}

/**
 * 加密显示id
 * @param id
 * @returns string
 */
export function encryptID(id: number | string, createdTime: string) {
  const base = new Date(createdTime).getTime()
  return Math.pow(Number(id), 3) + base
}

/**
 * 异步请求结束前拦截多次调用
 * @param fun
 * @returns function
 */
let flag = true
export function onceCall(fun: Function): Function {
  return function () {
    if (flag) {
      flag = false
      const args = arguments
      fun.apply(this, args).finally(() => {
        flag = true
      })
    }
  }
}

/**
 * @description: 动态加载图片 （注意：将图片放到public目录下）
 * @param {*} imgUrl public目录下图片的地址：eg: /public/imgs/a.png, 则imgUrl为 ./imgs/a.png
 * @return {*} 返回图片的绝对路径
 */
export function loadPicture(imgUrl) {
  const pathnameArr = location.pathname.split('/')
  const realPathArr = []
  pathnameArr.forEach((item) => {
    if (item && item.slice(-5) !== '.html') {
      realPathArr.push(item)
    }
  })
  let realPath = location.origin + '/'
  if (realPathArr.length > 0) {
    realPath = realPath + realPathArr.join('/') + '/'
  }

  return new URL(imgUrl, realPath).href
}
