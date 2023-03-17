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
  mobile: string
  pageNum: number
  pageSize: number
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
}

// * myAccount
export namespace MyAccount {
  export interface GetMyAccount {
    mobile: string
  }
  export interface EditMyAccount {
    accountViews: string
    addFans: string
    buy: string
    collect: string
    earnMoney: string
    fans: string
    fansViews: string
    historyBrowsing: string
    interest: string
    invitation: string
    mobile: string
    publish: string
    sellOut: string
    views: string
  }
}
// * MyPublish
export namespace MyPublish {
  export interface GetMyPublish {
    mobile: string
  }
  export interface EditMyPublish {
    mobile: string
    shine: string
    shineNum: string
    viewsNum: string
  }
}
// * Notice
export namespace Notice {
  export interface GetNotice {
    mobile: string
  }
  export interface EditNotice {
    interactiveMessages: string
    mobile: string
    notificationMessage: string
  }
}
// * mySold list data
export namespace MySold {
  export interface EditMySold extends ResMySold {
    id: string
  }
  export interface ResMySold {
    actualCollection: string
    buyerNickname: string
    buyerPicture: string
    mobile: string
    productName: string
    productPicture: string
    productStatus: string
    sellStatus: string
  }
}
// * onSale list data
export namespace OnSale {
  export interface EditOnSale extends ResOnSale {
    id: string
  }
  export interface ResOnSale {
    mobile: string
    productName: string
    productPicture: string
    productPrice: string
    views: string
    viewsNum: string
    want: string
  }
}
// * Chat list data
export namespace Chat {
  export interface EditChat extends ResChat {
    id: string
  }
  export interface ResChat {
    buyerNickname: string
    buyerPicture: string
    mobile: string
    msg: string
    productPicture: string
  }
}
