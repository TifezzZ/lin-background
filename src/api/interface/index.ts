/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description:
 */
// * 请求响应参数(不包含data)
export interface Result {
  code: number
  message: string
  debug: string
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
  data?: T
}

// * 分页响应参数
export interface ResPage<T> {
  datalist: T[]
  pageNum: number
  pageSize: number
  total: number
}

// * 分页请求参数
export interface ReqPage {
  page: number
  size: number
  startTime?: string //导入完成开始时间
  endTime?: string //导入完成结束时间
  name?: string //名称
}

// * 登录
export namespace Login {
  export interface RegisterForm extends ReqLoginForm {
    username: string
    nickname: string
    picture: string
  }
  export interface ReqLoginForm {
    mobile: string
    pwd: string
  }
  export interface ResLogin {
    access_token: string
  }
  export interface ResAuthButtons {
    [propName: string]: any
  }
  export interface verificationCode {
    uuid: string
    img: string
  }
}

// * 用户管理
export namespace User {
  export interface ReqGetUserParams extends ReqPage {
    username: string
    gender: number
    idCard: string
    email: string
    address: string
    createTime: string[]
    status: number
  }
  export interface ResUserList {
    id: string
    username: string
    gender: string
    age: number
    idCard: string
    email: string
    address: string
    createTime: string
    status: number
    avatar: string
    children?: ResUserList[]
  }
}
